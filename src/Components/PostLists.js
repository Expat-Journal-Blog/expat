import React, { useState, useEffect } from "react";
import { axiosWithAuth } from "../utils/axiosWithAuth";
import "../Posts.css";

const PostList = () => {
  const [articles, setArticles] = useState([]);

  useEffect(() => {
    axiosWithAuth()
      .get("/posts/posts")
      .then((res) => {
        setArticles(...articles, res.data);
        console.log(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
      // eslint-disable-next-line
  }, []);

  return (
    <div>
      <div className="article-list">
        {articles.map((article) => {
          return (
            <div key={article.postid}>
              <h1>{article.title}</h1>
              <p>{article.body}</p>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default PostList;
