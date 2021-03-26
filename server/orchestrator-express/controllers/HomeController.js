const axios = require('axios')
const urlMovie = 'http://localhost:4001/movies'
const urlSeries = 'http://localhost:4002/series'
const Redis = require('ioredis')
const redis = new Redis()

class HomeController {
  static findAll(req, res) {
    let movies
    let series
    redis.get("entertain-me:data")
    .then((data) => {
      if (data) {
        res.send(data)
      } else {
        axios.get(urlMovie)
        .then(({data}) => {
          movies = data
          return axios.get(urlSeries)
        })
        .then(({data}) => {
          series = data
          redis.set('entertain-me:data', JSON.stringify({movies, series}))
          res.send({movies, series})
        })
        .catch(err => {
          res.send(err)
        })
      }
    })
    .catch(err => {
      res.send(err)
    })
  }
}

module.exports = HomeController