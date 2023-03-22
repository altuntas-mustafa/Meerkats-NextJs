const { MongoClient, ServerApiVersion } = require('mongodb');
require('dotenv').config({ path: 'containerConfig/mongodb.env' });

const uri = `mongodb+srv://${process.env.MONGO_INITDB_ROOT_USERNAME}:${process.env.MONGO_INITDB_ROOT_PASSWORD}.${process.env.MONGO_INITDB_ROOT_DBNAME}.ayipck5.mongodb.net/?retryWrites=true&w=majority`;
const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true, serverApi: ServerApiVersion.v1 });
const dbName = "Meerkats";

const getPlaceCollection = async () => {
  await client.connect();
  const db = client.db(dbName);
  return db.collection('project');
};


export {};