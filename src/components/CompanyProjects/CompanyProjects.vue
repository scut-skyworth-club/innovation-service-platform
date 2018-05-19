<template>
  <div id="company-projects">
    <i class="company-logo">
      <img src="../../assets/logo.png" alt="logo"/>
    </i>
    <p class="company-title">创新项目网络服务平台</p>
    <div class="company-button">
      <router-link to="/company/projects/publish">
        <Button type="primary" class="button-item">发布项目</Button>
      </router-link>
      <router-link to="/company/projects/checkout" >
        <Button type="primary" class="button-item">我的项目</Button>
      </router-link>
    </div>
  </div>
</template>

<script>
export default {
  name: 'CompanyProjects',
};
</script>

<style lang="scss" scoped>
#company-projects{
  position: absolute;
  left: 50%;
  top: 50%;
  transform:translate(-50%,-50%);
  display: flex;
  flex-flow: column;

  .company-logo{
    justify-content: center;
    display: flex;
    img{
      width: 200px;
      height: 200px;
      justify-content: center;
    }
  }
  .company-title{
    margin-top: 18px;
    font-size: 36px;
  }
  .company-button{
    margin-top: 18px;
    display: flex;
    justify-content: space-between;
    .button-item{
      height: 60px;
      width: 120px;
      font-size: 18px;
    }
  }
}
</style>
