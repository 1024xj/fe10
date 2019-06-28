import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import Work from '@/components/Work'
import Stark from '@/components/Stark'
import User from '@/components/User'
import Hero from '@/views/hero'
import Daily from '@/views/daily'
import Increment from '@/components/Increment'

Vue.use(Router)
const UserProfile = { template: `<div>我是profile组件</div>` }
const UserPosts = { template: `<div>我是profile组件</div>` }
const Blog = { template: `<div>我是Blog组件</div>` }
const Info = { template: `<div>我是Info组件</div>` }
// const NotFound = {template: `<div>404 您访问的页面不存在</div>`}
const About = { template: `<div>我是About组件<router-view></router-view></div>` }
// const User = {
//   // template: '<div>User {{ $route.params.id }}</div>'
//   template: `<div class="user">
//     <h2>User{{$route.params.id}}</h2>
//     <router-view></router-view>
//   </div>`
// }
export default new Router({
  // mode:'history',
  mode: 'hash',
  linkExactActiveClass: 'shudong',
  routes: [
    {
      path: '/',
      name: 'HelloWorld',
      component: HelloWorld
    },
    {
      path: '/Increment',
      name: 'Increment',
      component: Increment
    },
    {
      path: '/hero',
      name: 'Hero',
      component: Hero
    },
    {
      path: '/daily',
      name: 'daily',
      component: Daily
    },
    {
      path: '/work',
      name: 'work',
      component: Work
    },
    {
      path: '/stark',
      name: 'stark',
      component: Stark
    },
    {
      path: '/user/:userId?/:name?',
      name: 'user',
      component: User
    },

    {
      path: '/user/:id',
      component: User,
      children: [
        {
          path: 'profile',
          component: UserProfile
        },
        {
          path: 'posts',
          component: UserPosts
        }
      ]
    },
    {
      path: '/about',
      component: About,
      children: [
        {
          path: 'blog',
          name: 'blog',
          component: Blog
        },
        {
          path: '/info',
          name: 'info',
          component: Info
        }
      ]
    },
    {
      path: '*',
      // component: NotFound
      redirect: (to) => {
        console.log(to)
        if (to.path === '/aaa') {
          return '/work'
        } else if (to.path === '/bbb') {
          return '/info'
        } else {
          return '/'
        }
      }
    }
  ]
})
