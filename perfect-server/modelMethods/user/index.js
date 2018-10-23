const jwtSignUser = require('./jwtSignUser');
const sendPasswordResetLink = require('./sendPasswordResetLink');
const sendAccountConfirmationEmail = require('./sendAccountConfirmationEmail');

module.exports = {
  jwtSignUser,
  sendPasswordResetLink,
  sendAccountConfirmationEmail,
};
