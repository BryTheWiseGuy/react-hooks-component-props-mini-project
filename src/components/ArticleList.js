import React from "react";
import Article from "./Article.js"
import blogData from "../data/blog.js";

function ArticleList({ posts }) {
    const post = posts.map((post) => {
        return <Article key={post.id} title={post.title} date={post.date} preview={post.preview} minutes={post.minutes}/>
    })

    return <main>
        {post}
    </main>
}

export default ArticleList;