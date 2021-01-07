import React from "react";
import './NotesItem.css'

const NotesItem = ({ title, content, onItemClicked }) => {
  return (
    <div className="notes-item-container" role="button" onClick={onItemClicked}>
      <h2>Your new Post:</h2>
      <h3>Title: {title}</h3>
      <p>{content}</p>
    </div>
  );
};

export default NotesItem;
