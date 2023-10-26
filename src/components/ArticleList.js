import React from "react";
import Article from "./Article"
import Blogdata from "../data/blog"//data will fetch from here and we will use it our component

function ArticleList(){
    const all = Blogdata.posts.map((arr) =>{

    console.log(Blogdata)
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