import request from '@/libs/utils'

export default{
	login:(params)=>{
		return request({
			url:'user/login',
			method:'post',
			data:params,
		})
	},
	register:(params)=>{
		return request({
			url:'user/signup',
			method:'post',
			data:params,
		})
	}
}
