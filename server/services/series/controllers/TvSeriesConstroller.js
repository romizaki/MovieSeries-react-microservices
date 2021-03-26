const TvSeries = require('../models/Series')
const { ObjectId } = require('mongodb')

class TvSeriesController {
    static async findAll(req, res) {
        try {
            const data = await TvSeries.find()
            res.status(200).json(data)
        } catch (err) {
            console.log(err);
        }
    }
    static async findById(req, res) {
        try {
            const data = await TvSeries.findById(req.params.id)
            res.status(200).json(data)
        } catch (err) {
            console.log(err);
        }
    }
    static async createNewTvSeries(req, res) {
        try {
            const { title, overview, poster_path, popularity, tags } = req.body
            const data = await TvSeries.create({ title, overview, poster_path, popularity, tags: tags.split(',') })
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
            const series = await TvSeries.edit(id._id, { $set: { title, overview, poster_path, popularity, tags: tags.split(',') } })
            if (series.lastErrorObject.n <= 0) {
                throw {
                    name: 'UnregisteredId',
                    status : 404
                }
            }
            else {
                res.status(200).json(series.value)
            }
        } catch (error) {
            next(error)
        }
    }
    static async deleteTvSeries(req, res, next) {
        try {
            const id = {
                _id: ObjectId(req.params.id)
            }
            const series = await TvSeries.delete(id._id)
            if (series.lastErrorObject.n <= 0) {
                throw {
                    name: 'UnregisteredId',
                    status : 404
                }
            }
            else {
                res.status(200).json(series.value)
            }
        } catch (error) {
            next(error)
        }
    }
}

module.exports = TvSeriesController