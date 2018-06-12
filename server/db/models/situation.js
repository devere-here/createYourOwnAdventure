const Sequelize = require('sequelize')
const db = require('../db')

const Situation = db.define('situation', {
  situation: {
    type: Sequelize.TEXT,
    allowNull: false
  },
  secret: {
    type: Sequelize.BOOLEAN,
    allowNull: false
  }
})

module.exports = Situation
