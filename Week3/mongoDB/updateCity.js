//https://www.mongodb.com/blog/post/quick-start-nodejs-mongodb--how-to-get-connected-to-your-database

const { MongoClient } = require('mongodb');
const uri = 'mongodb+srv://mahmoudbd:hyf1000@cluster0-dxj8e.mongodb.net/test?retryWrites=true&w=majority';

async function main() {
	const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true });

	try {
		await client.connect();

		await updateCity(client, 'Damascus', { Population: 3500000 });
	} catch (e) {
		console.error(e);
	} finally {
		await client.close();
	}
}

main().catch(console.error);

async function updateCity(client, city, updateCity) {
	const result = await client.db('world_db').collection('city').updateOne({ Name: city }, { $set: updateCity });
	console.log(`City updated.... ${result.modifiedCount}`);
}
