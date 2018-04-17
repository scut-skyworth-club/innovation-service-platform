import Vue from 'vue';
import Router from 'vue-router';
import PersonalHome from '@/components/PersonalHome/PersonalHome';
import PersonalSearch from '@/components/PersonalSearch/PersonalSearch';
import PersonalPatents from '@/components/PersonalPatents/PersonalPatents';
import PersonalProjects from '@/components/PersonalProjects/PersonalProjects';
import PersonalCenter from '@/components/PersonalCenter/PersonalCenter';
import CompanyProjects from '@/components/CompanyProjects/CompanyProjects';
import CompanyPatents from '@/components/CompanyPatents/CompanyPatents';
import CompanyTalent from '@/components/CompanyTalent/CompanyTalent';
import CompanyCenter from '@/components/CompanyCenter/CompanyCenter';


Vue.use(Router);

export default new Router({
  routes: [{
    path: '/home',
    name: 'PersonalHome',
    component: PersonalHome,
    alias: '/',
  }, {
    path: '/search',
    name: 'PersonalSearch',
    component: PersonalSearch,
  }, {
    path: '/management',
    name: 'PersonalProjects',
    component: PersonalProjects,
  }, {
    path: '/patents',
    name: 'PersonalPatents',
    component: PersonalPatents,
  }, {
    path: '/personal',
    name: 'PersonalCenter',
    component: PersonalCenter,
  }, {
    path: '/company/projects',
    name: 'CompanyProjects',
    component: CompanyProjects,
  }, {
    path: '/company/talent',
    name: 'CompanyTalent',
    component: CompanyTalent,
  }, {
    path: 'company/patents',
    name: 'CompanyPatents',
    component: CompanyPatents,
  }, {
    path: 'company/center',
    name: 'CompanyCenter',
    component: CompanyCenter,
  }],
});
