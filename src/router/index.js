import Vue from 'vue'
import Router from 'vue-router'
import {routers} from './router'
import {getToken} from '@/libs/auth'
import request from '@/libs/utils'

Vue.use(Router)

// 路由配置
const RouterConfig = {
    routes: routers
};



export const router = new Router(RouterConfig)

const whiteList = ['/signup/login','/signup/register'];

router.beforeEach((to,from,next) => {

	if (getToken()) {
		if (whiteList.indexOf(to.path) !== -1) {
			next({path: '/'})
		} else {
			request({
				url:'',
				method:'get',
			}).then(response=>{
				next()
			}).catch(error=>{
				console.log(error)
			})
			// next();
		}
	} else {
		if (whiteList.indexOf(to.path) !== -1) {  
   			next();  
  		} else {
  			next({name: 'login'})
  		}

	}

})
