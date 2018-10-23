var keystone = require('keystone')
var Types = keystone.Field.Types

/**
 * File Upload Model
 * ===========
 * A database model for uploading images to the local file system
 */

 var Pop = new keystone.List('Pop', {
 	nocreate: false,
  track: true
 })

Pop.add({
  email: { type: Types.Text },
  proof: { type: Types.CloudinaryImage, initial: true, required: true }
})


Pop.defaultColumns = 'email, proof, createdAt'
Pop.register()
