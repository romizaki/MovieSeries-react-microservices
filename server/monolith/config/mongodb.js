const { MongoClient } = require('mongodb')

let database = null
async function connect(params) {
    try {
        const uri ='mongodb://localhost:27017' //url default mongodb
        const client = new MongoClient(uri, { useUnifiedTopology:true })
        await client.connect()
        const db = client.db('DB-Entertains')
        database = db
        return database
    } catch (error) {
        console.log(error);
    }
}

module.exports = {
    connect,
    getDatabase() {
        return database
    }
}
// {"t":{"$date":"2021-02-12T14:40:15.494+07:00"},"s":"I",  "c":"STORAGE",  "id":4615611, "ctx":"initandlisten","msg":"MongoDB starting","attr":{"pid":7542,"port":27017,"dbPath":"/var/lib/mongodb","architecture":"64-bit","host":"romizaki-X450LCP"}}