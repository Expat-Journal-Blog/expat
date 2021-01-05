
// just making sure the components work!

import React, { useState, useEffect } from 'react'
import axios from 'axios'
// import './PostList.css'
// import expat1 from '../svg/expat1.jpg'
// import expat2 from '../svg/expat2.jpg'
// import expat3 from '../svg/expat3.jpg'


const PostList = () => {

    const [articles, setArticles] = useState([]);

    useEffect(() => {
        axios.get("https://baconipsum.com/api/?type=meat-and-filler")
        .then((response) => {
            console.log(response)
            setArticles(response.data)
        })
        .catch((error) => {
            console.log(error)
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