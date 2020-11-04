import Vue from 'vue';
import App from './index.vue';
//引入vuex
import store from '../../store/store.js';
//引入vue路由
import router from '../../router/router.js';
//引入公用样式
import '../../assets/css/main.css';

// 引入element-ui
import '../../plugins/element.js'
//引入axios
import axios from 'axios';
import VueAxios from 'vue-axios'
//引入js
import $ from 'jquery'; //引入jquery
// 全局引入echarts
// import echarts from 'echarts';
// Vue.prototype.$echarts = echarts;

//axios绑定到vue上
// Vue.prototype.$axios = axios; 
Vue.use(VueAxios, axios)

Vue.config.productionTip = false

new Vue({
	router,
	// 把 store 对象提供给 “store” 选项，这可以把 store 的实例注入所有的子组件
	store,
	render: h => h(App),
}).$mount('#app')
