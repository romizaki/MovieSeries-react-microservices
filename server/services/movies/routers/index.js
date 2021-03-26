const router = require('express').Router()
const movies = require('./movies')

router.get('/', (req, res) => {
    res.send('router jalan')
})

router.use('/movies', movies)

module.exports = router