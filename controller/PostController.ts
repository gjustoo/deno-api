import { Router, RouterContext } from "https://deno.land/x/oak/mod.ts";

import Post from "../model/Post.ts";
const router = new Router();


router.post("/", async ({ request, response }: RouterContext) => {
    const { username, body } = await request.body().value;

    posts.push({ username, body });

    response.body = { username, body }

})

router.get("/", async (ctx: RouterContext) => {
    try {

        const posts = await Post.all();
        response.body = posts;
        
    } catch (err) {

        console.log(error);
        response.body = { error: 'Something whent wrong'};
        response.status = 500;
        
    }
    ctx.response.body = Post.all();
});


export default router;