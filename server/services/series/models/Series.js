const { ObjectID } = require('mongodb')
const { getDatabase } = require('../config/mongodb')

class TvSeries {
    static async find() {
        return getDatabase().collection('series').find().toArray()
    }
    static async findById(id) {
        return getDatabase().collection('series').findOne({
            _id: ObjectID(id)
        })
    }
    static async create(data) {
        return getDatabase().collection('series').insertOne(data)
    }
    static async delete(id) {
        return await getDatabase().collection('series').findOneAndDelete({
            _id: ObjectID(id)
        })
    }
    static async edit(id, data) {
        return await getDatabase().collection('series').findOneAndUpdate({_id: ObjectID(id) }, data, { returnOriginal: false })
    }
}

module.exports = TvSeries