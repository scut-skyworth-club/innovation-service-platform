<template>
<Menu mode="horizontal" :theme="navTheme" active-name="projects">  
    
    <div class="CompanyNav-logo">
      <img :src="logoIcon" alt="Skyworth Innovation Service Platform Logo"/>
      <span>创新服务平台</span>
    </div>

    <div class="CompanyNav-menu">
      <MenuItem name="projects">
        <router-link to="/company/projects" class="menu-item">
          <Icon type="merge"></Icon>
          项目
        </router-link>
      </MenuItem>

      <MenuItem name="talent">
      <router-link to="/company/talent" class="menu-item">
        <Icon type="ios-person"></Icon>
        人才
      </router-link>
      </MenuItem>
    
      <MenuItem name="patents">
      <router-link to="/company/patents" class="menu-item">
        <Icon type="ios-paperplane"></Icon>
        专利
      </router-link>
      </MenuItem>
    </div>

    <div class="CompanyNav-loginInfo">
      {{userName}}
      <span class="company-nav-line"> </span>
      <Badge>
        <Avatar shape="square" icon="person" />
      </Badge>
      <router-link to="#">{{userInfo}}</router-link>
    </div>
  
  </Menu>
</template>

<script>
import { Header, Menu, MenuGroup, MenuItem, Submenu } from 'iview';
import LogoIcon from '../../assets/logo.png'

export default {
  name: 'CompanyNav',

  components: {
    Header, Menu, MenuGroup, MenuItem, Submenu,
  },
  
  data() {
    return {
      navTheme: 'dark',
      logoIcon: LogoIcon,
      userName: '未登录',
      userInfo: '请登录',
    };
  },

};
</script>

<style lang="scss" scoped>
.CompanyNav-logo {
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

  .CompanyNav-menu {
    width: 420px;
    margin: 0 auto;
    .menu-item{
      color: #ccc;
    }
    .router-link-active{
      color: #fff;
    }
  }
  .CompanyNav-loginInfo {
    float: right;
    color: #fff;
    position: relative;
    right: 30px;
    overflow: hidden;

    .company-nav-line {
      position: relative;
      display: inline-block;
      background-color: #ccc;
      width: 1px;
      height: 32px;
      margin: 0 8px;
      top: 12px;
    }
  }
</style>
