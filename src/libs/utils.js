import axios from 'axios'
import qs from 'qs'
import {router} from '@/router/index'
import {getToken,reToken} from './auth'
import { Notification } from 'element-ui'

const Utils = axios.create({
	baseURL : 'http://127.0.0.1:3000',
	timeout:10000,
	headers:{
    'Content-Type':'application/x-www-form-urlencoded',
	},
	withCredentials:true
});

// Utils.defaults.headers.common['Authorization'] = 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJkYXRhIjp7InVpZCI6IjVhZjUyZDZhNzUwMjhmNmQ1MDc1MmY5OSIsIm5hbWUiOiJtYWlrIn0sImV4cCI6MTUyNzU2MjA4MSwiaWF0IjoxNTI3NDc1NjgxfQ.SuSacuPPQbIMqcfUw9ZrtjYIPrS5fKDvecmmptJWJ6k';
//请求拦截
Utils.interceptors.request.use(
	config=>{
		// config.credentials = true
		// config.headers['Content-Type'] = 'application/x-www-form-urlencoded'
		const token = localStorage.getItem('USER_TOKEN')
		if (token) {
			config.headers.common['Authorization'] =  `Bearer ${token}`
			console.log(config.headers)

		}

		if(config.method  === 'post'){
		    config.data = qs.stringify(config.data);
		}
		return config
	},
	error =>{
		return Promise.reject(error)
	}
);


Utils.interceptors.response.use(
	response =>{
		return response
	},
	error =>{		
		if (error.response.status === 401) {
			if (getToken()) {
				reToken()
				Notification.error({
					title:'消息',
					message:'认证已过期，请重新登录',
					duration:4000
				})
			}

			router.push({
	          name: 'login'
	        });
		}
		return Promise.reject(error)
	}
);

export default Utils