import Vue from 'vue';
//引入axios
import axios from 'axios';
import VueAxios from 'vue-axios';
// axios 拦截器
// 添加请求拦截器
axios.interceptors.request.use(function (config) {
	console.log("request");
    // 在发送请求之前做些什么
    return config;
  }, function (error) {
	console.log("request error");
    // 对请求错误做些什么
    return Promise.reject(error);
  });

// 添加响应拦截器
axios.interceptors.response.use(function (response) {
	console.log("response");
    // 对响应数据做点什么
    return response;
  }, function (error) {
	console.log("response error");
    // 对响应错误做点什么
    return Promise.reject(error);
  });
//axios绑定到vue上
// Vue.prototype.$axios = axios; 
Vue.use(VueAxios, axios)