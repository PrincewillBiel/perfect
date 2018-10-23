const keystone = require('keystone');
const jwt = require('jsonwebtoken');

module.exports = function jwtSignUser() {
  const user = this;
  const ONE_WEEK = 60 * 60 * 24 * 7;
  return jwt.sign({
    id: user.id,
    pv: keystone.pvCryptr.encrypt(user.passwordVersion),
  }, process.env.JWT_SECRET, {
    expiresIn: ONE_WEEK,
  });
};
