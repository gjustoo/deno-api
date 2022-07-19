import { Model } from 'https://deno.land/x/denodb/mod.ts';

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

export default Post;