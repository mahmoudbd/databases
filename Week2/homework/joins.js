const util = require('util');
const mysql = require('mysql');
const connection = mysql.createConnection({
	host: 'localhost',
	user: 'hyfuser',
	password: 'hyfpassword',
	database: 'mydata'
});
const execQuery = util.promisify(connection.query.bind(connection));

async function seedData() {
	const authersConf = `SELECT a.author_name AS Name , b.author_name AS Friend FROM Authors a, 
                         Authors b where a.author_no = b.friend`;

	const printAllCol = `SELECT * FROM Authors AS A left join Author_Paper AS AP 
	ON AP.author_no = A.author_no 
	LEFT JOIN research_papers AS R 
	ON R.paper_id= AP.paper_id`;

	connection.connect();

	try {
		console.log(await execQuery(authersConf));
		console.log(await execQuery(printAllCol));
	} catch (error) {
		console.error(error);
	}
	connection.end();
}

seedData();
