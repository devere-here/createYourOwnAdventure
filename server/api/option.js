const optionRouter = require('express').Router()
const Options = require('../db/models').Option


optionRouter.get('/', (req, res, next) => {
  Options.findAll({
    where: {
      secret: false
    }
  })
  .then(data => res.json(data))
  .catch(next)
})

module.exports = optionRouter
