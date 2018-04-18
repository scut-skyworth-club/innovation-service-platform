import Vue from 'vue';
import Router from 'vue-router';

import PersonalContainer from '@/components/PersonalContainer';
import PersonalHome from '@/components/PersonalHome/PersonalHome';
import PersonalSearch from '@/components/PersonalSearch/PersonalSearch';
import PersonalPatents from '@/components/PersonalPatents/PersonalPatents';
import PersonalProjects from '@/components/PersonalProjects/PersonalProjects';
import PersonalCenter from '@/components/PersonalCenter/PersonalCenter';

import CompanyContainer from '@/components/CompanyContainer';
import CompanyProjects from '@/components/CompanyProjects/CompanyProjects';
import CompanyPatents from '@/components/CompanyPatents/CompanyPatents';
import CompanyTalent from '@/components/CompanyTalent/CompanyTalent';
import CompanyCenter from '@/components/CompanyCenter/CompanyCenter';

Vue.use(Router);

export default new Router({
  routes: [{

    // home
    path: '/',
    redirect: '/personal',

  }, {

    // personal
    path: '/personal',
    name: 'PersonalContainer',
    component: PersonalContainer,
    children: [{
      path: '/home',
      name: 'PersonalHome',
      component: PersonalHome
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
      path: '/center',
      name: 'PersonalCenter',
      component: PersonalCenter,
    }],

  }, {

    // company
    path: '/company',
    name: 'CompanyContainer',
    component: CompanyContainer,
    children: [{
      path: '/projects',
      name: 'CompanyProjects',
      component: CompanyProjects,
    }, {
      path: '/talent',
      name: 'CompanyTalent',
      component: CompanyTalent,
    }, {
      path: '/patents',
      name: 'CompanyPatents',
      component: CompanyPatents,
    }, {
      path: '/center',
      name: 'CompanyCenter',
      component: CompanyCenter,
    }],

  }],
});
