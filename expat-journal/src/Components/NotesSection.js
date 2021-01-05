
import React from "react";
import { useSelector, useDispatch } from "react-redux";
import NotesItem from "./NotesItem";
import inputAction from "../redux/action/inputAction";


const NotesSection = () => {
  const dispatch = useDispatch();
  const posts = useSelector((state) => state.posts.posts);

  const onItemClicked = (item, index) => {
    dispatch(inputAction.setInputId(index));
    dispatch(inputAction.setInputTitle(item.title));
    dispatch(inputAction.setInputContent(item.content));
  };

  if (posts.length === 0) {
    return (
      <div>
        <p style={{fontFamily: "Xanh Mono", fontSize: "2rem", color: "#7AA587",textDecoration: "underline"}}>You have no current posts. Go add some!</p>
      </div>
    );
  }

  return (
    <div
      style={{
        display: "flex",
        backgroundColor: "#5B6C5D",
        fontFamily: "Xanh Mono",
        justifyContent: "space-around",
        border: "6px dotted black",
        fontSize: "1.5rem",
      }}
    >
      {posts.map((item, index) => {
        if (item) {
          return (
            <NotesItem
              title={item.title}
              content={item.content}
              onItemClicked={() => {
                onItemClicked(item, index);
              }}
            />
          );
        }
        return null;
      })}
    </div>
  );
};

export default NotesSection;
