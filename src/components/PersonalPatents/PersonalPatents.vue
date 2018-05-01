<template>
  <Layout id="personalPatents">
   <div class="title"><h1>专利发布</h1></div>
   <div class="divide"></div>
    <Upload 
     ref="upload"
     :show-upload-list="false"
     :format="['jpg','jpeg','png']"
     :max-size="2048"
     :before-upload="handleBeforeUpload"
     :on-format-error="handleFormatError"
     :on-exceeded-size="handleMaxSize"
     type="select"
     :action="uploadUrl"
     class="pic_showBox">
      <div class="pic_chooseBox">
        <img :src="url" class="img_Box" v-show="url!==''">
        <span v-show="url==''">上传照片</span>   
      </div>
    </Upload>
    <div class="title"><h2>编辑专利信息</h2></div>
    <Form 
     label-position="left" 
     :label-width="150"
     ref="applyList" 
     :model="applyList" >
      <Row  v-for="(item,index) in applyList.items" :key="index" >
        <Col span="16">
          <FormItem  
           :label="item.name"
           class="input_box"
           :prop="'items.'+index+'.value'"
           :rules="{required: true, message: item.name +'不能为空', trigger: 'blur'}"> 
            <DatePicker 
             v-if="item.type==='date'" 
             type="date" 
             :placeholder="item.msg" 
             v-model="item.value" 
             style="width:100%">
            </DatePicker>
            <Input  v-else v-model="item.value" :placeholder="item.msg"></Input>
          </FormItem>
        </Col>
      </Row>
      <FormItem>
        <Row type="flex" justify="start">
          <Col span="8">
            <Button type="primary" @click="handlePub">发布专利</Button>
          </Col>
          <Col span="8">
            <Button type="primary" @click="handleSave">保存</Button>
          </Col>
        </Row>
      </FormItem>
    </Form>
  </Layout>
</template>

<script>
export default {
  name: 'PersonalPatents',
  data(){
    return{
      userId:'',
      userName:'',
      // 转base64码后的url
      url:'',
      uploadUrl:'', 
      applyList:{
        items:[
        {
          name:'专利名称',
          type:'text',
          msg:' 输入专利名称',
          value:'',
          index:1
        },
        {
          name:'专利权人',
          type:'text',
          msg:' 输入专利权人',
          value:'',
          index:2
        },
        {
          name:'专利号',
          type:'text',
          msg:' 输入专利号',
          value:'',
          index:3
        },
        {
          name:'申请日期',
          type:'date',
          msg:' 输入专利申请日期',
          value:'',
          index:4
          },
        {
          name:'授权公布日',
          type:'date',
          msg:' 输入专利的授权公布日',
          value:'',
          index:5
        },
        {
          name:'证书号',
          type:'text',
          msg:' 输入专利证书的证号',
          value:'',
          index:6
        },
        {
          name:'联系方式',
          type:'Number',
          msg:' 常用联系电话',
          value:'',
          index:7
        }
        ]
      },
    }
  },
  mounted() {
    //读取用户userId和Username，便于发送请求
    this.userId=this.getCookie("userId");
    this.userName=this.getCookie("userName");
    //读取存储 把input的value填上
//      this.$ajax({
//        url: '/user/patent/alter/'+this.userId,
//        method: 'get'
//      }).then((res) => {
//       this.image=res.data.imgUrl;
//       this.applyList[0].value=res.data.patentName;
//       this.applyList[1].value=res.data.patentOwner;
//       this.applyList[2].value=res.data.patentNum;
//       this.applyList[3].value=res.data.patentApplyNum;
//       this.applyList[4].value=res.data.patentAuthTime;
//       this.applyList[5].value=res.data.patentCertiNum;
//       this.applyList[6].value=res.data.patentState;
//
//      }).catch((data) => {
//        alert(data)
//      })
    },
  methods:{
    setCookie(key, value, iDay) {
      var oDate = new Date();
      oDate.setDate(oDate.getDate() + iDay);
      document.cookie = key + '=' + value + ';expires=' + oDate;
    },
    removeCookie(key) {
      setCookie(key, '', -1);//这里只需要把Cookie保质期退回一天便可以删除
    },
    getCookie(key) {
      var cookieArr = document.cookie.split('; ');
      for(var i = 0; i < cookieArr.length; i++) {
        var arr = cookieArr[i].split('=');
        if(arr[0] === key) {
          return arr[1];
        }
      }
      return false;
    },
    handleBeforeUpload(file) {
      // 创建一个 FileReader 对象
      let reader = new FileReader();
      this.uploadUrl = 'http://111.230.232.85:8080/proplatform/patent/certification/upload/'+this.userName;
      // readAsDataURL 方法用于读取指定 Blob 或 File 的内容
      // 当读操作完成， result 属性包含数据：URL（以 base64 编码的字符串表示文件的数据）
      // 读取文件作为 URL 可访问地址
      const _this = this;
      reader.onload = (e) => {
      // <img>的src设置成 readAsDataURL()方法生成的data URL。data URL可以从FileReader实例的result属性中得到。
        _this.url  = reader.result;
      };
      reader.readAsDataURL(file);  //异步执行
    },
    handleFormatError(file) {
      this.$Notice.warning({
       title: '文件格式不正确',
       desc: '文件 ' + file.name + ' 格式不正确，请上传 jpg 或 png 格式的图片。'
      })
    },
    handleMaxSize(file) {
      this.$Notice.warning({
       title: '超出文件大小限制',
        desc: '文件 ' + file.name + ' 太大，不能超过 2M。'
      })
    },
    // 专利信息保存
    handleSave(){
      // this.$ajax({
      //   url:'/user/patent/alter/'+this.userName,
      //   method:'post',
      //   data:{
      //     "patentName":this.applyList[0].value,
      //     "patentOwner":this.applyList[1].value,
      //     "patentNum":this.applyList[2].value,
      //     "patentApplyNum":this.applyList[3].value,
      //     "patentAuthTime":this.applyList[4].value,
      //     "patentCertiNum":this.applyList[5].value,
      //     "patentState":this.applyList[6].value
      //   }
      // })
      //   .then((res)=>{
      //     if(res.status>=200&&res.status<300){
      //       console.log('success');
      //     }
      //   })
      //   .catch((err) =>{
      //   })
    },
    // 专利信息提交
    handlePub(){
      let len = this.applyList.items.length;
      var _this=this;
      var completeNum=len;
      for(let i=0;i<len;i++){
        if(this.applyList.items[i].value===''){
          completeNum--;
        }
      };
      if(completeNum===len){
      //   this.$ajax({
      //     url:'/user/patent/alter/'+this.userName,
      //     method:'post',
      //     data:{
      //       "patentName":this.applyList[0].value,
      //       "patentOwner":this.applyList[1].value,
      //       "patentNum":this.applyList[2].value,
      //       "patentApplyNum":this.applyList[3].value,
      //       "patentAuthTime":this.applyList[4].value,
      //       "patentCertiNum":this.applyList[5].value,
      //       "patentState":this.applyList[6].value,
      //     }
      //   })
      //     .then((res)=>{
      //     })
      //     .catch((err) =>{
      //     })
      alert('success!');
      }
      else{
        alert('请填完整！');
      }
    }
  }
}
</script>
<style>
  .input_box .ivu-form-item-error-tip{
    position: absolute;
    top: 0;
    left: 100%;
    width: 100%;
    padding: 5px 0 0 10px;
    line-height: 32px;
  }
</style>
<style lang="scss" scoped>
  #personalPatents{
    width: 50%;
    margin:0 auto;
  }
  h1,h2{
    font-size: 14px;
  }
  .divide{
    background-color: #33c;
    width:100%;
    height:2px;
    margin:0 -5px 5px -5px;
  }
  .title h1{
    color:#3333CC;
  }
  .pic_showBox{
    display: inline-block;
    width:250px; 
    height:140px;
    border: 1px solid #5F5F5F;
    margin:0 auto;
    position:relative;
    top:0;
    left:-125px;
  }
  .img_Box{
    width:250px; 
    height:140px;
    background-size: 100% auto;
  }
  .pic_chooseBox span{
    display:inline-block;
    width:100%;
    background:rgb(139, 139, 139);
    color: rgb(255, 255, 255);
    position:absolute;
    bottom:0;
    left:0;
    text-align:center;
    cursor: pointer;
  }
  .input_box{
    margin-bottom: 10px;
  }
</style>
