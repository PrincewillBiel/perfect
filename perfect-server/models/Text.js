var keystone = require('keystone')
var Types = keystone.Field.Types

/**
 * Text Model
 * ==========
 */
var Text = new keystone.List('Text', {
	nocreate: false
})

Text.add({
	name: { type: Types.Text, initial: true, required: true },
	refemail: { type: Types.Text, initial: true },
	bonus: { type: Types.Text, initial: true, required: true },
	isWithdrawn: { type: Types.Boolean, default: false, index: true }
})
/**
 * Registration
 */
Text.defaultColumns = 'name, refemail, bonus, isWithdrawn'
Text.register()
