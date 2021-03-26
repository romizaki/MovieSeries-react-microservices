const Movie = require('../models/Movie')
const { ObjectId } = require('mongodb')

class MovieController {
    static async findAll(req, res) {
        try {
            const data = await Movie.find()
            res.status(200).json(data)
        } catch (err) {
            console.log(err);
        }
    }
    static async createNewMovie(req, res) {
        try {
            const data = await Movie.create(req.body)
            res.status(201).json(data.ops)
        } catch (error) {
            console.log(err);
        }
    }
    static async updateMovie(req, res, next) {
        try {
            const id = {
                _id: ObjectId(req.params.id)
            }
            const data = req.body
            const movie = await Movie.edit(id, { $set: data })
            if (movie.lastErrorObject.n <= 0) {
                throw {
                    name: 'UnregisteredId',
                    status : 404
                }
            }
            else {
                res.status(200).json(movie.value)
            }
        } catch (error) {
            next(error)
        }
    }
    static async deleteMovie(req, res, next) {
        try {
            const id = {
                _id: ObjectId(req.params.id)
            }
            const movie = await Movie.delete(id)
            if (movie.lastErrorObject.n <= 0) {
                throw {
                    name: 'UnregisteredId',
                    status : 404
                }
            }
            else {
                res.status(200).json(movie.value)
            }
        } catch (error) {
            next(error)
        }
    }
}

module.exports = MovieController