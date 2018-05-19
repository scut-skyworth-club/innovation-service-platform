<template>
<div id="company-project-checkout">
  <Breadcrumb class="breadcrumb">
    <BreadcrumbItem to="/company/projects">项目</BreadcrumbItem>
    <BreadcrumbItem>我的项目</BreadcrumbItem>
  </Breadcrumb>
  <div id="company-has-project" v-if="items.length>0">
    <div class="company-project-items">
      <div class="company-project-item" v-for="(item,index) in items" :key="index" v-show="(index<page*4)&&(index>=page*4-4)">

      </div>
      <router-link v-if="item.proState===0" :to="{path:'/'}" class="company-project-item-container">
        <Card style="width:320px">
          <div style="text-align:center">
            <i-circle :percent="0" stroke-color="#5cb85c">
              <Icon type="ios-help-empty" size="100" ></Icon>
            </i-circle>
            <h3>项目尚未发布</h3>
            <h3>点击进行编辑</h3>
          </div>
        </Card>
      </router-link>
      <router-link v-else-if="item.proState===1" :to="{path:'/'}" class="company-project-item-container">
        <img class="company-project-item-image" src="../../../assets/images/已发布.png">
        <p class="company-project-item-message-2">项目已发布</p>
        <p class="company-project-item-message-2">共有<span class="company-project-item-people">24</span>人投递简历</p>
      </router-link>
      <router-link v-else-if="item.proState===2" :to="{path:'/project/stage',query:{proName:item.proName}}" class="company-project-item-container">
        <img class="company-project-item-image" src="../../../assets/images/进行中.png">
        <p class="company-project-item-message-3">项目进行中</p>
      </router-link>
      <router-link  v-else-if="item.proState===3" :to="{path:'/project/stage',query:{proName:item.proName}}"  class="company-project-item-container">
        <img class="company-project-item-image" src="../../../assets/images/已完成.png">
        <p class="company-project-item-message-4">项目已完成</p>
      </router-link>
    </div>

    <Page :current="2" :total="60" simple></Page>
  </div>
  <div v-else id="company-no-project">

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
  }
};
</script>

<style lang="scss" scoped>

</style>
