
export function setToken(token){
	return localStorage.setItem('USER_TOKEN',token)
};

export function getToken(){
	return localStorage.getItem('USER_TOKEN')
};

export function reToken(){
	localStorage.removeItem('USER_TOKEN')
};