const keystone = require('keystone')
const Downline = keystone.list('Downline').model
const jwt = require('jsonwebtoken')

module.exports = {
  async getDownline (req, res) {
     try {
      const downline = await Downline.find({refemail: req.sourceUser.email}).limit(10)
      if (downline) {
       res.json({downline: downline})
      } else {
        res.status(404).send({
          error: 'You have no downlines yet.'
        })
      }
    } catch (err) {
      console.log(err)
      res.status(500).send({
        error: 'An error occured trying to get downline.'
      })
    }
  },
  async getUpline (req, res) {
     try {
      const upline = await Downline.findOne({ myemail: req.sourceUser.email });
      if (upline) {
       res.json({upline: upline})
      } else {
        res.status(404).send({
          error: 'You have no upline.'
        })
      }
    } catch (err) {
      console.log(err)
      res.status(500).send({
        error: 'An error occured trying to get upline.'
      })
    }
  },
  async postDownline (req, res) {
    try {
      const downline = new Downline(req.body)
      await downline.save()
      res.send({
        downline: downline
      })
      console.log(downline)
    } catch (err) {
      console.log(err)
      res.status(400).send({
        error: 'An error occured create downline'
      })
    }
  }
}
