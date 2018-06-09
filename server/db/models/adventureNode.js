const Sequelize = require('sequelize')
const db = require('../db')

const AdventureNode = db.define('adventureNode', {
  situation: {
    type: Sequelize.TEXT,
    allowNull: false
  },
  optionA: {
    type: Sequelize.TEXT
  },
  optionB: {
    type: Sequelize.TEXT
  },
  optionC: {
    type: Sequelize.TEXT
  },
  optionD: {
    type: Sequelize.TEXT
  },
  image: {
    type: Sequelize.STRING,
    defaultValue: 'http://www.fillmurray.com/200/300'
  }
})

module.exports = AdventureNode
