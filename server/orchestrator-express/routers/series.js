const router = require('express').Router()
const TvSeriesController = require('../controllers/SeriesController')

router.get('/', TvSeriesController.findAll)
router.post('/', TvSeriesController.createNewTvSeries)
router.put('/:id', TvSeriesController.updateMovie)
router.delete('/:id', TvSeriesController.deleteTvSeries) 
router.get('/:id', TvSeriesController.findById)

module.exports = router