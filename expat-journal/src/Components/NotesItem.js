
import React from 'react';
// import './NotesItem.css';

const NotesItem = ({ title, content, onItemClicked }) => {
    return (
        <div
        className="notes-item-container"
        role="button"
        onClick={onItemClicked}
        >
            <h1>Your new Post:</h1>
            <h3>Title: {title}</h3>
            <p>{content}</p>
        </div>
    );
};

export default NotesItem;