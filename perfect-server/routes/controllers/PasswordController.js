const keystone = require('keystone');

const User = keystone.list('User').model;
const jwt = require('jsonwebtoken');
const moment = require('moment');
// const config = require('../config/config')

module.exports = {
  async resetPassword(req, res) {
    const { code, newPassword } = req.body;
    try {
      const data = jwt.verify(code, process.env.ACTIVATION_JWT_SECRET);
      const { id, createdAt, pv } = data;
      if (id) {
        if (createdAt && moment(createdAt).isAfter(moment().subtract(24, 'hours'))) {
          const user = await User.findOne({
            _id: id,
            passwordVersion: pv ? keystone.pvCryptr.decrypt(pv) : -1,
          });
          // console.log(user);
          if (user) {
            if (user.password !== newPassword) {
              // change password
              user.password = newPassword;
              user.passwordVersion += 1;
              await user.save();
              // const token = user.signToken();
              res.send({
                name: user.name,
                // jwt: token
                success: true
              });
            }
            res.status(400).send({ error: 'same password' });
          }
          res.status(400).send({ error: 'invalid token' });
        }
        res.status(400).send({ error: 'expired token' });
      }
      res.status(400).send({ error: 'invalid token' });
    } catch (e) {
      // throw e;
      res.status(400).send({
        error: 'This email account is already in use',
      });
    }
  },
};
