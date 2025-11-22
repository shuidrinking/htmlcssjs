/**
 * 实现dom元素和纯json对象的双向绑定<br>
 * email:shuidrinking@126.com<br>
 * author:liuxiaosong<br>
 * date:2025-11-20<br>
 * 
 * 用法：new SDMVVM(_container, jsonObject);
 */
var SDMVVM = SDMVVM??class{
	constructor(_containner, model){
		this._containner = _containner; //本组绑定的根元素
		/*
		 * 建立对model中所有数据项存取的拦截器，并将model指向这个拦截器
		 */
		this.model = this.reactiveModel(model, "");
		/*
		 * 当模型数据发生变更时，负责将数据同步到dom的同步器缓存map
		 * 数据项变更后需要执行的动作函数的map
		 * 同一个数据项有可能会有多个render函数，因此Map的原型为：
		 * <model的数据项的key，render函数数组>;
		 */
		this.modelToViewRenderMap = new Map();

		/*
		 * 扫描_containner内的dom元素，对设置v-model和v-text两种属性的元素按其属性值，与model的相应数据项目建立绑定关系
		 */
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
		// 添加dom渲染函数，model值变化时设置元素的value
		this.addRender(key, () => {
			node.value = this.getModelValue(key);
		});
	}
	
	//添加双向绑定后互相实时同步的动作
	bindText(node, key) {
		// 初始化文本
		node.textContent = this.getModelValue(key);
		// 添加dom渲染函数，model值变化时设置元素的textContent
		this.addRender(key, () => {
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
	//当模型的值变化时，需要执行的dom渲染函数
	addRender(key, render) {
		if (!this.modelToViewRenderMap.has(key)) {
			this.modelToViewRenderMap.set(key, []);
		}
		this.modelToViewRenderMap.get(key).push(render);
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
				if (self.modelToViewRenderMap.has(fullPath)) {
					self.modelToViewRenderMap.get(fullPath).forEach(render => render());
				}
				// 如果值发生变化，触发父级路径的更新
				if (oldValue !== value && path) {
					if (self.modelToViewRenderMap.has(path)) {
						self.modelToViewRenderMap.get(path).forEach(render => render());
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