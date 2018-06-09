const Sequelize = require('sequelize')
const db = require('../db')

const Option = db.define('option', {
  option: {
    type: Sequelize.TEXT,
    allowNull: false
  },
})

module.exports = Option
