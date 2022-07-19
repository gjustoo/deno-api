import { Application, Router } from "https://deno.land/x/oak/mod.ts";
import Post from './model/Post.ts'
import {
    Database, MongoDBConnector
} from "https://deno.land/x/denodb/mod.ts";

import postRouter from './controller/PostController.ts';

//#########  DATABASE CONNECTION #########

const connector = new MongoDBConnector({
  uri: "mongodb://127.0.0.1:27017",
  database: "deno",
});

const db = new Database(connector);

//#########  ENTITY DEFINITION #########


await db.sync({ drop: true });

await Post.create({
  username: "GJustoo",
  body: "This is the post's body ",
});

const app = new Application();

const router = new Router();
const port = 8080;

// ############ ENDPOINTS ############

router.get("/api", (ctx) => {
  ctx.response.body = { "message": "Seems like the API is working fine..." };
});

app.use(router.routes());
app.use(postRouter.prefix("/api/posts").routes());
app.use(router.allowedMethods());

console.log(`DENO API REST STARTED http://localhost:${port}`);

await app.listen({ port });
