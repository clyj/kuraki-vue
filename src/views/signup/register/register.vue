<template>
	<div class="register">
		<el-row >
			<el-col :xs="{span: 22, offset: 1}" :sm="{span:16,offset:4}" :md="{span:12,offset:6}">
				<el-card >
					<el-container>
						<el-header>
							<h1>注册</h1>
						</el-header>
						<el-main>
							<el-form :model="register" status-icon :rules="registerRules" ref="register" label-width="100px" >
								<el-form-item label="账号" prop="username">
									<el-input type="text" v-model="register.username" auto-complete="off"></el-input>
								</el-form-item>
								<el-form-item label="密码" prop="password">
									<el-input type="password" v-model="register.password" auto-complete="off"></el-input>
								</el-form-item>
								<el-form-item label="确认密码" prop="checkpassword">
									<el-input type="password" v-model="register.checkpassword" auto-complete="off"></el-input>
								</el-form-item>
								<el-button type="primary" :loading="loading" @click="submitForm('register')" >注册</el-button>
								<el-button @click="resetForm('register')">登录</el-button>
								
							</el-form>
						</el-main>
					</el-container>
				</el-card>
			</el-col>
		</el-row>
	</div>
</template>

<style lang="less">
    @import './register.less';
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

      var validatePass2 = (rule, value, callback) => {
        if (value.length<=0) {
          callback(new Error('请再次输入密码'));
        } else if(value !== this.register.password){
          callback(new Error('两次输入密码不一致!'));
        } else {
          callback();
        }
      };
      return {
        register: {
          username: '',
          password: '',
          checkpassword: '',
        },
        registerRules: {
          username:[
          	{validator: validateUser,trigger:'blur'}
          ],
          password: [
            {validator: validatePass,trigger:'blur' }
          ],
          checkpassword: [
            {validator: validatePass2,trigger:'blur' }
          ],
        },
        loading: false,

      };
    },
    methods: {
      submitForm(formName) {
        this.$refs[formName].validate((valid) => {
          if (valid) {
            this.loading = true
            this.$store.dispatch('Register',this.register).then((res)=>{
            	this.loading=false
              this.$router.push({name: 'login'})
            }).catch((e) => {
               this.loading=false 
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
        this.$router.push({name:'login'})
      }
    }
  }
</script>