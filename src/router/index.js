import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import NotFoundView from '../views/NotFoundView.vue'

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView,
    meta: {
      title: 'Home'
    }
  },
  {
    path: '/about',
    name: 'about',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/AboutView.vue'),
    meta: {
      title: 'About'
    }
  },
  {
    path: '/contact',
    name: 'contact',
    component: () => import('../views/ContactView.vue'),
    meta: {
      title: 'Contact'
    }
  },
  {
    path: '/services',
    name: 'services',
    component: () => import('../views/ServicesView.vue'),
    meta: {
      title: 'Services'
    }
  },
  {
    path: '/services/design',
    name: 'design',
    component: () => import('../views/DesignView.vue'),
    meta: {
      title: 'Design'
    }
  },
  {
    path: '/services/development',
    name: 'development',
    component: () => import('../views/DevelopmentView.vue'),
    meta: {
      title: 'Development'
    }
  },
  {
    path: '/:pathMatch(.*)*',
    name: 'notfound',
    component: NotFoundView
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
  scrollBehavior (to, from, savedPosition) {
    // console.log(to, from, savedPosition);
    if(savedPosition) {
      return savedPosition;
    }
    else {
      return {left: 0, top: 0 }
    }
  }
});

router.beforeEach((to, from, next) => {
  if (to.meta && to.meta.title) {
    document.title = `${to.meta.title} | Gregg Wong`;
  }
  else {
    document.title = "Gregg Wong"
  }
  next();
});

export default router
