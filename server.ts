import { Application, Router } from "https://deno.land/x/oak/mod.ts";

import { DataTypes, Model, MongoDBConnector , Database} from 'https://deno.land/x/denodb/mod.ts';
import postRouter from './routes/posts.ts';



const connector = new MongoDBConnector({
    uri: 'mongodb://127.0.0.1:27017',
    database: 'deno',
  });
  
const db = new Database(connector);


class Post extends Model {
    static table = 'posts';
    static timestamps = true;

    static fields = {
        _id: {
          primaryKey: true,
        },
        username: {
            bsonType: "string",
            description: "must be a string and is required"
        },
        body: {
            bsonType: "string",
            description: "must be a string and is required"
         },
      };

    static defaults = {
        //   flightDuration: 2.5,
    };
}

db.link([Post]);

await db.sync({ drop: true });

await Post.create({
    username: 'GJustoo',
    body: 'Tokyo',
});

const app = new Application();

const router = new Router();
const port = 8080;

// ############ ENDPOINTS ############

router.get("/api", (ctx) => {
    ctx.response.body = { "message": "Seems like the API is working fine..." }
});

app.use(router.routes());
app.use(postRouter.prefix("/api/posts").routes());
app.use(router.allowedMethods());

console.log(`DENO API REST STARTED http://localhost:${port}`);

await app.listen({ port });
