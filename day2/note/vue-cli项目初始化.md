>Vue 提供了一个官方的 CLI，为单页面应用 (SPA) 快速搭建繁杂的脚手架。它为现代前端工作流提供了 batteries-included 的构建设置。只需要几分钟的时间就可以运行起来并带有热重载、保存时 lint 校验，以及生产环境可用的构建版本。更多详情可查阅 Vue CLI 的文档。

https://github.com/vuejs-templates

···
#全局安装 vue-cli
$npm install --global vue-cli
#创建一个基于webpack模板的新项目
$vue init webpack my-project
#安装依赖，走你
$cd my-project
$npm install
$npm run dev

···



提交git

$ cd ..
$ ll               #找到文件夹
$ git status on branch day2   #找到day2文件夹
$ git add .           #添加更新的栏目
$ git status
$ git commit -am"add vue project"
$ git push origin day2


$ git checkout master    #切换到master
$ git pull origin master   

$gst    

$gco day2   




#vue常见错误
$npm run dev
npm err! C:\user\1x\desktop\package.json
no such file or directory open'C:package json

#解决问题的方式：
看到错误先做什么?    
1.提取错误信息   
2.不懂的去翻译，翻译方法：有道，或者直接百度搜索
3.翻译完后，按照信息去处理，如果不知道怎么处理去百度
4.百度的方式：提取前几条
segmentfalult.com       https:stackoverflow.com
5.真正自己花精力与时间研究过这个问题，还没有解决，带着自己百度或者搜索过的信息，去向别人求助



$cd..
$ll
$cd leanvue/
$npm run dev


###解决问题的能力
    把不懂的问题细化
    把每个细节的问题解决，掌握，清晰
        打印
        写思路
        然后填充代码
    然后一步一步的调试
        整个流程跑通

###在vue项目中使用axios.html
    在vue项目里面使用axios的正确姿势
    官方资源 https://www.npmjs.com/package/axios
    https://github.com/mzabriskie/axios
安装
---
npm i axios -D  

or
npm i axios -D  
---
##在组件里面单独使用axios
/src/views/hero/index.vue
---
import axios from 'axios';

methods:{
    getHero(){
        axios.get('/v1/db.php')
        .then(res=>{
            this.hero=res.data.hero;
        })
    }
}
---

###解决vue本地开发跨域问题
在config/index.js
---
代理:
proxyTable: {
      '/api': {
        target: 'http://hero.shudong.wang/'
      }
    },
当代理检测到 /v1的时候，发现自己有这个属性，匹配到了，然后把主机自动转成http://hero.shudong.wang/
此时相当于访问 http://hero.shudong.wang/v1/db.php
所以说我们访问localhost:8080/v1/db.php
相当于访问http://hero.shudong.wang/v1/db.php
---
---
  methods: {
    getHero() {
      axios.get("/v1/db.php") //接口用不了
        .then(res => {
          console.log(res.data.hero);
          this.hero = res.data.hero;
        });
    }
  }
  此时相当于在浏览器访问：localhost:8080/v1/db.php
  原理：https://www.npmjs.com/package/http-proxy-middleware

---
api:https://news-at.zhihu.com/api/4/news/latest
#记住配置完代理需要重启 npm run dev

###使用$http.get（）的方式
##需要使用这个模块
vue-axios
https://github.com/imcvampire/vue-axios.git

###使用方式
---
npm install --save vue-axios
---
####在入口文件里面添加
---
inport Vue from 'vue'
import axios from 'axios'
import VueAxios from 'vue-axios'
Vue.use(VueAxios,axios)
---
##在组件里面使用
---
axios ->this.$http.get()
getHttpHero(){
  // https://news-at.zhihu.com/api/4/news/latest
  // axios.get('http://hero.shudong.wang/v1/db.php')
  this.$http.get('/api/news/latest')
  .then(res=>{
    this.stories = res.data.stories;
  })
},
---

vue-axios源码分析
---

---



##当我们访问某些接口的时候，解决了接口跨域问题，然而又出现了图片403禁止访问问题
>这种设计，是api厂商正常保证自己的服务器不被刷流量

##解决这个问题的姿势
利用这个网站来处理给你返回的图片api地址
https://image.weserv.nl/url=imgurl
https://images.weserv.nl/?
url=https://pic3.zhimg.com/v2-9f8bb937fd1bca9f07bda1c5934acaca.jpg
在你的图片前面加上这个链接
