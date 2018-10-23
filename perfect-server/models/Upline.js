var keystone = require('keystone');
var Types = keystone.Field.Types;

/**
 * Upline Model
 * ==========
 */
var Upline = new keystone.List('Upline', {
	nocreate: false
});

Upline.add({
	name: { type: Types.Text, initial: true },
	email: { type: Types.Text, initial: true },
	code: { type: String, initial: true }
});
/**
 * Registration
 */
Upline.defaultColumns = 'name, email, code';
Upline.register()
