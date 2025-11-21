/**
 * 实现dom元素和纯json对象的双向绑定<br>
 * email:shuidrinking@126.com<br>
 * author:liuxiaosong<br>
 * date:2025-11-20<br>
 * 
 * 用法：new SDMVVMComponent(_container, jsonObject);
 */
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