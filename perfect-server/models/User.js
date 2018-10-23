const keystone = require('keystone');

const { Types } = keystone.Field;

/**
 * User Model
 * ==========
 */
const User = new keystone.List('User', {
  nocreate: false,
});

User.add({
  name: { type: Types.Text, required: true, index: true },
  email: {
    type: Types.Email, initial: true, required: true, unique: true, index: true, noedit: true,
  },
  password: { type: Types.Password, initial: true, required: true },
  passwordVersion: {
    type: Types.Number, initial: false, required: true, default: 1, noedit: true,
  },
  country: { type: Types.Text, initial: true, required: true },
  mobile: { type: Types.Text, initial: true, required: true },
  referral: { type: Types.Text, initial: true },
});

const {
  jwtSignUser,
  sendPasswordResetLink,
  sendAccountConfirmationEmail,
} = require('../modelMethods/user');

User.schema.methods = {
  ...User.schema.methods,
  jwtSignUser,
  sendPasswordResetLink,
  sendAccountConfirmationEmail,
};

/**
 * Relationships
 */
User.relationship({ ref: 'Investment', path: 'investments', refPath: 'userId' });

/**
 * Registration
 */
User.defaultColumns = 'name, email, mobile, country, referral';
User.register();
