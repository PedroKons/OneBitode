class Comment {
    constructor(usarname, content) {
        this.usarname = usarname;
        this.content = content;
        this.createdAt = new Date();
    }
}

module.exports = Comment;