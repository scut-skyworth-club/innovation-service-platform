<template>
  <div class="PersonalContainer">
    <Layout>
      <personal-nav/>
      <router-view/>
    </Layout>
  </div>
</template>

<script>
import PersonalNav from './PersonalNav/PersonalNav';
import { Layout } from 'iview';

export default {
  name: 'PersonalContainer',
  components: {
    Layout,
    PersonalNav,
  },
};
</script>

<style lang="scss" scoped>
  .PersonalContainer {
    
  }
</style>
