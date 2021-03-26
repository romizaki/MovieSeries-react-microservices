const express = require('express')
const {connect} = require('./config/mongodb')
const app = express()
const router = require('./routers/index')

const PORT = 4000

app.use(express.urlencoded({ extended: false }))
app.use(express.json())

app.get('/', (req, res) => {
    res.send('Hello from the other side.....')
})

// app.listen(PORT, () => {
//     console.log('hello from', PORT);
// })

connect().then(async (db) => {
    console.log('masuk mongo');
    app.use(router)
    app.listen(PORT, () => {
        console.log('hello from', PORT);
    })
})
.catch( err => {
    console.log(err);
})