// 1- get all the info if inserted into name {countryName} or 1=1.   .
// 2- drop table {name of the table }; delete the table 5555 or 1=1;  .

function getPopulation(Country, name, code, cb) {
	connection.query(`SELECT Population FROM ?? WHERE Name = ?AND code = ?`, [ Country, name, code ], function(
		err,
		result
	) {
		if (err) cb(err);
		if (result.length == 0) cb(new Error('Not found'));
		cb(null, result[0].name);
	});
}
