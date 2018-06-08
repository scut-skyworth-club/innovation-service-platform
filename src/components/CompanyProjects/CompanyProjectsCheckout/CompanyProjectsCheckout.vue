<template>
<div id="company-project-checkout">
  <Breadcrumb class="breadcrumb">
    <BreadcrumbItem to="/company/project">项目</BreadcrumbItem>
    <BreadcrumbItem>我的项目</BreadcrumbItem>
  </Breadcrumb>
  <div id="company-has-project" v-if="items.length>0">
    <div class="company-project-items">
      <div class="company-project-item" v-for="(item,index) in items" :key="index" v-show="(index<page*4)&&(index>=page*4-4)">
        <router-link v-if="item.proState===0" to="/company/project/publish">
          <Card class="card">
            <div class="circle">
              <i-circle :percent="20" stroke-color="#ed3f14">
                <Icon type="ios-information-empty" size="100" class="icon-unpublished"></Icon>
              </i-circle>
            </div>
            <p class="icon-unpublished description">项目尚未发布</p>
            <p class="icon-unpublished">点击进行编辑</p>
          </Card>
        </router-link>
        <router-link v-else-if="item.proState===1" to="/">
          <Card class="card">
            <div class="circle">
              <i-circle :percent="40" stroke-color="#ff9900">
                <Icon type="ios-help-empty" size="100" class="icon-published"></Icon>
              </i-circle>
            </div>
            <p class="icon-published description">项目已发布</p>
            <p class="icon-published">共有24人投递简历</p>
          </Card>
        </router-link>
        <router-link v-else-if="item.proState===2" :to="{path:'/company/project/stage',query:{proName:item.proName}}">
          <Card class="card">
            <div class="circle">
              <i-circle :percent="80" stroke-color="#2d8cf0">
                <Icon type="ios-arrow-thin-up" size="80" class="icon-ongoing"></Icon>
              </i-circle> 
            </div>
            <p class="icon-ongoing">进行中</p>
          </Card>
        </router-link>
        <router-link  v-else-if="item.proState===3" :to="{path:'/company/project/stage',query:{proName:item.proName}}">
          <Card class="card">
            <div class="circle">
              <i-circle :percent="100" stroke-color="#19be6b">
                <Icon type="ios-checkmark-empty" size="100" class="icon-completed"></Icon>
              </i-circle>
            </div>
            <p class="icon-completed">项目已完成</p>
          </Card>
        </router-link>
      </div>
    </div>
    <Page class="page" :current="page" :total="total" :page-size="4" @on-change="pageChange"></Page>
  </div>
  <div v-else id="company-no-project">
    <p class="company-no-project-p">您还没有任何项目</p>
    <router-link to="/company/projects/publish" >现在创建一个？</router-link>
  </div>
</div>

</template>

<script>
export default {
  data () {
    return {
      page: 1,
      items:[ // 待更新的数据
        {
          "proId": 0,
          "proName": '第一个项目',
          "proMoney": 1000,
          "proType": 'typeA',
          "companyName": 'companyA',
          "proCycle": 37,
          "pubTime": 1,
          "proDescription": "description",
          "proRequest": "request",
          "proState": 0
        },
        {"proId":1,"proName": '第一个项目',"proState": 1},
        {"proId":2,"proName": '第一个项目',"proState": 2},
        {"proId":3,"proName": '第二个项目',"proState": 3},
        {"proId":4,"proState": 1},
        {"proId":5,"proState": 0},
        {"proId":6,"proState": 3},
        {"proId":7,"proState": 1},
        {"proId":8,"proState": 2},
        {"proId":9,"proState": 3}
      ]
    }
  },
  computed:{
    total: function() {
      return this.items.length
    }
  },
  methods:{
    pageChange:function(currentPage){
      this.page = currentPage
    }
  }
};
</script>

<style lang="scss" scoped>
.breadcrumb{
  margin:40px 0 0 50px;
}
.company-project-items{
  margin: 20px 50px;
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr;
  .card{
    width: 20vw;
    height: 70vh;
    display: flex;
    justify-content: center;
    text-align:center;
    .circle{
      margin: 20vh 0 20px 0;
    }
    .description{
      margin-bottom: 2px;
    }
    .icon-unpublished{
      color: #ed3f14;
    }
    .icon-published{
      color: #ff9900;
    }
    .icon-ongoing{
      color: #2d8cf0;
    }
    .icon-completed{
      color: #19be6b;
    }
  }
}
.page{
  display: flex;
  justify-content: center;
}
#company-no-project{
  text-align: center;
  margin-top: 30vh;
  font-size: 24px;
  .company-no-project-p{
    margin-bottom: 12px;
  }
}
</style>
