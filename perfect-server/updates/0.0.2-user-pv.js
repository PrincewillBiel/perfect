// This is the long-hand version of the functionality above:

var keystone = require('keystone');
var User = keystone.list('User').model;

exports = module.exports = function (done) {
	User.updateMany({}, {passwordVersion: 1}).exec((err)=>done(err))
};
