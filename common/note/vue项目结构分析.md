https://vuejs-templates.github.io/webpack/structure.html

#vue项目目录结构
.
├── build/                      # webpack config files
│   └── ...
├── config/
│   ├── index.js                # main project config
│   └── ...
├── src/
│   ├── main.js                 # app entry file
│   ├── App.vue                 # main app component
│   ├── components/             # ui components
│   │   └── ...
│   └── assets/                 # module assets (processed by webpack)
│       └── ...
├── static/                     # pure static assets (directly copied)
├── test/
│   └── unit/                   # unit tests
│   │   ├── specs/              # test spec files
│   │   ├── eslintrc            # config file for eslint with extra settings only for unit tests
│   │   ├── index.js            # test build entry file
│   │   ├── jest.conf.js        # Config file when using Jest for unit tests
│   │   └── karma.conf.js       # test runner config file when using Karma for unit tests
│   │   ├── setup.js            # file that runs before Jest runs your unit tests
│   └── e2e/                    # e2e tests
│   │   ├── specs/              # test spec files
│   │   ├── custom-assertions/  # custom assertions for e2e tests
│   │   ├── runner.js           # test runner script
│   │   └── nightwatch.conf.js  # test runner config file
├── .babelrc                    # babel config
├── .editorconfig               # indentation, spaces/tabs and similar settings for your editor
├── .eslintrc.js                # eslint config
├── .eslintignore               # eslint ignore rules
├── .gitignore                  # sensible defaults for gitignore
├── .postcssrc.js               # postcss config
├── index.html                  # index.html template
├── package.json                # build scripts and dependencies
└── README.md                   # Default README file

build 目录是一些webpack的文件，配置参数一般不动
config 是vue 项目的基本配置文件
dist 生产环境的文件，就是项目上线后访问的文件
    通过：npm run build
node_modules 是项目安装依赖的模块
src 源码文件夹，基本上文件夹都放在这里，就是我们平时开发的一些文件
--assets 资源文件夹，里面放一些静态资源，会经过webpack处理
        如果里面放置图片，在编译的时候，会打包成base64
--components 这个组件文件夹，一般放置公共的组件
--App.vue 主组件
--main.js 主入口文件



static 静态文件，编译的时候，会直接复制到dist文件里面
test 测试文件
.babelrc  bebel编译参数  es6 编译成 es5
.editorconfig  编辑器配置的文件
.eslintignore eslint 忽略文件
.eslintrc.js eslint 配置文件
.gitignore git 忽略文件
.postcssrc.js  自动加上css前缀
readme.md 这个是项目的说明 在github上，会默认读取这个文件在下面显示


#vue-build 文件说明
vue webpack cli
开发环境的server 是 express的服务

ssr   #服务端渲染的东西
http://nuxtis.org
spa single page app     

webpack把style样式提取出来


#去掉vue项目中的eslint检测

找到一下路径，注注释带 eslint-loader 然后重启cli 
记住：只要更改vue-cli的webpack配置文件，就要重启才生效

build/webpack.base.conf.js

团队自己的风格检测：
    [2121,2112,]
    width:0;

module:{
    rules:[]
}
---
        <!-- test: /\.(js|vue)$/,
        loader: 'eslint-loader',
        enforce: 'pre',
        include: [resolve('src'), resolve('test')],
        options: {
            formatter: require('eslint-friendly-formatter'),
            emitWarning: !config.dev.showEslintErrorsInOverlay
        } -->

---



#vue文件说明
一个.vue文件
---
    <template>
        <div><!--  必须有一个根标签，成对包含  -->
            这里负责写dom
        </div> <!--  必须有一个根标签，成对包含  -->
    </template>

    <script>
        这里负责写js脚本逻辑
        export default{
            data(){
                return{
                    name:'stark',
                    user:{},    //{}约束类型为对象
                    user:[],     //[]约束类型为数组
                    str:'',     //如果不约束，没有默认值，至少写一个''
                }
            }
        }
    </script>

    <style>
        这里负责写样式
    </style>
---


怎么使用：

在路由里面：

---
    import Work from '@/components/Work'

    export default new Router({
    routes: [
        {
        path: '/',
        name: 'HelloWorld',
        component: HelloWorld
        },
        {
        path: '/work',
        name: 'work',
        component: Work
        }
    ]
    })

---

顺便说下 fis
https://fis.baidu.com/fis3/docs/beginning/intro.html
---
nav 
    nav.js
    nav.css
    nav.html

在一个文件夹里面有以js css html为后缀的文件，不用手工引入
fis自动识别引入
---

#vue-cli项目分析

    入口文件
        在webpack.base.conf.js
---
    module.exports = {
    context: path.resolve(__dirname, '../'),
    entry: {
        app: './src/main.js'
    },
---

---
    import Vue from 'vue'    //引入vue模块，相当于我们之前src="vue.js"
    import App from './App'   //引入组件模块
    import router from './router'   //引入路由模块

    Vue.config.productionTip = false

    /* eslint-disable no-new */
    new Vue({
        el: '#app',
        router,
        components: { App },  //模块制定
        template: '<App/>'  //组件
    })
---

App.vue
---
<template>
  <div id="app">
    <img src="./assets/logo.png">
    <router-view/>  //路由视图所在的地方
  </div>
</template>
---

##路由 
    # vue-router
官方文档:https://router.vuejs.org/zh/


用 Vue.js + Vue Router 创建单页应用，是非常简单的。使用 Vue.js ，我们已经可以通过组合组件来组成应用程序，当你要把 Vue Router 添加进来，我们需要做的是，将组件 (components) 映射到路由 (routes)，然后告诉 Vue Router 在哪里渲染它们。下面是个基本例子：


## hash 和 history模式
默认hash模式：
以#/开始匹配，这种叫作哈希模式（hash）

HTML5 History 模式
/开始，就是我们正常的方式没有 #符号
---
    <a href="/">首页</a>
    <a href="/Work">工作</a>
---

>我们此时使用a标签来切换比较麻烦，每次更改路由模式的时候，需要单独改a标签里面herf的链接

在vue里面提供了一个更好的方式，来解决这个问题
---
    <router-link to="/">home主页</router-link>
    <router-link to="/work">我的工作</router-link>
---

## <router-view/>
>每次切换路由的时候，里面的内容都依靠<router-view/>来显示在页面上
只有页面有导航的地方，打算让组件显示在页面上，必须写<router-view/>这个标签
---
<template>
  <div id="app">
    <router-link to="/">home主页</router-link>
    <router-link to="/work">我的工作</router-link>
    <router-view/> //这个标签用来显示页面内容
  </div>
</template>
---

## <router-link>默认解析成a标签
---
<a href="#/" class="router-link-active">home主页</a>
<a href="#/work" class="router-link-exact-active  router-link-active">我的工作</a>
---

#给导航添加激活样式
通过css里面设置
---
    .router-link-active{
        background-color:red
    }
---
>当我们单独设置激活样式的时候，根路由/永远都会匹配到样式
##我们可以在标签中添加 exact 方式来解决永远都会匹配到跟路径样式问题
---
直接加在标签属性上
<router-link exact to="/">home主页</router-link>
---

##我们自己来给导航添加自定义class名字
>通过 设置active-class属性值 改变默认的激活样式类
---
    <router-link to="/work" active-class="starkwang">我的工作</router-link>
---

##统一更改激活样式
在router/index.js里面设置 linkExactActiveClass属性
---
 export default new Router({
  // mode:'history',
  mode:'hash',
  linkExactActiveClass:'shudong',   //通过设置这个属性值，给所有的激活样式，都添加统一的类
---
---
当我们统一设置后，每次激活的路由标签，都带着自己设置的这个shudong类
    <router-link to="/work" active-class="shudong starkwang">我的工作</router-link>
---

##使用属性 tag 统一更改路由编译后的标签名字 <a></a>  -> <li></li>
>默认编译的标签名字是a
---
    <router-link to="/stark" tag="li">我的stark</router-link>
更改完后的dom 样式
<li class="shudong router-link-active">我的stark</li>
---

##路由嵌套：
使用方式
---
    {
      path: '/about',   //这是一级路由
      component: About,
      children: [
        {       //里面是嵌套路由
          path: 'blog',   //如果在这个嵌套
          name: 'blog',
          component: Blog
        },
        {
          path: '/info',
          name: 'info',
          component: Info
        }
      ]

    }
---

###如果在这个嵌套里面的path:''留空，默认会显示这个组件
---
http://locolhost:8080/#/about
此时会把这个默认留空的嵌套组件显示出来，也就是上面的blog组件显示出来
---

###如果嵌套路由里面的path:'blog'写具体的路由，则访问的时候必须匹配
---
必须是这个路由精准匹配
http://locolhost:8080/#/about/blog
这样才会把这个blog嵌套路由组件显示出来
---

###要注意，以 / 开头的嵌套路径会被当作根路径。 
这让你充分的使用嵌套组件而无须设置嵌套的路径。

---
        {
          path: '/info', // 以/开头的嵌套路径会被当作根路径
          name: 'info',
          component: Info
        }
        访问方式：
        http://locolhost:8080/#/info

        如果去掉/
        {
          path: 'info', // 此时去掉了'/info' -> 'info'
          name: 'info',
          component: Info
        }
---
你会发现，children 配置就是像 routes 配置一样的路由配置数组，所以呢，你可以嵌套多层路由。

此时，基于上面的配置，当你访问 /about/info时，about 的出口是不会渲染任何东西，这是因为没有匹配到合适的子路由。