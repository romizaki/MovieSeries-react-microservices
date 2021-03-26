const axios = require('axios')
const Redis = require('ioredis')
const redis = new Redis()

const resolvers = {
    Query: {
        movies: async () => {
            try {
              const cacheData = await redis.get('movies:data')
              if (cacheData) {
                return JSON.parse(cacheData)
              } else {
                const { data } = await axios.get('http://localhost:4001/movies')
                await redis.set('movies:data', JSON.stringify(data))
                return data
              }
            } catch (err) {
              console.log(err)
            }
        },
        series: async () => {
            try {
              const cacheData = await redis.get('series:data')
              if (cacheData) {
                return JSON.parse(cacheData)
              } else {
                const { data } = await axios.get('http://localhost:4002/series')
                await redis.set('series:data', JSON.stringify(data))
                return data
              }
            } catch (err) {
              console.log(err)
            }
        },
        getMovieById: async (_, args) => {
            try {
              const { _id } = args
              const response = await axios.get(`http://localhost:4001/movies/${_id}`)
              return response.data
            } catch (error) {
              return error.response.data
            }
        },
        getSeriesById: async (_, args) => {
            try {
              const { _id } = args
              const response = await axios.get(`http://localhost:4002/series/${_id}`)
              return response.data
            } catch (error) {
              console.log(error.response.data)
              return error.response.data
            }
        }
    },
    Mutation: {
        addMovie: async (_, args ) => {
          try {
            const { title, overview, poster_path, popularity, tags } = args.data
            const payload = {
              title, 
              overview, 
              poster_path, 
              popularity, 
              tags
            }
            const responses = await axios(('http://localhost:4001/movies'), {
              method: 'POST',
              data: payload
            })
            if (responses) { 
              await redis.del('movies:data')
            }
            return responses.data  
          } catch (error) {
            console.log(error.response.data)
            return error.response.data
          }
        },
        addSeries: async (_, args ) => {
            try {
              const { title, overview, poster_path, popularity, tags } = args.data
              const payload = {
                title, 
                overview, 
                poster_path, 
                popularity, 
                tags
              }
              console.log(payload);
              const responses = await axios(('http://localhost:4002/series'), {
                method: 'POST',
                data: payload
              })
              if (responses) { 
                await redis.del('series:data')
              }
              return responses.data
            } catch (error) {
              console.log(error.response.data)
              return error.response.data
            }
        },
        updateMovieById: async (_, args) => {
          console.log(args, 'masuk resolver edit');
            try {
              const { title, overview, poster_path, popularity, tags } = args.data
              const { id } = args
              const payload = {
                title, 
                overview, 
                poster_path, 
                popularity, 
                tags
              }
              const responses = await axios(`http://localhost:4001/movies/${id}`, {
                method: 'PUT',
                data: payload
              })
              if (responses.status === 200) { 
                await redis.del('movies:data')
                return responses.data  
              }
            } catch (error) {
              console.log(error.response.data)
              return error.response.data
            }
          },
          updateSeriesById: async (_, args) => {
            try {
              const { title, overview, poster_path, popularity, tags } = args.data
              const { id } = args
              const payload = {
                title, 
                overview, 
                poster_path, 
                popularity, 
                tags
              }
              const responses = await axios(`http://localhost:4002/series/${id}`, {
                method: 'PUT',
                data: payload
              })
              if (responses.status === 200) { 
                await redis.del('series:data')
                return responses.data  
              }
            } catch (error) {
              console.log(error.response.data)
              return error.response.data
            }
          },
          deleteMovieById: async (_, args) => {
            console.log(args, 'masuk resolver');
            const { id } = args
            try {
              const responses = await axios(`http://localhost:4001/movies/${id}`, {
                method: 'DELETE',
              })
              if (responses.status === 200) { 
                await redis.del('movies:data')
                return responses.data
              }
            } catch (error) {
              console.log(error.response.data)
              return error.response.data
            }
          },
          deleteSeriesById: async (_, args) => {
            const { id } = args
            try {
              const responses = await axios(`http://localhost:4002/series/${id}`, {
                method: 'DELETE',
              })
              if (responses.status === 200) { 
                await redis.del('series:data')
                return responses.data
              }
            } catch (error) {
              console.log(error.response.data)
              return error.response.data
            }
        }
    }
}

module.exports = resolvers