var keystone = require('keystone');
var Types = keystone.Field.Types;

/**
 * Investment Model
 * ==========
 */
var Investment = new keystone.List('Investment', {
	nocreate: false,
	track: true
});

Investment.add({
	plan: { type: Types.Text, initial: true },
	amount: { type: Types.Number, initial: true },
	method: { type: Types.Text, initial: true },
	interest: { type: Types.Number, initial: true },
	duration: { type: Types.Number, initial: true },
	userId: { type: Types.Relationship, ref: 'User', initial: true },
	total: { type: Types.Number, initial: true },
	begin: { type: Types.Text, initial: true },
	less: { type: Types.Number, initial: true },
	withdrawn: { type: Types.Number, initial: true },
	isCancelled: { type: Types.Boolean, default: false, index: true },
	isWithdrawn: { type: Types.Boolean, default: false, index: true }
})
/**
 * Registration
 */
Investment.defaultColumns = 'plan, amount, interest, duration, total, begin, less, withdrawn, createdAt, updatedAt, isWithdrawn';
Investment.register();
