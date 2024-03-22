import { v4 as uuid } from "uuid";

class Post {
    constructor(title, body, tags = []) {
        this.id = uuid();
        this.title = title;
        this.body = body;
        this.tags = tags;
        this.postedAt = new Date().toISOString();
    }
}

export default Post;