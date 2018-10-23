const keystone = require('keystone');
const Investment = keystone.list('Investment').model;
const jwt = require('jsonwebtoken')

module.exports = {
  async index (req, res) {
       try {
        const investments = await Investment.find({$and: [
          { userId: req.sourceUser.id },
          { isCancelled: false },
          {$or : [{ isWithdrawn: false }]}
        ]}).limit(1000)

        if (investments) {
         res.json({investments: investments})
        } else {
          res.status(404).send({
            error: 'You have no investments yet.'
          })
        }
      } catch (err) {
        console.log(err)
        res.status(500).send({
          error: 'An error occured trying to get investment.'
        })
    }
  },
  async list (req, res) {
       try {
        const investments = await Investment.find({userId: req.sourceUser.id}).limit(1000)

        if (investments) {
         res.json({investments: investments})
        } else {
          res.status(404).send({
            error: 'You have no investments yet.'
          })
        }
      } catch (err) {
        console.log(err)
        res.status(500).send({
          error: 'An error occured trying to get investments.'
        })
      }
  },
  async createInv (req, res) {
    try {
      const user = req.sourceUser
      const investment = new Investment({...req.body, userId: user.id})
      await investment.save()

      res.send({
        investment: investment
      })
    } catch (err) {
      console.log(err)
      res.status(400).send({
        error: 'An error occured trying to make investment'
      })
    }
  },
  async deleteInv (req, res) {
    try {
      const user = req.sourceUser
      const investmentId = req.body.id

      const investment = await Investment.findOneAndUpdate({$and: [
        { _id: investmentId },
        { userId: user.id}
      ]}, { isCancelled: true })

      res.send({
        investment: investment
      })
    } catch (err) {
      console.log(err)
      res.status(400).send({
        error: 'An error occured trying to delete investment'
      })
    }
  },
  async withdrawInv (req, res) {
    try {
      const user = req.sourceUser
      const investmentId = req.body.id;

      const investment = await Investment.findOneAndUpdate({$and: [
        { _id: investmentId },
        { userId: user.id}
      ]}, { isWithdrawn: true })

      res.send({
        investment: investment
      })
    } catch (err) {
      console.log(err)
      res.status(400).send({
        error: 'An error occured trying to withdraw investment'
      })
    }
  }
}
