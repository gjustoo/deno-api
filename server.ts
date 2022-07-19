import { Application, Router } from "https://deno.land/x/oak/mod.ts";

import postRouter from './controller/PostController.ts';

import Post from './model/Post.ts'

import db from './db.ts';

// await Post.create({
//     username: 'GJustoo',
//     body: 'This is the post\'s body ',
// });

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

await db.sync({ drop: true });

console.log("Database connected!")

console.log(`DENO API REST STARTED http://localhost:${port}`);

await app.listen({ port });