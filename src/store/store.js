//引入vue
import Vue from 'vue';
//引入vuex路由
import Vuex from 'vuex';

Vue.use(Vuex);

//配置状态
export default new Vuex.Store({
	// 严格模式
	// strict: true, //开启严格模式，仅需在创建 store 的时候传入 strict: true,在严格模式下，无论何时发生了状态变更且不是由 mutation 函数引起的，将会抛出错误。这能保证所有的状态变更都能被调试工具跟踪到。
	// 开发环境与发布环境
	// 不要在发布环境下启用严格模式！严格模式会深度监测状态树来检测不合规的状态变更——请确保在发布环境下关闭严格模式，以避免性能损失。
	strict: process.env.NODE_ENV !== 'production', //类似于插件，我们可以让构建工具来处理这种情况
	// 单一状态树,作为一个“唯一数据源 (SSOT)”而存在
	//状态 --> vue.data
	state: {
		name: "",
		age:"",
	},
	// Vuex 允许我们在 store 中定义“getter”（可以认为是 store 的计算属性）
	// getter 在通过属性访问时是作为 Vue 的响应式系统的一部分缓存其中的
	getters: {
		// // Getter 会暴露为 store.getters 对象，你可以以属性的形式访问这些值：
		// // store.getters.doneTodos // -> [{ id: 1, text: '...', done: true }]
		// doneTodos: state => {
		// 	return state.todos.filter(todo => todo.done)
		// },
		// doneTodosCount: (state, getters) => {
		// 	return getters.doneTodos.length
		// },
		// // 通过让 getter 返回一个函数，来实现给 getter 传参
		// // store.getters.getTodoById(2) // -> { id: 2, text: '...', done: false }
		// // getter 在通过方法访问时，每次都会去进行调用，而不会缓存结果
		// getTodoById: (state) => (id) => {
		// 	return state.todos.find(todo => todo.id === id)
		// }
	},
	// 更改 Vuex 的 store 中的状态的唯一方法是提交 mutation，通过提交 mutation 的方式，而非直接改变 store.state的值
	// Mutation 必须是同步函数
	/*
		Mutation 需遵守 Vue 的响应规则:
			最好提前在你的 store 中初始化好所有所需属性。
			当需要在对象上添加新属性时，你应该：
				使用 Vue.set(obj, 'newProp', 123), 
				或者以新对象替换老对象 ：state.obj = { ...state.obj, newProp: 123 }
	*/
	mutations: {
		setName(state, name) {
			state.name = name;
		},
		setAge(state, age) {
			state.age = age;
		},
		// // 使用：store.commit('increment')
		// increment(state) {
		// 	state.count++;
		// },
		// // 提交载荷（Payload）:向 store.commit 传入额外的参数，即 mutation 的 载荷（payload）
		// // 使用：store.commit('increment', 10)
		// increment(state, n) {
		// 	state.count += n
		// },
		// // 对象风格，提交 mutation 的另一种方式是直接使用包含 type 属性的对象
		// // 使用: store.commit({type: 'increment',amount: 10})
		// increment(state, payload) {
		// 	state.count += payload.amount
		// }
	},
	// 操作 --> vue.methods
	/*
		Action 类似于 mutation，不同在于：
			Action 提交的是 mutation，而不是直接变更状态。
			Action 可以包含任意异步操作。
		可以调用 context.commit 提交一个 mutation，或者通过 context.state 和 context.getters 来获取 state 和 getters。
		context 对象不是 store 实例本身
		分发 Action：
			Action 通过 store.dispatch 方法触发：store.dispatch('increment')
		以载荷形式分发
			store.dispatch('incrementAsync', {
			  amount: 10
			})
		以对象形式分发
			store.dispatch({
			  type: 'incrementAsync',
			  amount: 10
			})
	*/
	actions: {
		// increment(context) {
		// 	context.commit('increment')
		// },
		// //  ES2015 的 参数解构
		// increment({ commit }) {
		// 	commit('increment')
		// },
		// // 异步操作
		// incrementAsync ({ commit }) {
		//     setTimeout(() => {
		//       commit('increment')
		//     }, 1000)
		// },
		// // async、await
		// async actionA ({ commit }) {
		//     commit('gotData', await getData())
		// },
		// async actionB ({ dispatch, commit }) {
		//     await dispatch('actionA') // 等待 actionA 完成
		//     commit('gotOtherData', await getOtherData())
		// }
	},
	// 模块
	// 由于使用单一状态树，应用的所有状态会集中到一个比较大的对象。当应用变得非常复杂时，store 对象就有可能变得相当臃肿。为了解决以上问题，Vuex 允许我们将 store 分割成模块（module）。每个模块拥有自己的 state、mutation、action、getter、甚至是嵌套子模块——从上至下进行同样方式的分割。
	/*
		const moduleA = {
			namespaced: true, //如果希望你的模块具有更高的封装度和复用性，你可以通过添加 namespaced: true 的方式使其成为带命名空间的模块。当模块被注册后，它的所有 getter、action 及 mutation 都会自动根据模块注册的路径调整命名。
			state: { ... },
			mutations: { ... },
			actions: { ... },
			getters: { ... }
		};
		const moduleB = {
			state: { ... },
			mutations: { ... },
			actions: { ... }
		}
		
		store.state.a // -> moduleA 的状态
		store.state.b // -> moduleB 的状态
	*/
	modules: {
		// a: moduleA,
		// b: moduleB
	}
});
