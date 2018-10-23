var keystone = require('keystone');
var Types = keystone.Field.Types;

/**
 * Downline Model
 * ==========
 */
var Downline = new keystone.List('Downline', {
	nocreate: false
});

Downline.add({
	name: { type: Types.Text, initial: true },
	myemail: { type: Types.Text, initial: true },
	refemail: { type: Types.Text, initial: true },
	refname: { type: Types.Text, initial: true }
});
/**
 * Registration
 */
Downline.defaultColumns = 'name, myemail, refemail, refname';
Downline.register()
