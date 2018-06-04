import Main from '@/views/Main.vue';

export const page404 = {
	path:'/*',
	name:'error-404',
	meta:{
		title:"404-页面不存在",
	},
	component:()=> import('@/views/error-page/404.vue')
};


export const SignUp = {
	path:'/signup',
	name:'signup',
	redirect:'/signup/login',
	component:()=> import ('@/views/signup/signup.vue'),
	children:[
		{
			path:'login',
			name:'login',
			meta:{
				title:'登录',
			},
			component:()=> import ('@/views/signup/login/login.vue')
		},
		{
			path:'register',
			name:'register',
			meta:{
				title:'注册',
			},
			component:()=> import ('@/views/signup/register/register.vue')
		}
	]
};


export const homepag = {
	path:'/',
	name: 'otherRouter',
    redirect: '/home',
    component: Main,
    children:[
    	{
    		path:'home',
    		name:"home_index",
    		meta:{
    			title:'首页',
    		},
    		component:()=> import('@/views/home/home.vue')
    	},
    ]

};

export const appRouter = {
	path:'/editor',
	name:'editor',
	component:Main,
	children:[
		{
			path:'md-editor',
			name:"md-editor",
			meta:{
				title:'写文章',
			},
			component:()=> import('@/views/article/markdown-editor/markdown-editor.vue')
		},
		{
			path:'text-editor',
			name:"text-editor",
			meta:{
				title:'写文章',
			},
			component:()=> import('@/views/article/text-editor/text-editor.vue')
		},
	]
}


export const routers = [
    SignUp,
    homepag,
    appRouter,
    page404
];