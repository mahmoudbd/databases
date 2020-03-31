const util = require('util');
const mysql = require('mysql');
const authors = require('./authorValues');
const papers = require('./papers');
const authorPapers = require('./authorPaper');

const connection = mysql.createConnection({
	host: 'localhost',
	user: 'hyfuser',
	password: 'hyfpassword',
	database: 'mydata'
});

const execQuery = util.promisify(connection.query.bind(connection));

async function seedData() {
	const createResPTable = `
    CREATE TABLE IF NOT EXISTS Research_Papers
    (paper_id INT NOT NULL PRIMARY KEY, conference VARCHAR(50), paper_title VARCHAR(50),
     publish_date DATE)`;

	const createRelationTable = `
	CREATE TABLE IF NOT EXISTS Author_Paper
	( author_no INT,paper_id INT,
		CONSTRAINT FK_Author FOREIGN KEY(author_no) REFERENCES Authors(author_no),
		CONSTRAINT FK_Paper FOREIGN KEY(paper_id) REFERENCES Research_Papers(paper_id)
		 )
	 `;

	connection.connect();

	try {
		await execQuery(createResPTable);

		papers.forEach(async (paper) => {
			await execQuery('INSERT INTO Research_Papers SET ?', paper);
		});

		authors.forEach(async (author) => {
			await execQuery('INSERT INTO Authors SET ?', author);
		});
		await execQuery(createRelationTable);
		authorPapers.forEach(async (aPaper) => {
			await execQuery('INSERT INTO Author_Paper SET ?', aPaper);
		});
		console.log('Going to run ', 'Succes');
	} catch (error) {
		console.error(error);
	}
	connection.end();
}
seedData();
