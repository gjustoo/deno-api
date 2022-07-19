import { Database, MongoDBConnector } from 'https://deno.land/x/denodb/mod.ts';

import Post from './model/Post.ts';

const connector = new MongoDBConnector({
    uri: 'mongodb://127.0.0.1:27017',
    database: 'deno',
});


const db = new Database(connector);

db.link([Post]);


export default db;