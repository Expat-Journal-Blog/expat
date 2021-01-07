
// just making sure the components work!

import React, { useState, useEffect } from 'react'
import { axiosWithAuth } from "../utils/axiosWithAuth"
import "../Posts.css"
import InputSection from "./InputSection";


const PostList = () => {

    const [articles, setArticles] = useState([]);

    useEffect(() => {
        axiosWithAuth().get("/posts/posts")
        .then(res => {
            setArticles(...articles, res.data)
            console.log(res.data);
        })
        .catch(err => {
            console.log(err);
        })
    }, []);




    return (
        <div className="article-list">
            <InputSection />
           {articles.map((article) => {
               return (
                   <div key={article.postid}>
                        <h1>{article.title}</h1>
                        <p>{article.body}</p>
                   </div>
               )
           })}
           
        </div>
    )
}

export default PostList