import api from '@/api/user'
import * as types from '../types'
import {setToken,reToken} from '@/libs/auth'
const user ={
	state:{
		token:'',
	},

	getters :{

	},

	mutations:{
		[types.ADD_USER_TOKEN](state,token) {
			state.token = token
			setToken(token)
		},
		[types.USER_LOGOUT](state){
			state.token = ''
			reToken()
		}
	},

	actions:{
		LoginUser({commit},userInfo){
			return new Promise((resolve, reject)=>{
				api.login(userInfo).then(response =>{
					const data = response.data
					commit(types.ADD_USER_TOKEN,data.token)
					resolve(response)
				}).catch(error => {
					reject(error)
				})
			})
		},
		Register({commit},userInfo){
			return new Promise((resolve,reject)=>{
				api.register(userInfo).then(response =>{
					resolve(response)
				}).catch(error =>{
					reject(error)
				})
			})
		},
	},
}

export default user