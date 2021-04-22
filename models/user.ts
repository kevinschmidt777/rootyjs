import { DataTypes } from 'sequelize';
import { rootyDb } from '../base/database';

/**
 * Define the model
 */
const User = rootyDb.define(
	'User',
	{
		email: {
			type: DataTypes.STRING,
			allowNull: false,
			unique: true,
			validate: {
				isEmail: true, // checks for email format (foo@bar.com)
			},
		},
		password: {
			type: DataTypes.STRING,
			allowNull: false,
			set(value) {
				// Storing passwords in plaintext in the database is terrible.
				// Hashing the value with an appropriate cryptographic hash function is better.
				this.setDataValue('password', value + '123!');
			},
		},
	},
	{
		tableName: 'users', // Database table name
		timestamps: true, // Generate createdAt and updatedAt by default
	}
);

/**
 * Sync with database.
 */
(async () => {
	// alter: true
	// This checks what is the current state of the table in the database (which columns it has, what are their data types, etc), and then performs the necessary changes in the table to make it match the model.
	await rootyDb.sync({ alter: true });
})();

export default User;
