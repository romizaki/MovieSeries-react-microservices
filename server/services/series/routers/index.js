const router = require('express').Router()
const series = require('./series')

router.get('/', (req, res) => {
    res.send('router jalan')
})

router.use('/series', series)

module.exports = router