const secretOptionRouter = require('express').Router()
const Options = require('../db/models').Option


secretOptionRouter.get('/', (req, res, next) => {
  Options.findAll({
    where: {
      secret: true
    }
  })
  .then(data => res.json(data))
  .catch(next)
})

module.exports = secretOptionRouter
