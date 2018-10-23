const keystone = require('keystone');

module.exports = function sendAccountConfirmationEmail() {
  const user = this;
  return new Promise(((resolve, reject) => {
    console.log('sending welcome email');
    if (!process.env.MAILGUN_API_KEY || !process.env.MAILGUN_DOMAIN) {
      console.log('Unable to send email - no mailgun credentials provided');
      reject(new Error('could not find mailgun credentials'));
    }

    const brandDetails = keystone.get('brandDetails');

    new keystone.Email({
      templateName: 'welcome',
      transport: 'mailgun',
    }).send({
      to: [user.email],
      from: {
        name: 'EFS',
        email: 'no-reply@perfectfunding.org',
      },
      subject: 'Welcome',
      user,
      brandDetails,
    }, (err) => {
      if (err) {
        console.log(err);
        reject(err);
      }
    });
    resolve();
  }));
};
