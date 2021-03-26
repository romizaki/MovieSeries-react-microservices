const TvSeries = require('../models/Movie')
const { ObjectId } = require('mongodb')

class TvSeriesController {
    static async findAll(req, res) {
        try {
            const data = await Movie.find()
            res.status(200).json(data)
        } catch (err) {
            console.log(err);
        }
    }
    static async createNewTvSeries(req, res) {
        try {
            const data = await TvSeries.create(req.body)
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
            const series = await TvSeries.edit(id, { $set: data })
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
            const series = await TvSeries.delete(id)
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