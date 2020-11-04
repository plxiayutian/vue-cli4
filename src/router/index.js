// 页面展示端路由
// require.ensure 是 Webpack 的特殊语法，用来设置 code-split point
const Index = resolve => {
	require.ensure(['../pages/index/index.vue'], () => {
		resolve(require('../pages/index/index.vue'));
	});
};
export default [{
		path: '/',
		redirect: '/index',
		component: Index
	},
	{
		path: '/index',
		name: 'index',
		component: Index
	},
	{
		path: '*',
		component: Index
		// ES7的懒加载，webpack2官网推荐使用,需要配合babel的syntax-dynamic- 
		// component: () => import('../pages/index/index.vue')
	}
];