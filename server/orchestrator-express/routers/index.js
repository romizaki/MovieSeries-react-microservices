const router = require('express').Router()
const movies = require('./movies')
const series = require('./series')
const HomeController = require('../controllers/HomeController')
// router.get('/', (req, res) => {
//     res.send('router jalan')
// })
router.get('/', HomeController.findAll)

router.use('/movies', movies)
router.use('/series', series)

module.exports = router