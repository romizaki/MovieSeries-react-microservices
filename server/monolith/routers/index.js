const router = require('express').Router()
const movies = require('./movies')
const series = require('./series')

router.get('/', (req, res) => {
    res.send('router jalan')
})

router.use('/movies', movies)
router.use('/series', series)

module.exports = router