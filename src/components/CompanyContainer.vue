<template>
  <div>
    <company-nav/>
    <router-view/>
  </div>
</template>

<script>
import CompanyNav from './CompanyNav/CompanyNav';

export default {
  name: 'CompanyContainer',
  components: {
    CompanyNav,
  },
};
</script>

<style lang="scss" scoped>

</style>
