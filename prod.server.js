var express = require('express')
var axios = require('axios')

var app = express()
var apiRoutes = express.Router()

apiRoutes.get('/getRecommend', function(req, res) {
  const url = 'https://api.bilibili.com/x/web-show/res/loc'
  axios.get(url, {
    headers: {
      referer: 'https://m.bilibili.com/index.html'
    },
    params: req.query
  }).then((response) => {
    res.json(response.data)
  }).catch((e) => {
    console.log('/api/getRecommend: ' + e)
  })
})
apiRoutes.get('/getRanking', function(req, res) {
  const url = 'https://api.bilibili.com/x/web-interface/ranking/index'
  axios.get(url, {
    headers: {
      referer: 'https://m.bilibili.com/index.html'
    },
    params: req.query
  }).then((response) => {
    res.json(response.data)
  }).catch((e) => {
    console.log('/api/getRanking: ' + e)
  })
})
apiRoutes.get('/getRegion', function(req, res) {
  const url = 'https://api.bilibili.com/x/web-interface/dynamic/region'
  axios.get(url, {
    header: {
      referer: 'https://m.bilibili.com/index.html'
    },
    params: req.query
  }).then((response) => {
    res.json(response.data)
  }).catch((e) => {
    console.log('/api/getRegion' + e)
  })
})

app.use('/api', apiRoutes)
app.use(express.static('./dist'))
module.exports = app.listen('8080', function(err) {
  if(err) {
    console.log(err)
    return
  }
  console.log('listening at http://localhost:8080' + '\n')
})
