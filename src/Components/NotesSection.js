import React from "react";
import { useSelector, useDispatch } from "react-redux";
import NotesItem from "./NotesItem";
import inputAction from "../redux/action/inputAction";
import "./NotesSection.css";

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
      <div className=".notes-section__container__empty">
        <p className="static-note">You have no current posts. Go add some!</p>
      </div>
    );
  }
  return (
    <div className="notes-section__container">
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
