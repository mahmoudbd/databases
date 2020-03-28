const mysql = require('mysql');
const connection = mysql.createConnection({
	host: 'localhost',
	user: 'hyfuser',
	password: 'hyfpassword',
	database: 'world'
});

connection.connect();

function getPopulation(Country, name, code, cb) {
	connection.query(
		`SELECT Population FROM ${Country} WHERE Name = +
			${connection.escape(name)}and code = +
			${connection.escape(code)}`,
		function(err, result) {
			if (err) cb(err);
			if (result.length == 0) cb(new Error('Not found'));
			cb(null, result[0].name);
		}
	);
}

getPopulation('Country', 'Netherlands', 'NLD', (err, result) => {
	if (err) console.error(err);
	else console.log(result);
});
