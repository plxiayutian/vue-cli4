<template>
	<div id="app">
		
	</div>
</template>

<script>
	// 引入组件
	// import Header from '../../components/Header.vue';
	// import Footer from '../../components/Footer.vue';
	export default {
		name: 'IndexApp',
		data() {
			return {
			}
		},
		// 计算属性
		computed: {
			// // 测试Vuex
			// // 由于 Vuex 的状态存储是响应式的，从 store 实例中读取状态最简单的方法就是在计算属性中返回某个状态：
			// count() {
			// 	return this.$store.state.count;
			// },
			// // 箭头函数可使代码更简练
			// // count: state => state.count,
			// // mapState辅助函数
			// // 对象展开运算符,mapState 函数返回的是一个对象, 使用对象展开运算符将此对象混入到外部对象中
			// ...mapState({
			// 	// 'count' // 映射 this.count 为 store.state.count
			// }),
			// //使用store.getters
			// doneTodosCount() {
			// 	return this.$store.getters.doneTodosCount
			// },
			// // mapGetters 辅助函数
			// // 使用对象展开运算符将 getter 混入 computed 对象中
			// ...mapGetters([
			// 	'doneTodos',
			// 	'getTodoById'
			// ]),
			// ...mapGetters({
			// 	// 把 `this.doneCount` 映射为 `this.$store.getters.doneTodosCount`
			// 	doneCount: 'doneTodosCount'
			// })
		},
		components: {
			// 组件懒加载
			// Header: resolve => {
			// 	require(['../../components/Header.vue'], resolve)
			// },
			// Footer: resolve => {
			// 	require(['../../components/Footer.vue'], resolve)
			// }
		},
		methods: {
			
		},
		created: function() {
		
		}
		mounted: function() {
		
		}
	}
</script>

<style lang="scss" scoped>
	
</style>
