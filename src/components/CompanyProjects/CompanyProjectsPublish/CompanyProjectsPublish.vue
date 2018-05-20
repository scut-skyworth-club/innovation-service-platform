<template>
  <div id="company-project-publish">
    <Breadcrumb class="breadcrumb">
        <BreadcrumbItem to="/company/project">项目</BreadcrumbItem>
        <BreadcrumbItem>发布项目</BreadcrumbItem>
    </Breadcrumb>
    <p class="title">发布您的项目</p>
    <Form :model="formData" label-position="left" :label-width="70" class="form">
      <FormItem label="项目名称" class="label" style="font-size:20px">
        <Input v-model="formData.proName" clearable></Input>
      </FormItem>
      <FormItem label="项目描述">
        <Input v-model="formData.proDescription" type="textarea" :autosize="{minRows: 2,maxRows: 5}"></Input>
      </FormItem>
      <FormItem label="项目分类">
        <Select v-model="formData.proType">
          <Option value="未定义1">未定义1</Option>
          <Option value="未定义2">未定义2</Option>
          <Option value="未定义3">未定义3</Option>
        </Select>
      </FormItem>
      <FormItem label="招募角色">
        <Select v-model="formData.proRole">
          <Option value="未定义1">未定义1</Option>
          <Option value="未定义2">未定义2</Option>
          <Option value="未定义3">未定义3</Option>
        </Select>
      </FormItem>
       <FormItem label="项目周期">
        <Select v-model="formData.proCycle">
          <Option value="未定义1">未定义1</Option>
          <Option value="未定义2">未定义2</Option>
          <Option value="未定义3">未定义3</Option>
        </Select>
      </FormItem>
      <FormItem label="项目金额">
        <Input v-model="formData.proMoney" clearable></Input>
      </FormItem>
      <FormItem label="项目要求">
        <Input v-model="formData.proRequset" type="textarea" :autosize="{minRows: 2,maxRows: 5}"></Input>
      </FormItem>
      <FormItem label="需求文件">
        <Upload :action="uploadAction" :before-upload="handleUpload">
          <Button type="ghost" icon="ios-cloud-upload-outline">上传文件</Button>
          <div v-if="formData.proFile !== null">Upload file: {{ formData.proFile.name }}</div>
        </Upload>
      </FormItem>
    </Form>
    <div class="button">
      <Button type="primary" class="button-1">确定发布</Button>
      <Button type="ghost">暂时保存</Button> 
    </div>
  </div>
</template>

<script>
import { Form,FormItem,Slider,Input } from 'iview';
export default {
  name: 'CompanyProjectsPublish',
  components: {
    Form,FormItem,Slider,Input
  },
  data() {
    return {
      formData:{
        proName:'',
        proDescription:'',
        proType:'',
        proRole:'',
        proCycle:'',
        proMoney:'',
        proRequset:'',
        proFile:null
      },
      uploadAction:'//'

    }
  },
  methods: {
    handleUpload (file) {
      this.formData.proFile = file;
      console.log(file)
      return false;
    },
  }
};
</script>

<style lang="scss" scoped>
.breadcrumb{
  margin:40px 0 0 50px;
}
.title{
  font-size: 24px;
  text-align: center;
  margin: 10px 0;
}
.form{
  margin: 20px 50px 0 50px;
}
.button{
  display: flex;
  justify-content: center;
  .button-1{
    margin-right: 40px;
  }
}
</style>
