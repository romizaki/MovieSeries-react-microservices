const axios = require('axios')
const url = 'http://localhost:4001/movies'
const Redis = require('ioredis')
const redis = new Redis()

class MovieController {
  static createNewMovie(req, res) {
    const { title, overview, poster_path, popularity, tags } = req.body
    axios.post(url, {
      title, 
      overview,
      poster_path,
      popularity,
      tags
    })
    .then(({data}) => {
      redis.del('movies:data')
      res.send(data)})
    .catch(error => res.send(error))
  }

  static findAll(req, res) {
    console.log('romi di controller line 23');
    redis.get("movies:data")
    .then((data) => {
      if (data) {
        res.send(data)
        return
      } else {
        axios.get(url)
        .then(({data}) => {
          redis.set('movies:data', JSON.stringify(data))
          res.send(data)})
        .catch(err => {
          res.send(err)
        })
      }
    })
    .catch(err => res.send(err))
  }

  static findById(req, res) {
    axios.get(`${url}/${req.params.id}`)
    .then(({data}) => {
      res.send(data)})
    .catch(error => res.send(error))
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
      redis.del('movies:data')
      res.send(data)})
    .catch(error => res.send(error))
  }

  static deleteMovie(req, res) {
    axios.delete(`${url}/${req.params.id}`)
    .then(({data}) => {
      redis.del('movies:data')
      res.send(data)})
    .catch(error => res.send(error))
  }
}

module.exports = MovieController