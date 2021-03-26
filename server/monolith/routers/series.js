const router = require('express').Router()
const TvSeriesController = require('../controllers/TvSeriesConstroller')

router.get('/', TvSeriesController.findAll)
router.post('/', TvSeriesController.createNewTvSeries)
router.put('/:id', TvSeriesController.updateMovie)
router.delete('/:id', TvSeriesController.deleteTvSeries)

module.exports = router