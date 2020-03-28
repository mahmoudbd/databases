const util = require('util');
const mysql = require('mysql');

const connection = mysql.createConnection({
	host: 'localhost',
	user: 'hyfuser',
	password: 'hyfpassword',
	database: 'data_w3'
});

const execQuery = util.promisify(connection.query.bind(connection));

async function seedData() {
	const setAutoCommit = `
    SET autocommit = 0 `;

	const startTransaction = `
    start transaction`;

	const updateAccountT = `
    update account SET balance = 1000 WHERE account_number = 101 `;
	const updateAccountChanges = `
	update account_changes SET change_number = 1000 WHERE account_number = 102 `;
	const updateAmountAccountChanges = `
	update account_changes SET amount = 1150 WHERE account_number = 102 `;
	const rollback = `rollback`;
	const commit = `commit`;
	connection.connect();

	try {
		await execQuery(setAutoCommit);
		await execQuery(startTransaction);
		await execQuery(updateAccountT);
		await execQuery(updateAccountChanges);
		await execQuery(updateAmountAccountChanges);
		await execQuery(commit);
		console.log('Going to run ', 'Succes');
	} catch (error) {
		execQuery(rollback);
		console.error(error);
	}
	connection.end();
}
seedData();
