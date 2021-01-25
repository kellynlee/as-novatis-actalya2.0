import Vue from 'vue'
import Router from 'vue-router';
import main from '../components/mainPage';
import suggestion from '../components/suggestions/sugMain';
import insight from '../components/insights/insightMain';
import plan from '../components/planMain';
import sugDetail from '../components/suggestions/sugDetail';
import hospitalSug from '../components/suggestions/hospitalSug';
import doctorSug from '../components/suggestions/doctorSug';
import feedback from '../components/feedback'
Vue.use(Router);

export default new Router({
  routes:[
    {
      path:'/',
      component:main,
      name:'main'
    },
    {
      path:'/suggestion',
      component: suggestion,
      name:'suggestion',
    },
    {
      path:'/insight',
      component: insight,
      name:'insight'
    },
    {
      path:'/plan',
      component: plan,
      name:'plan'
    },
    {
      path:'/sugDetail',
      component: sugDetail,
      name:'suggestionDetail'
    },
    {
      path:'/hospitalSug',
      component: hospitalSug,
      name:'hopitalSug'
    },
    {
      path:'/doctorSug',
      component: doctorSug,
      name:'doctorSug'
    },
    {
      path:'/feedback',
      component: feedback,
      name:'feedback'
    },
  ],
  mode:'history'
})
