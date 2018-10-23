const keystone = require('keystone');
const jwt = require('jsonwebtoken');

module.exports = function sendPasswordResetLink() {
  const user = this;
  return new Promise(((resolve, reject) => {
    console.log('sending password reset email');
    if (!process.env.MAILGUN_API_KEY || !process.env.MAILGUN_DOMAIN) {
      console.log('Unable to send email - no mailgun credentials provided');
      reject(new Error('could not find mailgun credentials'));
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
    }).send({
      to: [user.email],
      from: {
        name: 'Perfect Funding',
        email: 'no-reply@perfectfunding.org',
      },
      subject: 'Password Reset',
      user,
      brandDetails,
      resetLink,
    }, (err) => {
      if (err) {
        console.log(err);
        reject(err);
      }
    });
    resolve();
  }));
};
