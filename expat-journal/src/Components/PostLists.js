
// just making sure the components work!

import React, { useState, useEffect } from 'react'
import axios from 'axios'
import "../Posts.css"


const PostList = () => {

    const [articles, setArticles] = useState([]);

    useEffect(() => {
        axios.get("https://baconipsum.com/api/?type=meat-and-filler")
        .then((res) => {
            console.log(res)
            setArticles(res.data)
        })
        .catch((error) => {
            console.log("Error",error)
        })
    }, []);


    return (
        <div className="article-list">
            <h1>Current Posts: </h1>
            
           <h3>Traveling in a different country</h3><p>{articles[0]}</p>
           <h3>Planning my adventure</h3><p>{articles[1]}</p>
           <h3>Siteseeing</h3><p>{articles[2]}</p>
           
        </div>
    )
}

export default PostList