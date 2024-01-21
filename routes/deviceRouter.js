const Router = require('express')
const router = new Router()
const deviceController = require('../controllers/deviceController')
const authMiddleware = require('../middleware/authMiddleWare')

router.post('/', authMiddleware, deviceController.create)
router.get('/', deviceController.getAll)
router.get('/:id', deviceController.getOne)




module.exports = router