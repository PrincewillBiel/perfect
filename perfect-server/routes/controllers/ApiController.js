const {User} = require('../models')
const jwt = require('jsonwebtoken')

module.exports = {
  async index (req, res) {
    const user = await User.findOne(req.user.email)
    if (user) {
      res.json(user.toJSON())
    } else {
      res.status(404).send({
        error: 'User not found'
      })
    }
  }
}
