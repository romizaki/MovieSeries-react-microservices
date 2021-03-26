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
    static async findById(req, res) {
        try {
            const data = await Movie.findById(req.params.id)
            res.status(200).json(data)
        } catch (err) {
            console.log(err);
        }
    }
    static async createNewMovie(req, res) {
        try {
            const { title, overview, poster_path, popularity, tags } = req.body
            const data = await Movie.create({ title, overview, poster_path, popularity, tags: tags.split(',') })
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
            const { title, overview, poster_path, popularity, tags } = req.body
            const movie = await Movie.edit(id._id, { $set: { title, overview, poster_path, popularity, tags: tags.split(',') } })
            if (movie.lastErrorObject.n <= 0) {
                throw {
                    name: 'UnregisteredId',
                    status : 404
                }
            }
            else {
                res.status(200).json({ message: 'edit data success'})
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
            console.log(id, 'ini idn ya');
            const movie = await Movie.delete(id._id)
            if (movie.lastErrorObject.n <= 0) {
                throw {
                    name: 'UnregisteredId',
                    status : 404
                }
            }
            else {
                res.status(200).json({ message: 'delete data success'})
            }
        } catch (error) {
            next(error)
        }
    }
}

module.exports = MovieController