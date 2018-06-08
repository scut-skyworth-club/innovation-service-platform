<template>
  <div id="company-project-stage">
    <Breadcrumb class="breadcrumb">
      <BreadcrumbItem to="/company/project">项目</BreadcrumbItem>
      <BreadcrumbItem to="/company/project/checkout">我的项目</BreadcrumbItem>
      <BreadcrumbItem>{{$route.query.proName}}</BreadcrumbItem>
    </Breadcrumb>
    <div class="guide-button">
      <Button type="primary" class="button-1">阶段任务指标</Button>
      <Button type="ghost">文件汇总</Button>
    </div>
    <div class="company-project-items">
      <div class="company-project-item" v-for="(item,index) in items" :key="index" v-if="(index<page*3)&&(index>=page*3-3)">
        <!--板块1：已完成-->
        <Card class="card" v-if="item.stageState===0">
          <div class="card-content">
            <div class="header">
              <p class="header-p">{{item.stageName}}</p>
              <Tag color="green" class="header-tag">已完成</Tag>
            </div>
            <div class="content">
              <Tag type="border" class="content-tag" color="green"  v-for="(target,index) in item.targets" :key="index">{{target.targetName}}</Tag>
            </div>
            <div class="footer">
              <div class="footer-content">
                <p class="title">任务完成时间</p>
                <p class="content">{{item.stageEndTime}}</p>
                <p class="title">阶段任务结算</p>
                <p class="content">{{item.stageSettlementRequest}}</p>
              </div>
              <Tag color="green" class="footer-tag">已结算</Tag>
            </div>
          </div>
        </Card>
        <!--板块2：进行中-->
        <Card class="card" v-if="item.stageState===1">
          <div class="card-content">
            <div class="header">
              <p class="header-p">{{item.stageName}}</p>
              <Tag color="blue" class="header-tag">进行中</Tag>
            </div>
            <div class="content">
              <Tag type="border" class="content-tag" :color="target.targetState===1?'blue':''"  v-for="(target,index) in item.targets" :key="index">{{target.targetName}}</Tag>
            </div>
            <div class="footer">
              <div class="footer-content">
                <p class="title">任务完成时间</p>
                <p class="content">{{item.stageEndTime}}</p>
                <p class="title">阶段任务结算</p>
                <p class="content">{{item.stageSettlementRequest}}</p>
              </div>
              <div class="footer-progress-info">
                <Tag color="blue" class="footer-tag">进度</Tag>
                <div class="footer-progress" :style="{width:item.stageProgress+'%'}">
                  <span class="footer-progress-num">{{item.stageProgress+'%'}}</span>
                </div>
              </div>
            </div>
          </div>
        </Card>
        <!--板块3；待开始-->
        <Card class="card" v-if="item.stageState===2">
          <div class="card-content">
            <div class="header">
              <p class="header-p">{{item.stageName}}</p>
              <Tag class="header-tag">待开始</Tag>
              <Button :type="isEdit?'primary':'ghost'" @click="handleEdit" class="header-button">{{isEdit?'确认':'编辑'}}</Button>
            </div>
            <div class="content">
              <Tag v-if="!isEdit" @on-close="handleClose(item,index)" closable class="content-tag" v-for="(target,index) in item.targets" :key="index">{{target.targetName}}</Tag>
              <input v-else class="content-tag" v-model="target.targetName"/>
              <Button icon="ios-plus-empty" class="content-button" type="dashed" @click="handleAddTarget(item)">添加指标</Button>
            </div>
            
            <div class="footer">
              <div class="footer-content">
                <p class="title">任务完成时间</p>
                <p class="content">{{item.stageEndTime}}</p>
                <p class="title">阶段任务结算</p>
                <p class="content">{{item.stageSettlementRequest}}</p>
              </div>
              <Tag class="footer-tag">待结算</Tag>
            </div>
          </div>
        </Card>
      </div>
      <div class="company-project-item-add">
        <Button class="card" type="dashed" @click="handleAddStage">
          <div class="card-content" >
            <Icon type="ios-plus" size="100"></Icon>
            <p>添加新阶段</p>
          </div>
        </Button>
      </div>
    </div>
    <Page class="page" :current="page" :total="total" :page-size="3" @on-change="pageChange"></Page>
  </div>
  

  
</template>

<script>
export default {
  data() {
    return {
      page: 1,
      isPopupWindowShow: false,
      isEditShow: false,
      isEdit: false,
      items: [
        {
          "stageId":0,
          "stageState": 0,
          "stageName": '阶段一',
          "stageEndTime":'2015.9.1',
          "stageSettlementRequest":'张三：好好学习，李四：天天向上，王五：ABCDEFG',
          "stageProgress":100,
          "targets":[{
            "targetId":0,
            "targetName":'好好学习指标',
            "targetState": 1
          },
          {
            "targetId":1,
            "targetName":'天天向上指标',
            "targetState": 1
          },
          {
            "targetId":2,
            "targetName":'ABCDEF指标',
            "targetState": 1
          }]
        },
        {
          "stageId":1,
          "stageState": 1,
          "stageName": '阶段二',
          "stageEndTime":'2015.9.1',
          "stageSettlementRequest":'张三：好好学习，李四：天天向上，王五：ABCDEFG',
          "stageProgress":70,
          "targets":[{
            "targetId":0,
            "targetName":'好好学习指标',
            "targetState": 1
          },
          {
            "targetId":0,
            "targetName":'好好学习指标',
            "targetState": 0
          },
          {
            "targetId":0,
            "targetName":'好好学习指标',
            "targetState": 0
          },
         
          ]
        },
        {
          "stageId":2,
          "stageState": 2,
          "stageName": '阶段三',
          "stageEndTime":'2015.9.1',
          "stageSettlementRequest":'张三：好好学习，李四：天天向上，王五：ABCDEFG',
          "stageProgress":0,
          "targets":[{
            "targetId":0,
            "targetName":'好好学习指标',
            "targetState": 1
          },
          {
            "targetId":0,
            "targetName":'好好学习指标',
            "targetState": 0
          },
          {
            "targetId":0,
            "targetName":'好好学习指标',
            "targetState": 0
          },
         
          ]
        }
      ],
    }
  },
  computed:{
    total: function() {
      return this.items.length
    }
  },
  methods:{
    handleAddTarget: function(item){
    const newTarget = {
      "targetId":0,
      "targetName":'请编辑指标',
      "targetState": 0
    }
    item.targets.push(newTarget)
    },
    handleAddStage: function(){
      const newStage = {
        "stageId":0,
        "stageState": 2,
        "stageName": '阶段x',
        "stageEndTime":'xxxx.xx.xx',
        "stageSettlementRequest":'xx',
        "stageProgress":0,
        "targets":[]
      }
      this.items.push(newStage)
      this.pageChange(Math.ceil(this.total/3))
    },
    handleEdit: function(){
      this.isEdit = !this.isEdit;
    },
    handleClose: function(item,index){
      item.targets.splice(index,1)
    },
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
.guide-button{
  margin: 20px 0 0 50px;
  .button-1{
    margin-right: 20px;
  }
}
.company-project-items{
  margin: 20px 50px;
  display: grid;
  grid-template-columns: 2fr 2fr 2fr 1fr;
  align-items: stretch;
  .company-project-item{
    .card{
      width: 25vw;
      height: 100%;
      display: grid;
      align-items: stretch;
      .card-content{
        display: grid;
        grid-template-rows: 36px 1fr 1fr;
        height: 100%;
        .header{
          display: grid;
          grid-template-columns: 1fr 1fr;
          align-items: center;
          .header-p{
            font-size: 24px;
          }
          .header-tag{
            justify-self: start;
            transform: translateX(-50%);
          }
          .header-button{
            position: absolute;
            top: 34px;
            right: 16px;
            transform: translateY(-50%)
          }
        }
        .content{
          align-self: start;
          display: grid;
          justify-items: stretch;
          .content-tag{
            margin: 6px 0;
            font-size: 14px;
            height: 40px;
            line-height: 40px;
            text-align: center;
          }
          .content-button{
            margin: 6px 0;
            font-size: 14px;
            height: 40px;
          }
        }
        .footer{
          align-self: end;
          .footer-content{
            background: #f8f8f9;
            margin: 12px 0;
            padding: 10px;
            .title{
              font-weight: bold;
            }
            .content{
              margin: 6px 0;
            }
          }
          .footer-tag{
            width: 100%;
            height: 40px;
            text-align: center;
            line-height: 40px;
          }
          .footer-progress-info{
            display: grid;
            grid-template-columns: 1fr 4px 4fr;
            .footer-progress{
              grid-column: 3/4;
              margin: 2px 0;
              border-radius: 3px;
              height: 40px;
              background: #2d8cf0;
              position: relative;
              .footer-progress-num{
                line-height: 40px;
                font-size: 12px;
                color: #fff;
                position: absolute;
                right: 4px;
              }
            }
          }
        }
      }
    }
  }
  .company-project-item-add{
    .card{
      height: 100%;
      width: 100%;
      display: grid;
      align-items: stretch;
      .card-content{
        height:100%;
        display: flex;
        flex-flow: column;
        justify-content: center;
        align-items: center;
      }
    }
  }
}
.page{
  display: flex;
  justify-content: center;
}
</style>
