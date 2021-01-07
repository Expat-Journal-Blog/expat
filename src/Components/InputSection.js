import React from "react";
import { useDispatch, useSelector } from "react-redux";
import postsAction from "../redux/action/postsAction";
import inputAction from "../redux/action/inputAction";
import NotesSection from "./NotesSection";
import "./InputSection.css";

const InputSection = () => {
  const id = useSelector((state) => state.inputs.id);
  const title = useSelector((state) => state.inputs.title);
  const content = useSelector((state) => state.inputs.content);
  const dispatch = useDispatch();

  const addPost = () => {
    if (title && content) {
      dispatch(
        postsAction.addPost({
          title,
          content,
        })
      );
      dispatch(inputAction.resetInputs());
    }
  };

  const updatePost = () => {
    if (title && content) {
      dispatch(
        postsAction.updatePost(id, {
          title,
          content,
        })
      );
      dispatch(inputAction.resetInputs());
    }
  };

  const deletePost = () => {
    dispatch(postsAction.deletePost(id));
    dispatch(inputAction.resetInputs());
  };

  return (
    <div className="input-section__container">
      <input
        className="input-section"
        type="text"
        placeholder="Post title"
        value={title}
        onChange={(e) => dispatch(inputAction.setInputTitle(e.target.value))}
      />
      <textarea
        className="input-section"
        placeholder="Post content"
        value={content}
        onChange={(e) => dispatch(inputAction.setInputContent(e.target.value))}
      ></textarea>
      <div className="input-section__container__btnwrapper">
        <button className="input-btn" onClick={id === -1 ? addPost : updatePost}>
          {id === -1 ? "ADD POST" : "UPDATE POST"}
        </button>
        {id !== -1 && (
          <button
            className="input-btn"
            onClick={deletePost}
            style={{ margin: "1rem", backgroundColor: "#7C6249" }}
          >
            Delete Note
          </button>
        )}
        <NotesSection />
      </div>
    </div>
  );
};

export default InputSection;
