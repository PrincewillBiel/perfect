import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

function loadView (component) {
  return () => import(`@/components/${component}.vue`)
}

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'Index',
      component: loadView(`index`)
    },
    {
      path: '/about',
      name: 'About',
      component: loadView(`about-us`)
    },
    {
      path: '/dasboard',
      name: 'Dashboard',
      component: loadView(`dashboard`)
    },
    {
      path: '/markets/nfp',
      name: 'NFP',
      component: loadView(`test`)
    },
    {
      path: '/payments',
      name: 'Payments',
      component: loadView(`payment`)
    },
    {
      path: '/pf_policies',
      name: 'Policy',
      component: loadView(`policy`)
    },
    {
      path: '/login',
      name: 'Signin',
      component: loadView(`sign-in`)
    },
    {
      path: '/register/:code?',
      name: 'Signup',
      component: loadView(`sign-up`)
    },
    {
      path: '/reset_password',
      name: 'Reset',
      component: loadView(`reset`)
    },
    // {
    //   path: '/new_password_pf_login',
    //   name: 'Link',
    //   component: loadView(`reset_link`)
    // },
    {
      path: '/forgot/change',
      name: 'Link',
      component: loadView(`reset_link`)
    },
    {
      path: '/test',
      name: 'Test',
      component: loadView(`test`)
    }
  ]
})
