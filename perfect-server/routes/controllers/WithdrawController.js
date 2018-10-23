const keystone = require('keystone')
const Withdraw = keystone.list('Withdraw').model
const jwt = require('jsonwebtoken')

module.exports = {
  async withdraw (req, res) {
    try {
      const user = req.sourceUser
      const withdraw = new Withdraw({...req.body, name: user.name, email: user.email})
      await withdraw.save()
      res.send({
        withdraw: withdraw
      })
      // console.log(Withdraw)
    } catch (err) {
      console.log(err)
      res.status(400).send({
        error: 'An error occured while trying to Withdraw'
      })
    }
  }
}
