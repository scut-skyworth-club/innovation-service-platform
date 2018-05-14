<template>
  <Menu mode="horizontal" :theme="navTheme" active-name="1" class="nav">  
    <div class="PersonalNav-logo">
      <img :src="logoIcon" alt="Skyworth Innovation Service Platform Logo"/>
      <span>创新服务平台</span>
    </div>
	<div class="beforeLogin" :class="{online:isOnline}">

		<router-link to="/login">
		<MenuItem name="8">登录</MenuItem>
		</router-link>

		<MenuItem name="9">|</MenuItem>
		<MenuItem name="10">注册</MenuItem>
	</div>
	<div class="PersonalNav-loginInfo" :class="{outline:!isOnline}">
		<!-- <MenuItem name="5">
		<template>
			<Badge count="3" class-name="badge">
				<Icon type="ios-email" class="email" size="35"></Icon>
			</Badge>
		</template>
		</MenuItem> -->

		<router-link to="/center">
		<MenuItem name="6">
		{{userName}}
		</MenuItem>
		</router-link>

		<Submenu name="7">
			<template slot="title">
				<Icon type="ios-person" size="27"></Icon>
				个人中心
			</template>

			<router-link to="/personal">
			<MenuItem name="7-1">个人信息</MenuItem>
			</router-link>

			<MenuItem name="7-2">退出</MenuItem>
		</Submenu>
	</div>

	
    <div class="PersonalNav-menu">
	<router-link to="/home">
      <MenuItem name="1">
      <Icon type="ios-home" size="25"></Icon>
        首页
      </MenuItem>
	</router-link>
    
	<router-link to="/search">
      <MenuItem name="2">
        <Icon type="ios-search" size="25"></Icon>
        搜索
      </MenuItem>
	</router-link>

	<router-link to="/management">
      <MenuItem name="3">
        <Icon type="merge" size="25"></Icon>
        项目管理
      </MenuItem>
	</router-link>

	<router-link to="/patents">
      <MenuItem name="4">
        <Icon type="ios-paperplane" size="25"></Icon>
        专利发布
      </MenuItem>
	</router-link>

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
      userName: '张三',
	  isOnline: true,
    };
  },
	
};
	
</script>

<style lang="scss" scoped>

	.nav{
		height:70px;
		line-height: 70px;
		font-size: 22px;
	}
	.PersonalNav-logo {
		height: 40px;
		float: left;
		position: relative;
		top: 15px;
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
			color: white;
		}
	}

	.PersonalNav-menu {
		width: 700px;
		margin: 0 auto;
	}

	.ivu-menu-item{
		font-size:22px;
		padding: 0 30px;
	}

	.PersonalNav-loginInfo {
		float:right;
	}
	
	.beforeLogin{
		float:right;
		margin-right:40px;
	}

	.email{
		border-radius: 10px;
        display: inline-block;
	}

	div.outline{
		display:none;
	}

	div.online{
		display:none;
	}


	.badge{
		width:5px;
	}
</style>
