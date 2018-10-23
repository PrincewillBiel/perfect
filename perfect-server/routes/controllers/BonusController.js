const keystone = require('keystone')
const Bonus = keystone.list('Bonus').model
const jwt = require('jsonwebtoken')

module.exports = {
  async index (req, res) {
       try {
        const bonus = await Bonus.find({$and: [
          { refemail: req.sourceUser.email },
          { isWithdrawn: false }
        ]}).limit(100000)

        if (bonus) {
         res.json({bonus: bonus})
        } else {
          res.status(404).send({
            error: 'You have no bonuses yet.'
          })
        }
      } catch (err) {
        console.log(err)
        res.status(500).send({
          error: 'An error occured trying to get bonuses.'
        })
    }
  },
  async list (req, res) {
     try {
      const bonus = await Bonus.find({refemail: req.sourceUser.email}).limit(100000)
      if (bonus) {
       res.json({bonus: bonus})
      } else {
        res.status(404).send({
          error: 'You have no bonuses yet.'
        })
      }
    } catch (err) {
      console.log(err)
      res.status(500).send({
        error: 'An error occured trying to get bonuses.'
      })
    }
  },
  async postBonus (req, res) {
    try {
      const user = req.sourceUser
      const bonus = new Bonus({ ...req.body, name: user.name })
      await bonus.save()
      res.send({
        bonus: bonus
      })
    } catch (err) {
      console.log(err)
      res.status(400).send({
        error: 'An error occured trying to create Bonus'
      })
    }
  },
  async withdrawBon (req, res) {
    try {
      const user = req.sourceUser
      const bonusId = req.body.id;

      const bonus = await Bonus.findOneAndUpdate({ _id: bonusId }, { isWithdrawn: true })

      res.send({
        bonus: bonus
      })
    } catch (err) {
      console.log(err)
      res.status(400).send({
        error: 'An error occured trying to withdraw bonus'
      })
    }
  }
}
