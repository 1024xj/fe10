var express = require('express')
var proxy = require('http-proxy-middleware')
 
var app = express()
 
app.use('/api', proxy({ target: 'https://news-at.zhihu.com/', changeOrigin: true }))
app.listen(3000)