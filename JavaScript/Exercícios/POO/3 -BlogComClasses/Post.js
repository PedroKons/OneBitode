const Comment = require("./comment");

class Post{
    constructor(title, body, author) {
        this.title = title;
        this.body = body;
        this.author = author;
        this.comments = [];
        this.createdAt = new Date();
    }

    addComment(usarname, content) {
        this.comments.push(new Comment(usarname, content))
    }
}

module.exports = Post;