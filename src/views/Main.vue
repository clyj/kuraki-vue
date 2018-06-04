<template>
	<div class="main">
		<div class="main-header">
			<el-menu default-active="1"  class="el-menu-demo" mode="horizontal" background-color="#fff">
				<div class="header-container">
					<a class="logo" href="/">
						<img src="@/assets/logo.png">
						<span>
							纸短情长
						</span>
					</a>
					<ul class="header-container-box">
						<li><router-link to="/home">首页</router-link></li>
						<li><router-link to="/user">用户</router-link></li>
					</ul>
					<el-dropdown trigger="click">
					  <span class="el-dropdown-link">
					  	{{$route.meta.title}}
					    <i class="el-icon-caret-bottom"></i>
					  </span>
					  <el-dropdown-menu slot="dropdown">
					    <el-dropdown-item>
					    	<router-link to="/home">首页</router-link>
					    </el-dropdown-item>
					  </el-dropdown-menu>
					</el-dropdown>
					<ul class="header-container-right">
						<li>
							<el-dropdown trigger="click"  @command="userinfo">
							  <span class="el-dropdown-link">
							  	<div class="header-container-image" :style="{backgroundImage:`url(${headimage})`}" >
							  	</div>
							  </span>
							  <el-dropdown-menu slot="dropdown">
							    <el-dropdown-item command="logout">
							    	登出
							    </el-dropdown-item>
							  </el-dropdown-menu>
							</el-dropdown>
						</li>
					</ul>
				</div>
			</el-menu>
		</div>
		<div class="main-body">
			<router-view></router-view>
		</div>
	</div>
</template>

<style lang="less">
	@import "./Main.less";
</style>

<script >
	export default {
		data(){
			return{
				headimage:"https://avatars3.githubusercontent.com/u/18651613?v=4",
				
			}
		},
		mounted(){
		},
		methods:{
			userinfo(command){
				switch (command) {
					case "logout":
						this.$store.commit('USER_LOGOUT');
						this.$router.push({
	                        name: 'login'
	                    });
						break;
					default:

						break;
				}
			}
		},
		computed:{
			
		}

	}
</script>