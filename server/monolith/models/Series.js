const { getDatabase } = require('../config/mongodb')

class TvSeries {
    static async find() {
        return getDatabase().collection('series').find().toArray()
    }
    static async create(data) {
        return getDatabase().collection('series').insertOne(data)
    }
    static async delete(id) {
        return await getDatabase().collection('series').findOneAndDelete(id)
    }
    static async edit(id, data) {
        return await getDatabase().collection('series').findOneAndUpdate(id, data, { returnOriginal: false })
    }
}

module.exports = TvSeries