var keystone = require('keystone')
var Types = keystone.Field.Types

/**
 * File Upload Model
 * ===========
 * A database model for uploading images to the local file system
 */

 var Withdraw = new keystone.List('Withdraw', {
 	nocreate: false,
  track: true
 })

Withdraw.add({
  amount: { type: Types.Text, initial: true },
  currency: { type: Types.Text, initial: true },
  description: { type: Types.Text, initial: true },
  email: { type: Types.Text, initial: true },
  name: { type: Types.Text, initial: true },
  wallet: { type: Types.Text, required: true, initial: true }
})


Withdraw.defaultColumns = 'name, email, amount, currency, description, wallet, createdAt'
Withdraw.register()
