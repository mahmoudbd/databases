const { MongoClient } = require('mongodb');
const uri = 'mongodb+srv://mahmoudbd:hyf1000@cluster0-dxj8e.mongodb.net/test?retryWrites=true&w=majority';

async function main() {
	const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true });

	try {
		await client.connect();

		await findByCityByName(client, 'Damascus');
		await findByCountryCode(client, 'SY');
	} catch (e) {
		console.error(e);
	} finally {
		await client.close();
	}
}

main().catch(console.error);

async function findByCityByName(client, cityName) {
	const result = await client.db('world_db').collection('city').find({ name: cityName });
	const results = await result.toArray();

	if (results) {
		console.log(`Found a listing with the name '${cityName}':`);
		console.log(results);
	} else {
		console.log(`No listings found with the name '${cityName}'`);
	}
}

async function findByCountryCode(client, countryCode) {
	const result = await client.db('world_db').collection('city').findOne({ CountryCode: countryCode });

	if (result) {
		console.log(`Found a listing with the Country Code '${countryCode}':`);
		console.log(result);
	} else {
		console.log(`No listings found with the Country Code: '${countryCode}'`);
	}
}
