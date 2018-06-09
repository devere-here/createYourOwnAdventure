const situationRouter = require('express').Router()
const Situations = require('../db/models').Situation


situationRouter.get('/', (req, res, next) => {
  Situations.findAll()
  .then(data => res.json(data))
  .catch(next)
})

module.exports = situationRouter
