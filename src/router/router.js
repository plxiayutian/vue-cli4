//引入vue
import Vue from 'vue';
//引入vue路由
import VueRouter from 'vue-router';
//引入页面展示端路由
import arrIndex from './index.js';
//引入管理端路由
import arrManage from './manage.js';

//所有路由
let routes = arrIndex.concat(arrManage);
//使用路由
Vue.use(VueRouter);

//路由配置
export default new VueRouter({
	base: '/',
	mode: 'history', //'hash'
	// base: process.env.BASE_URL,
	routes: routes
});
