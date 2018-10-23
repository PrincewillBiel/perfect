var keystone = require('keystone')
var Types = keystone.Field.Types

/**
 * Bonus Model
 * ==========
 */
var Bonus = new keystone.List('Bonus', {
	nocreate: false
})

Bonus.add({
	name: { type: Types.Text, initial: true, required: true },
	refemail: { type: Types.Text, initial: true },
	bonus: { type: Types.Number, initial: true, required: true },
	isWithdrawn: { type: Types.Boolean, default: false, index: true }
})
/**
 * Registration
 */
Bonus.defaultColumns = 'name, refemail, bonus, isWithdrawn'
Bonus.register()
