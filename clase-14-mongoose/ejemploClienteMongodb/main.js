import { MongoClient } from 'mongodb'
import { MONGODB_CNX_STR } from './config.js';

const client = new MongoClient(MONGODB_CNX_STR);

await client.connect()

const personasDb = client.db().collection("personas");

const personas = await personasDb.find().toArray()

console.log(personas)

client.close();
