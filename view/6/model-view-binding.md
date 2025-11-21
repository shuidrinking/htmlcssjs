#### 实现MVVM模式的“模型-视图”双向绑定后实时同步

<style>
.container {
	max-width: 100%;
	margin: 0 auto;
	background: white;
	border-radius: 12px;
	box-shadow: 0 5px 15px rgba(0, 0, 0, 0.1);
	overflow: hidden;
}
.content {
	padding: 30px;
	display: grid;
	grid-template-columns: 1fr 1fr;
	gap: 30px;
}
.form-section, .display-section {
	background: #f9f9f9;
	padding: 20px;
	border-radius: 8px;
	box-shadow: 0 2px 5px rgba(0, 0, 0, 0.05);
}
h2 {
	color: #4a6fa5;
	margin-bottom: 15px;
	padding-bottom: 10px;
	border-bottom: 1px solid #eaeaea;
}
.form-group {
	margin-bottom: 15px;
}
label {
	display: block;
	margin-bottom: 5px;
	font-weight: 600;
	color: #555;
}
input, select {
	width: 100%;
	height: unset;
	padding: 10px;
	border: 1px solid #ddd;
	border-radius: 4px;
	font-size: 16px;
}
.user-card {
	background: white;
	border-radius: 8px;
	padding: 20px;
	box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);
	margin-top: 20px;
}
.user-card h3 {
	color: #4a6fa5;
	margin-bottom: 10px;
}
.user-card p {
	margin-bottom: 8px;
}
.user-card .label {
	font-weight: 600;
	color: #555;
}
.status {
	grid-column: 1 / -1;
	background: #e8f5e9;
	padding: 15px;
	border-radius: 8px;
	margin-top: 20px;
	border-left: 4px solid #4caf50;
}
.code-section {
	grid-column: 1 / -1;
	background: #2d3748;
	color: #e2e8f0;
	padding: 20px;
	border-radius: 8px;
	margin-top: 20px;
	overflow-x: auto;
}
.code-section h3 {
	color: #63b3ed;
	margin-bottom: 15px;
}
pre {
	white-space: pre-wrap;
	font-family: 'Courier New', Courier, monospace;
	font-size: 14px;
}
.explanation {
	grid-column: 1 / -1;
	background: #edf2f7;
	padding: 20px;
	border-radius: 8px;
	margin-top: 20px;
}
.explanation h3 {
	color: #4a6fa5;
	margin-bottom: 10px;
}
.explanation ul {
	padding-left: 20px;
}
.explanation li {
	margin-bottom: 8px;
}
@media (max-width: 768px) {
	.content {
		grid-template-columns: 1fr;
	}
}
</style>
<script src="./javascript/components/SDMVVMComponent.js" onload="doInitMvvm();" defer></script>

<div class="container">
	<div class="content">
		<div class="form-section">
			<h2>用户信息表单</h2>
			<div class="form-group">
				<label for="name">姓名:</label>
				<input type="text" id="name" v-model="user.name">
			</div>
			<div class="form-group">
				<label for="email">邮箱:</label>
				<input type="email" id="email" v-model="user.email">
			</div>
			<div class="form-group">
				<label for="age">年龄:</label>
				<input type="number" id="age" v-model="user.age">
			</div>
			<div class="form-group">
				<label for="country">国家:</label>
				<select id="country" v-model="user.country">
					<option value="">请选择</option>
					<option value="中国">中国</option>
					<option value="美国">美国</option>
					<option value="英国">英国</option>
					<option value="日本">日本</option>
				</select>
			</div>
		</div>
		<div class="display-section">
			<h2>用户信息显示</h2>
			<div class="user-card">
				<h3>用户详情</h3>
				<p><span class="label">姓名:</span> <span v-text="user.name"></span></p>
				<p><span class="label">邮箱:</span> <span v-text="user.email"></span></p>
				<p><span class="label">年龄:</span> <span v-text="user.age"></span></p>
				<p><span class="label">国家:</span> <span v-text="user.country"></span></p>
				<p><span class="label">注册时间:</span> <span v-text="formattedTime"></span></p>
			</div>
		</div>
		<div class="status">
			请在左侧表单中修改任何字段，右侧显示区域会实时更新。这个过程实际已经执行了“输入框-》模型-》展示组件”两次双向绑定。
		</div>
	</div>
</div>

<script type="text/javascript">
	function doInitMvvm(){
		//创建MVVM实例
		const container = document.querySelector('.container');
		const model = {
			user: {
				name: '张三',
				email: 'zhangsan@example.com',
				age: 28,
				country: '中国'
			},
			formattedTime: new Date().toLocaleString()
		};
		const app = new SDMVVMComponent(container, model);
	}
</script>

>1、MVVM即“模型-视图-协调器”模式，谁和谁双向绑定？绑定后达到什么效果？
<pre class="prettyprint lang-javascript">
模型Model: The underlying JavaScript data object that stores application state
视图View: The HTML DOM elements that users interact with
协调器ViewModel: A JavaScript object that mediates between the Model and the View

绑定机制: The synchronization mechanism that keeps Model and View in sync
This terminology specifically describes what's happening: the binding occurs between the data model and the visual view, making it more precise than the generic "two-way binding."
</pre>

>2、MVVM模式的实现需要的组件和原理
```
（1）模型数据存取强制代理：模型内各原子数据都配置一个拦截器，使用Proxy，实现对数据的访问和修改进行拦截，负责数据的存取以及调用dom修改器
（2）dom修改器：为模型内每个原子数据都配置若干个dom修改器，当数据发生变化时，逐个调用每个修改器更新其绑定的DOM元素
（3）dom输入监听器：为每个dom元素都设置输入事件监听器，当DOM元素的值发生变化时，触发监听器更新其绑定的模型中的数据
```
>3、MVVM中的“加载时建立绑定关系”和“实时同步”是两套动作，分别是怎么实现的
<pre class="prettyprint lang-javascript">
（1）在HTML元素上为element设置 v-model或者v-text 属性，其值为指定要绑定的模型数据的key，key的值允许对象多层嵌套的点"."连接
（2）扫描页面元素，获取其属性中设置的“绑定模型”，建立绑定关系
（3）绑定关系建立后，立即建立相互实时同步的动作：为element添加监听器，在事件触发后监听器负责立即更新模型中的数据，为模型的具体属性值被set后置后继动作，更新dom元素的渲染内容
</pre> 

>4、关键代码段
<pre class="prettyprint lang-javascript">
class SDMVVMComponent{
	constructor(_containner, model){
		this._containner = _containner; //本组绑定的根元素
		this.model = this.reactiveModel(model, "");//建立绑定关系，同时在其中设置实时同步的方法
		this.modelItemEffectMap = new Map(); //数据项变更后需要执行的动作函数的map&lt;key为model的数据项的key，value为要执行的函数&gt;

		// 编译模板，支持v-model和v-text两种指令绑定
		this.compile(_containner);
	}

	//编译指令，对v-model和v-text属性指定的绑定进行取model值渲染
	compile(rootNode) {  
		const nodes = rootNode.querySelectorAll('[v-model], [v-text]');
		nodes.forEach(node => {  
			// v-model  
			if (node.hasAttribute('v-model')) {
				const expr = node.getAttribute('v-model').trim();
				//添加双向绑定后互相实时同步的动作
				this.bindModel(node, expr);  
			}
			// v-text  
			if (node.hasAttribute('v-text')) {  
				const expr = node.getAttribute('v-text').trim();
				//添加双向绑定后互相实时同步的动作
				this.bindText(node, expr);  
			}
		});
	}

	//添加双向绑定后互相实时同步的动作
	bindModel(node, key) {
		// 初始化值
		node.value = this.getModelValue(key);
		// 监听输入事件
		node.addEventListener('input', (e) => {
			this.setModelValue(key, e.target.value);
		});
		// 添加能效函数，model值变化时设置元素的value
		this.addEffect(key, () => {
			node.value = this.getModelValue(key);
		});
	}
	
	//添加双向绑定后互相实时同步的动作
	bindText(node, key) {
		// 初始化文本
		node.textContent = this.getModelValue(key);
		// 添加能效函数，model值变化时设置元素的textContent
		this.addEffect(key, () => {
			node.textContent = this.getModelValue(key);
		});
	}

	//获取模型中指定key的值
	getModelValue(key) {
		// 支持嵌套属性，如 user.name
		return key.split('.').reduce((obj, k) => obj[k], this.model);
	}
	//设置模型中指定key的值
	setModelValue(key, value) {
		// 支持嵌套属性
		const keys = key.split('.');
		const lastKey = keys.pop();
		const obj = keys.reduce((obj, k) => obj[k], this.model);
		obj[lastKey] = value;
	}
	//当模型的值变化时，需要执行的能效函数
	addEffect(key, updateView) {
		if (!this.modelItemEffectMap.has(key)) {
			this.modelItemEffectMap.set(key, []);
		}
		this.modelItemEffectMap.get(key).push(updateView);
	}

	// 创建模型数据的存取代理
	reactiveModel(model, path) {
		const self = this;
		// 为对象的所有属性创建代理，不支持数组
		for (let key in model) {
			if (model.hasOwnProperty(key) && model[key] !== null && typeof model[key] === 'object' && !Array.isArray(model[key])) {
				// 递归创建嵌套对象的代理
				model[key] = this.reactiveModel(model[key], path ? `${path}.${key}` : key);
				/*
				const result = Reflect.get(target, key, receiver);
				// 递归代理嵌套对象
				if (_isObject(result)){
					return reactive(result);
				}
				*/
			}
		}
		return new Proxy(model, {
			get(target, key) {
				return target[key];
			},
			set(target, key, value) {
				const oldValue = target[key];
				target[key] = value;
				// 构建完整路径
				const fullPath = path ? `${path}.${key}` : key;
				// 如果新值是对象，递归创建代理
				if (value && typeof value === 'object' && !Array.isArray(value)) {
					target[key] = self.reactiveModel(value, fullPath);
				}
				// 触发所有绑定到此路径的更新
				if (self.modelItemEffectMap.has(fullPath)) {
					self.modelItemEffectMap.get(fullPath).forEach(updateView => updateView());
				}
				// 如果值发生变化，触发父级路径的更新
				if (oldValue !== value && path) {
					if (self.modelItemEffectMap.has(path)) {
						self.modelItemEffectMap.get(path).forEach(updateView => updateView());
					}
				}
				return true;
			}
		});
	}

	//判定一个标的物是否是object
	_isObject(val) {  
		return val !== null && typeof val === 'object';  
	} 
}
</pre>
