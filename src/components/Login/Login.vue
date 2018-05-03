<template>
  <div id="login">
    <Tabs 
        value="person" 
        :animated="false" @on-click="changeCurrent" :class="current">
        <TabPane 
        :label="item.label" 
        :name="item.name"
        v-for="(item,index) in LoginList"  
        :key="index">
            <Form :label-width="140">
                <FormItem label="用户名/手机号">
                    <Input v-model="item.username" style="width:285px"></Input>
                </FormItem>
                <FormItem label="密码" class="pass-box">
                    <Input 
                    type="password" 
                    v-model="item.password"
                    @keyup.enter.native="loginIn" 
                    style="width:285px"></Input>
                    <router-link :to="{name:'ForgetPassword'}" class="forgetPas">忘记密码></router-link>
                    <span class="err" v-show="show">{{err}}</span>
                </FormItem>
                <Row type="flex" justify="center" :gutter="16">
                    <Col  span="6">
                        <Button type="primary" @click="loginIn" long class="btn">登录</button>  
                    </Col>
                    <Col span="6">
                        <Button type="primary" long class="btn">注册</Button>
                    </Col>
                </Row>
               
            </Form>
        </TabPane>
    </Tabs>
  </div>
</template>
<script>
import Cookies from 'js-cookie'
// Cookies.set('user', this.form.userName);
export default {
  name: 'Login',
  data(){
      return {
        current:'person',
        err:'error',
        LoginList:{
            person:{
              name:'person',
              label:'个人用户',
              username:'',
              password:''
            },
            company:{
              name:'company',
              label:'企业用户',
              username:'',
              password:''
            }
        },
        show:false
      }
    },
//    mounted(){
//      /*页面挂载获取cookie，如果存在username的cookie，则跳转到主页，不需登录*/
//      if(Cookies.get('username')){
//        this.$router.push('/')
//      }
//    },
    methods:{
      changeCurrent(name){
          this.current = name;
          console.log(this.current);
      },
      loginIn(){
        //点击登录，先判断是企业端还是用户端，分别发出相应请求。
        if(this.current==='person'){
            var username = this.LoginList.person.username;
            var password = this.LoginList.person.password;
        }else{
            var username = this.LoginList.company.username;
            var password = this.LoginList.company.password;
        };
        if(username==''&&password ==''){
          alert("请输入用户名或密码");
          return ;
        };
        if(username=='123'&password =='456'){
          Cookies.set("userId",'userId',{ expires: 1 });
          Cookies.set('userName','userName',{ expires: 1 });
        }
        //发送请求
//        if(this.current === 'company'){
//          this.$ajax({
//            url: '/company/login',
//            data:{
//              "companyName"username,
//              "password":password ,
//            },
//            method: 'get',
//          })
//            .then((res)=>{
//              console.log(res.data);
//              Cookies.set("userId",res.data.userId,{ expires: 1 });
//              Cookies.set('userName',res.data.userName,{ expires: 1 });
//              if(res.data.isSuccessful){
//                this.$router.push('/')
//              }else if(res.data.errorMessage){
//                this.err=res.data.errorMessage;
//              }
//            })
//            .catch((err)=>{
//              console.log(err.data)
//            })
//        }else{
//          this.$ajax({
//            url: '/user/login',
//            data:{
//              identity:username,
//              password:password,
//            },
//            method: 'get',
//          })
//            .then((res)=>{
//              console.log(res.data);
//              Cookies.set("userId",res.data.userId,1);
//              Cookies.set('userName',res.data.userName,1);
//              if(res.data.isSuccessful){
//                this.$router.push('/')
//              }else if(res.data.errorMessage){
//                this.err=res.data.errorMessage;
//              }
//            })
//            .catch((err)=>{
//              console.log(err.data)
//            })
//        }
      },
    }
}
</script>
<style lang="scss">
    .person .ivu-tabs-nav{
        width: 100%;
        background-color: #2d8cf0;
    }
    .company .ivu-tabs-nav{
        width: 100%;
        background-color: #000;
    }
    #login .ivu-tabs-nav .ivu-tabs-tab{
        width: 50%;
        padding: 8px 16px;
        margin-right: 0;
        text-align:center;
    }
    #login .ivu-tabs-ink-bar{
        display: none !important;
    }
    #login .ivu-tabs-nav .ivu-tabs-tab-active{
        color: #fff;
    }
</style>
<style lang="scss" scoped>
    #login{
        margin: 50px auto;
        padding-bottom:20px;
        border: 1px solid #ccc;
    }
    .forgetPas{
        margin:0 40px;
        color: #000;
    }
    .pass-box{
        position: relative;
    }
    .pass-box .err{
        position: absolute;
        bottom:-24px;
        left: 10%;
        color: red;
    }
</style>
