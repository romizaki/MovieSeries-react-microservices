const axios = require('axios')
const url = 'http://localhost:4002/series'
const Redis = require('ioredis')
const redis = new Redis()

class SeriesController {
  static createNewTvSeries(req, res) {
    const { title, overview, poster_path, popularity, tags } = req.body
    axios.post(url, {
      title, 
      overview,
      poster_path,
      popularity,
      tags
    })
    .then(({data}) => {
      redis.del('series:data')
      res.send(data)})
    .catch(err => res.send(err))
  }

  static findAll(req, res) {
    redis.get("series:data")
    .then((data) => {
      if (data) {
        res.send(data)
        return
      } else {
        axios.get(url)
        .then(({data}) => {
          redis.set('series:data', JSON.stringify(data))
          res.send(data)})
        .catch(err => res.send(err))
      }
    })
    .catch(err => res.send(err))
  }

  static findById(req, res) {
    axios.get(`${url}/${req.params.id}`)
    .then(({data}) => {
      res.send(data)})
    .catch(err => {
      res.send(err)
    })
  }

  static updateMovie(req, res) {
    const { title, overview, poster_path, popularity, tags } = req.body
    axios.put(`${url}/${req.params.id}`, {
      title, 
      overview,
      poster_path,
      popularity,
      tags
    })
    .then(({data}) => {
      redis.del('series:data')
      res.send(data)})
    .catch(err => {
      res.send(err)
    })
  }

  static deleteTvSeries(req, res) {
    axios.delete(`${url}/${req.params.id}`)
    .then(({data}) => {
      redis.del('series:data')
      res.send(data)})
    .catch(err => {
      res.send(err)
    })
  }
}

module.exports = SeriesController
