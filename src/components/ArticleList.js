import React from "react";
import Article from "./../components/Article"
import Blogdata from "../data/blog"

function ArticleList(){
    const all = Blogdata.posts.map((arr) => {
        return(
            <Article
            key={arr.id}
            title={arr.title}
            date={arr.date}
            preview={arr.preview}
            />
        );
    });
    return(
        <main>
            {all}
        </main>
    )
}
export default ArticleList;