const keystone = require('keystone');

const User = keystone.list('User').model;
const jwt = require('jsonwebtoken');
const moment = require('moment');

module.exports = {
  async register(req, res) {
    try {
      const user = new User(req.body);
      await user.save();

      // create jwt
      const token = user.jwtSignUser();
      user.password = user.passwordVersion = null;
      res.send({
        user,
        token,
      });
      user.sendAccountConfirmationEmail();
    } catch (err) {
      res.status(400).send({
        error: 'This email account is already in use',
      });
    }
  },
  async login(req, res) {
    try {
      const { email, password } = req.body;

      const user = await User.findOne({ email });
      if (!user) {
        return res.status(403).send({
          error: 'The login information was incorrect',
        });
      }

      // validate password
      return user._.password.compare(password, (err, isMatch) => {
        if (err) {
          return res.status(403).send({
            error: err,
          });
        }

        if (!isMatch) {
          return res.status(403).send({
            error: 'The login information was incorrect',
          });
        }

        // create jwt
        const token = user.jwtSignUser();
        user.password = user.passwordVersion = null;
        res.send({
          user,
          token,
        });
      });
    } catch (err) {
      res.status(500).send({
        error: 'An error has occured trying to log in',
      });
    }
  },
  async index(req, res) {
    try {
      const user = await User.findById(req.user.id);
      if (user) {
        user.password = user.passwordVersion = null;
        res.json(user);
      } else {
        res.status(404).send({
          error: 'User not found',
        });
      }
    } catch (err) {
      res.status(500).send({
        error: 'An error has occured trying to get user',
      });
    }
  },
  async editProfile (req, res) {
    try {
      const user = req.sourceUser;
      const { mobile } = req.body

      const edit = await User.findOneAndUpdate({ _id: user._id }, { mobile: mobile });

      res.send({
        user: edit
      })
    } catch (err) {
      console.log(err);
      res.status(500).send({
        error: 'An error has occured trying to update your details',
      });
    }
  },
  async changePassword (req, res) {
    try {
      const user = req.sourceUser;
      const { oldPassword, newPassword } = req.body;
      console.log(req.body)

      return user._.password.compare(oldPassword, (err, isMatch) => {
        if (err) {
          console.log(err)
        }

        if (isMatch) {
          user.password = newPassword
          user.save()
          res.send({ user })
        } else {
          res.status(403).send({
            error: 'The password was incorrect',
          });
        }
      });
    } catch (err) {
      console.log(err);
      res.status(500).send({
        error: 'An error has trying to change password.',
      });
    }
  },
  async sendPasswordResetLink(req, res) {
    try {
      const { email } = req.body;

      const user = await User.findOne({ email });
      if (user) {
        if (user.sendPasswordResetLink) {
          try {
            await user.sendPasswordResetLink();
            res.json({
              status: 'success',
              email: user.email,
            });
          } catch (e) {
            console.log(e);
            res.status(404).send({
              error: 'An error has occured trying to send email',
            });
          }
        } else {
          res.status(404).send({
            error: 'this user cannot run this mutation',
          });
        }
      } else {
        res.status(404).send({
          error: 'User not found',
        });
      }
    } catch (err) {
      res.status(500).send({
        error: 'An error has occured trying to get user',
      });
    }
  },
  async resetPassword(req, res) {
    const { code, newPassword } = req.body;
    try {
      const data = jwt.verify(code, process.env.JWT_SECRET);
      const { id, createdAt, pv } = data;
      if (id) {
        if (createdAt && moment(createdAt).isAfter(moment().subtract(24, 'hours'))) {
          const user = await User.findOne({
            _id: id,
            passwordVersion: pv ? keystone.pvCryptr.decrypt(pv) : -1,
          });
          if (user) {
            user._.password.compare(newPassword, async (err, isMatch) => {
              if (!isMatch) {
                user.password = newPassword;
                user.passwordVersion += 1;
                await user.save();
                // create jwt
                // const token = user.jwtSignUser();
                user.password = user.passwordVersion = null;
                res.send({
                  user,
                  // token,
                });
              } else {
                res.status(404).send({ error: 'same password' });
              }
            });
          } else {
            // console.log('no user found for token');
            res.status(404).send({ error: 'invalid token' });
          }
        } else {
          res.status(404).send({ error: 'expired token' });
        }
      } else {
        // console.log('no id in token');
        res.status(404).send({ error: 'invalid token' });
      }
    } catch (e) {
      console.log(e);
      res.status(500).send(e);
    }
  },
  async authAccess(req, res, next) {
    // jwt({ secret: config.authentication.jwtSecret })(req, res, next)
    try {
      const user = await User.findOne({
        _id: req.user.id,
        passwordVersion: req.user.pv ? keystone.pvCryptr.decrypt(req.user.pv) : -1,
      });
      if (user) {
        req.sourceUser = user;
        next();
      } else {
        res.status(404).send({
          error: 'User not found',
        });
      }
    } catch (err) {
      res.status(500).send({
        error: 'An error has occured trying to get user',
      });
    }
  },
  async isAuthenticated(req, res, next) {
    // jwt({ secret: config.authentication.jwtSecret })(req, res, next)
    try {
      const user = await User.findOne({
        _id: req.user.id,
        passwordVersion: req.user.pv ? keystone.pvCryptr.decrypt(req.user.pv) : -1,
      });
      if (user) {
        res.send({ authenticated: true });
      } else {
        res.send({ authenticated: false });
      }
    } catch (err) {
      console.log(err);
      res.send({ authenticated: false });
    }
  },
};
