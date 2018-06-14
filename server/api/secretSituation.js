const secretSituationRouter = require('express').Router()
const Situations = require('../db/models').Situation


secretSituationRouter.get('/', (req, res, next) => {
  Situations.findAll({
    where: {
      secret: false
    }
  })
  .then(data => res.json(data))
  .catch(next)
})

module.exports = secretSituationRouter
