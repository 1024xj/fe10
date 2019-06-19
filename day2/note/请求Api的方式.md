在vue中请求api的方式

请求接口
vue与后台怎么打交道

vue-resoure官方不维护了，推荐 axios
axios

用postman测试post接口

写接口的工具 easy mock

axios方式：

#1.引入组件
可查询https://github.com/axios/axios
···    
    <script src="https://cdn.bootcss.com/axios/0.19.0-beta.1/axios.js"></script>
···
#2.get请求方式
···
    axios.get('/user?ID=12345')
    .then(function (response) {
        // handle success
        console.log(response);
    })
    .catch(function (error) {
        // handle error
        console.log(error);
    })
    .finally(function () {
        // always executed
    });

···

#3.post请求方式
...
    axios.post('/user', {
        firstName: 'Fred',
        lastName: 'Flintstone'
    })
    .then(function (response) {
        console.log(response);
    })
    .catch(function (error) {
        console.log(error);
    });

...

如果使用了axios的话，想使用jsonp

请下载npm i jsonp  这个包

