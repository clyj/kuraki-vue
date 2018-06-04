<template>
	<div class="error404">
		<div class="error404-body-con">
			<el-row>
				<el-col :xs="{span: 22, offset: 1}" :sm="{span:16,offset:4}" :md="{span:12,offset:6}">
					<el-card>
						 <div class="error404-body-con-title">4<span><i class="el-icon-question" ></i></span>4</div>
						 <p class="error404-body-con-message">YOU&nbsp;&nbsp;LOOK&nbsp;&nbsp;LOST</p>
						 <div class="error404-btn-con">
						 	  <el-button @click="goHome()" round>&nbsp;&nbsp;返回首页&nbsp;&nbsp;</el-button>
						 </div>
					</el-card>
				</el-col>
			</el-row>
		</div>
	</div>
</template>

<style lang="less">
	@import './404.less';
</style>

<script >
	export default{
		name:'error404',
		methods:{
			goHome(){
				this.$router.push({
					path:'/'
				});
			}
		}
	}
</script>