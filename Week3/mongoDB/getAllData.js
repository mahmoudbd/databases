//https://www.mongodb.com/blog/post/quick-start-nodejs-mongodb--how-to-get-connected-to-your-database

const { MongoClient } = require('mongodb');
const uri = 'mongodb+srv://mahmoudbd:hyf1000@cluster0-dxj8e.mongodb.net/test?retryWrites=true&w=majority';

async function main() {
	const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true });

	try {
		// Connect to the MongoDB cluster
		await client.connect();

		// Make the appropriate DB calls
		await listDatabases(client);
	} catch (e) {
		console.error(e);
	} finally {
		await client.close();
	}
}

main().catch(console.error);

async function listDatabases(client) {
	databasesList = await client.db().admin().listDatabases();

	console.log('Databases:');
	databasesList.databases.forEach((db) => console.log(` - ${db.name}`));
}
