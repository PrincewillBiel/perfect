const keystone = require('keystone');
const jwt = require('jsonwebtoken');

module.exports = {
  async testpasswordreset(req, res) {
    keystone.list('User').model.findOne().exec((err, user) => {
      if (err) console.log(err);
      console.log('sending password reset email');
      if (!process.env.MAILGUN_API_KEY || !process.env.MAILGUN_DOMAIN) {
        console.log('Unable to send email - no mailgun credentials provided');
        res.status(400).send({
          error: 'could not find mailgun credentials',
        });
      }

      const brandDetails = keystone.get('brandDetails');

      const code = jwt.sign({
        id: user._id,
        createdAt: Date.now(),
        pv: keystone.pvCryptr.encrypt(user.passwordVersion),
      }, process.env.JWT_SECRET);
      const resetLink = `http://www.perfectfunding.org/forgot/change?code=${code}`;

      new keystone.Email({
        templateName: 'reset-password',
        transport: 'mailgun',
      }).render({
        to: [user.email],
        from: {
          name: 'EFS',
          email: 'no-reply@perfectfunding.org',
        },
        subject: 'Password Reset',
        user,
        brandDetails,
        resetLink,
      }, (err, { html, text }) => res.send(html));
    });
  },
  async testconfirmationemail(req, res) {
    keystone.list('User').model.findOne().exec((err, user) => {
      if (err) console.log(err);
      console.log('sending welcome email');
      if (!process.env.MAILGUN_API_KEY || !process.env.MAILGUN_DOMAIN) {
        console.log('Unable to send email - no mailgun credentials provided');
        res.status(400).send({
          error: 'could not find mailgun credentials',
        });
      }

      const brandDetails = keystone.get('brandDetails');

      new keystone.Email({
        templateName: 'welcome',
        transport: 'mailgun',
      }).render({
        to: [user.email],
        from: {
          name: 'Perfect Funding',
          email: 'no-reply@perfectfunding.org',
        },
        subject: 'Welcome',
        user,
        brandDetails,
      }, (err, { html, text }) => res.send(html));
    });
  },
};
