import {createRouter,createWebHistory} from 'vue-router';

import Home from './components/Home.vue';
import Login from './components/Login.vue';
import about from './components/about.vue';
import contact from './components/contact.vue';
import NoPage from './components/NoPage.vue';
import Dashboard from './components/Dashboard.vue';
import Login1 from './components/Login1.vue';

const routes=[
    {
        name:'Home',
        path:'/',
        component:Home,
        
    },
    {
        name:'about',
        path:'/about',
        component:about
    },
    {
        name:'contact',
        path:'/contact',
        component:contact
    },
    {
        name:'Login',
        path:'/login',
        component:Login1
    },
    {
        name:'NoPage',
        path:'/:pathMathc(.*)*',
        component:NoPage
    },{
        name:'Dashboard',
        path:'/Dashboard',
        component:Dashboard,
        meta:{
            AuthCheck:true
        }
    }


];


const router = createRouter({
    history:createWebHistory(),
    routes
});


router.beforeEach((to, from, next) => {
    const isAuthenticated = localStorage.getItem('token');
  
    if (to.meta.AuthCheck && !isAuthenticated) {
      next('/login'); // Redirect to login
    } else {
      next(); // Allow access
    }
  });
  


export default router;