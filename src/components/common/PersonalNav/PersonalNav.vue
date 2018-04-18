<template>
  <Menu mode="horizontal" :theme="navTheme" active-name="1">
  
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
  
  </Menu>
</template>

<script>
import { Menu, MenuGroup, MenuItem, Submenu } from 'iview';

export default {
  name: 'PersonalNav',
  components: {
    Menu,
    MenuGroup,
    MenuItem,
    Submenu,
  },
  data() {
    return {
      navTheme: 'primary',
    };
  },
};
</script>

<style lang="scss" scoped>

</style>
