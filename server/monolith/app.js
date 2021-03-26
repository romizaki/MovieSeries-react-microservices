const express = require('express')
const {connect} = require('./config/mongodb')
const errorHandler = require('./middlewares/index')
const app = express()
const router = require('./routers/index')

const PORT = 3000

app.use(express.urlencoded({ extended: false }))
app.use(express.json())

app.get('/', (req, res) => {
    res.send('Hello from the other side.....')
})


connect().then(async (db) => {
    app.use(router)
    app.use(errorHandler)
    app.listen(PORT, () => {
        console.log('hello from', PORT);
    })
})
.catch( err => {
    console.log(err);
})