const { ObjectID } = require('mongodb')
const { getDatabase } = require('../config/mongodb')

class Movie {
    static async find() {
        return getDatabase().collection('movies').find().toArray()
    }
    static async findById(id) {
        return getDatabase().collection('movies').findOne({
            _id: ObjectID(id)
        })
    }
    static async create(data) {
        return getDatabase().collection('movies').insertOne(data)
    }
    static async delete(id) {
        return await getDatabase().collection('movies').findOneAndDelete({
            _id: ObjectID(id)
        })
    }
    static async edit(id, data) {
        return await getDatabase().collection('movies').findOneAndUpdate({_id: ObjectID(id)}, data, { returnOriginal: false })
    }
}

module.exports = Movie