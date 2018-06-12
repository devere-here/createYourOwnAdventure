const router = require('express').Router()
module.exports = router

router.use('/situation', require('./situation'))
router.use('/secretSituation', require('./secretSituation'))
router.use('/option', require('./option'))
router.use('/secretOption', require('./secretOption'))

router.use((req, res, next) => {
  const error = new Error('Not Found')
  error.status = 404
  next(error)
})
