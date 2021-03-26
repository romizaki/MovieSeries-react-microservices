const router = require('express').Router()
const MovieController = require('../controllers/MovieController')

router.get('/', MovieController.findAll)
router.post('/', MovieController.createNewMovie)
router.put('/:id', MovieController.updateMovie)
router.delete('/:id', MovieController.deleteMovie)

module.exports = router