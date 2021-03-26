const { getDatabase } = require('../config/mongodb')

class Movie {
    static async find() {
        return getDatabase().collection('movies').find().toArray()
    }
    static async create(data) {
        return getDatabase().collection('movies').insertOne(data)
    }
    static async delete(id) {
        return await getDatabase().collection('movies').findOneAndDelete(id)
    }
    static async edit(id, data) {
        return await getDatabase().collection('movies').findOneAndUpdate(id, data, { returnOriginal: false })
    }
}

module.exports = Movie