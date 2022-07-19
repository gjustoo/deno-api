import { DataTypes, Model } from "https://deno.land/x/denodb/mod.ts";

class Post extends Model {
    
  static table = "posts";
  static timestamps = true;

  static fields = {
    _id: {
      primaryKey: true,
    },
    username: {
      type: DataTypes.STRING,
    },
    body: {
      type: DataTypes.STRING,
    },
  };

  static defaults = {
  };
}

export default Post;
