const keystone = require('keystone')
const Upline = keystone.list('Upline').model

module.exports = {
  async getUpline (req, res) {
     try {
      var code = req.params.code
      const upline = await Upline.findOne({ code });
      if (upline) {
       res.json({upline: upline})
      } else {
        res.status(404).send({
          error: 'You have no uplines yet.'
        })
      }
    } catch (err) {
      console.log(err)
      res.status(500).send({
        error: 'An error occured trying to get upline.'
      })
    }
  },
  async postUpline (req, res) {
    try {
      const upline = new Upline(req.body)
      await upline.save()
      res.send({
        upline: upline
      })
    } catch (err) {
      console.log(err)
      res.status(400).send({
        error: 'An error occured creating upline'
      })
    }
  }
}
