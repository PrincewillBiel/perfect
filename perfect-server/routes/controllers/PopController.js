const keystone = require('keystone')
const Pop = keystone.list('Pop').model
const jwt = require('jsonwebtoken')

module.exports = {
  async postPop (req, res) {
    try {
      const user = req.sourceUser
      const pop = new Pop({...req.body, email: user.email})
      await pop.save()
      res.send({
        pop: pop
      })
      console.log(pop)
    } catch (err) {
      console.log(err)
      res.status(400).send({
        error: 'An error occured while trying upload pop'
      })
    }
  }
}
