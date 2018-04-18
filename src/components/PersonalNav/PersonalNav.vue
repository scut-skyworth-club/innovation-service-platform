<template>
  <Menu mode="horizontal" :theme="navTheme" active-name="1">  
    
    <div class="PersonalNav-logo">
      <img :src="logoIcon" alt="Skyworth Innovation Service Platform Logo"/>
      <span>创新服务平台</span>
    </div>

    <div class="PersonalNav-menu">
      <MenuItem name="1">
      <Icon type="ios-home"></Icon>
        首页
      </MenuItem>
    
      <MenuItem name="2">
        <Icon type="ios-search"></Icon>
        搜索
      </MenuItem>
    
      <MenuItem name="3">
        <Icon type="merge"></Icon>
        项目管理
      </MenuItem>
    
      <MenuItem name="4">
        <Icon type="ios-paperplane"></Icon>
        专利发布
      </MenuItem>
    </div>

    <div class="PersonalNav-loginInfo">
      {{userName}}
      <router-link>{{userInfo}}</router-link>
    </div>
  
  </Menu>
</template>

<script>
import { Header, Menu, MenuGroup, MenuItem, Submenu } from 'iview';
import LogoIcon from '../../assets/logo.png'

export default {
  
  name: 'PersonalNav',

  components: {
    Header, Menu, MenuGroup, MenuItem, Submenu,
  },
  
  data() {
    return {
      navTheme: 'primary',
      logoIcon: LogoIcon,
      userName: '未登录',
      userInfo: '请登录',
    };
  },

};
</script>

<style lang="scss" scoped>
  .PersonalNav-logo {
    height: 40px;
    float: left;
    position: relative;
    top: 10px;
    left: 30px;

    img {
      float: left;
      height: 40px;
    }

    span {
      display: inline-block;
      float: left;

      height: 40px;
      padding-left: 10px;
      
      line-height: 40px;
      font-size: 20px;
      color: white;
    }
  }

  .PersonalNav-menu {
    width: 420px;
    margin: 0 auto;
  }
  
  .PersonalNav-loginInfo {

  }
</style>
