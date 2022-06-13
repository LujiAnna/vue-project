import { createApp } from 'vue'
import {createRouter, createWebHistory} from 'vue-router'
import {routes} from './routes'
import App from './App.vue'

// 2. Define some routes
// const routes = [
//  {}
// ]

// 3. Create the router instance and pass the `routes` option
const router = createRouter({
  // 4. Provide the history implementation to use.
  history: createWebHistory(),
  routes, // short for `routes: routes`
  scrollBehavior(to, from, savedPosition) {
    // return {left: 0, top: 200}
    // return { el: '.btn'}
    // return { el: 'h1'}
    
    // if(savedPosition) {
    //   return savedPosition;
    // } else {
    //   return { left: 0, top: 0}
    // }

    if(to.hash) {
      return {
        el: to.hash
      }
    } else {
      return
    }


  }
})

// GLOBAL BEFORE
// router.beforeEach((to, from, next) => {
  // alert('nav triggered');
  // next();
  // next(false);
  // console.log(to);
//   if(to.path ==='/services'){
//     next();
//   } else {
//     next(false);
//   }
// })

// AFTER HOOKS
// router.afterEach((to, from) => {
//   alert('after each')
// })

createApp(App)
.use(router)
.mount('#app')
