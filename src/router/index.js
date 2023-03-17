import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import LoginView from '../views/LoginView.vue'
import SignupView from '../views/SignupView.vue'
import ProductsView from '../views/ProductsView.vue'
import ProductsDetailsView from '../views/ProductsDetailsView.vue'
import NotFound from '../views/NotFound.vue'
import { store } from '../store'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
      path: '/login',
      name: 'login',
      component: LoginView,
    },
    {
      path: '/signup',
      name: 'signup',
      component: SignupView
    },
    {
      path: '/products',
      name: 'products',
      component: ProductsView,
      meta:{
        Auth:true
      }
    }
    ,
    {
      path: '/products/:id',
      name: 'products-details',
      component: ProductsDetailsView,
      meta:{
        Auth:true
      }
    
    }
    ,
    {
      path: '/:pathMatch(.*)',
      name: 'not-found',
      component: NotFound,
    
    }
  
  ]
})


router.beforeEach(async(to,from)=>{
  const loggedin=store.state.verify
  if(!loggedin && to.meta.Auth){
    return{name:'login'}
  }
  if (loggedin && to.name=='login') {
    return {name:'products'}
  }
})


export default router
