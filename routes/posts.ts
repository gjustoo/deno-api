import { Router, RouterContext } from "https://deno.land/x/oak/mod.ts";



const posts = [
    {
        username: 'Gabriel',
        body: 'Hi my name is Gabriel'
    },
    {
        username: 'Gabriel',
        body: 'Hi my name is Gabriel'

    }
]

const router = new Router();


router.post("/", async ({ request, response }: RouterContext) => {
    const { username, body } = await request.body().value;

    posts.push({ username, body });

    response.body = { username, body }

})

router.get("/", (ctx) => {
    ctx.response.body = posts
});


export default router;