const optionRouter = require('express').Router()
const Options = require('../db/models').Option


optionRouter.get('/', (req, res, next) => {
  Options.findAll()
  .then(data => res.json(data))
  .catch(next)
})

module.exports = optionRouter
