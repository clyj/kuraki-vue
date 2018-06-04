<template>
	<div class="login">
		<el-row >
			<el-col :xs="{span: 22, offset: 1}" :sm="{span:16,offset:4}" :md="{span:12,offset:6}">
				<el-card >
					<el-container>
						<el-header>
							<h1>登录</h1>
						</el-header>
						<el-main>
							<el-form :model="login" status-icon :rules="loginRules" ref="login" label-width="100px" >
								<el-form-item label="账号" prop="username">
									<el-input type="text" v-model="login.username" auto-complete="off"></el-input>
								</el-form-item>
								<el-form-item label="密码" prop="password">
									<el-input type="password" v-model="login.password" auto-complete="off"></el-input>
								</el-form-item>
								
								<el-button type="primary" :loading="loading" @click="submitForm('login')" >登录</el-button>
								<el-button @click="resetForm('login')">注册</el-button>
								
							</el-form>
						</el-main>
					</el-container>
				</el-card>
			</el-col>
		</el-row>
	</div>
</template>

<style lang="less">
    @import './login.less';
</style>

<script>
  export default {
    data() {
   	  var validateUser = (rules,value,callback) => {
   	  	if (value.length<=0) {
   	  		callback(new Error('请输入用户名'));
   	  	} else {
   	  		callback();
   	  	}
   	  }
      var validatePass = (rule, value, callback) => {
        if (value.length<=0) {
          callback(new Error('请输入密码'));
        } else {
          callback();
        }
      };
      return {
        login: {
          username:  '',
          password:  '',
        },
        loginRules: {
          username:[
          	{validator: validateUser,trigger:'blur'}
          ],
          password: [
            {validator: validatePass,trigger:'blur' }
          ]
        },
        loading: false,
      };
    },
    methods: {
      submitForm(formName) {
        this.$refs[formName].validate((valid) => {
          if (valid) {
             this.loading = true;  
            this.$store.dispatch('LoginUser',this.login).then((res)=>{
              this.loading = false;  
              this.$message({
                message: '登入成功',
                type: 'success'
              });
            	this.$router.push({path: '/'})
            }).catch((e) => {  
              this.loading = false; 
              this.$message.error('登入失败');
              console.log(e)
            })  
          } else {
            console.log('error submit!!');
            return false;
          }
        });
      },
      resetForm(formName) {
        // this.$refs[formName].resetFields();
        this.$router.push({name:'register'})
      }
    }
  }
</script>