<template>
  <div id="forget-password">
     <div class="forget" v-if="forget">
        <Row>
          <Col span="12"><h3>忘记密码</h3></Col>
        </Row>
        <br>
        <Form label-position="right" :label-width="80">
          <FormItem label="手机号">
              <Input v-model="phoneNum"  style="width:285px"></Input>
          </FormItem>
          <FormItem label="验证码">
              <Input v-model="code"  style="width:185px"></Input>
              <Button @click="acquirecode" :disabled="disabled">{{ showMsg }}</Button>
          </FormItem>
        </Form>
        <Row type="flex" justify="center">    
          <Col span="10">
              <Button @click="handlesubmit" long>确认</Button>
          </Col>
        </Row>
      </div>
      <div class="revise" v-else>
        <Row>
          <Col span="12"><h3>修改密码</h3></Col>
        </Row>
        <br>
        <Form label-position="right" :label-width="80">
          <FormItem label="输入新密码">
              <Input v-model="inputpsd"  style="width:285px"></Input>
          </FormItem>
          <FormItem label="确认新密码">
              <Input v-model="inputpsdAgain"  style="width:285px"></Input>
          </FormItem>
        </Form>
        <Row type="flex" justify="center">    
          <Col span="10">
              <Button @click="finalsubmit" long>确认</Button>
          </Col>
        </Row>
     </div>
  </div>
</template>

<script>
export default {
  name: 'ForgetPassword',
  data(){
    return {
      phoneNum:'',
      code:'',
      forget:true,
      disabled:false,
      showMsg:'获取验证码',
      receivecode:'456',
      inputpsd:'',
      inputpsdAgain:''
    }
  },
  methods:{
    handlesubmit () {
     if(this.code==this.receivecode){
       this.forget = false;
     }
    },
    acquirecode(){
      this.disabled=true;
      this.showMsg = '验证码已发送..'
      // this.$ajax.get('/identity')
      //   .then((res)=>{
      //     this.disabled=true;
      //     this.showMsg = '验证码已发送..'
      //   this.receivecode = res.data.idCode;
      // })
      // .catch((err)=>{

      // })
    },
    finalsubmit(){
      // this.$ajax.post('/user/forget/{phoneNum}',{
      //   "password":this.inputpsd,
      //   "rePassword":this.inputpsdAgain,
      //   "idCode":this.receivecode
      // })
      //   .then((res)=>{

      //   })
      //   .catch((err)=>{

      //   })
      alert('success');
    }
  }
};
</script>

<style lang="scss" scoped>
 #forget-password{
    margin: 50px auto;
    padding:20px;
    border: 1px solid #ccc;
  }
</style>
