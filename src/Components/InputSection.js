import React from "react";
import { useDispatch, useSelector } from "react-redux";
import postsAction from "../redux/action/postsAction";
import inputAction from "../redux/action/inputAction";
import { Button } from "@material-ui/core";


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
    <form >
      <div className="Inputs" >
        <input
          inputprops={{ "aria-label": "description" }}
          style={{ margin: "3rem", width: "10rem", border: "6px solid #5B6C5D" }}
          type="text"
          placeholder="Post title, date"
          value={title}
          onChange={(e) => dispatch(inputAction.setInputTitle(e.target.value))}
        />
        <textarea
          id="filled-secondary"
          placeholder="Post Content:"
          variant="filled"
          color="secondary"
          margin="normal"
          style={{border: "6px solid #5B6C5D"}}
          value={content}
          onChange={(e) =>
            dispatch(inputAction.setInputContent(e.target.value))
          }
        ></textarea>
        <div>
          <Button
            color="primary"
            variant="contained"
            style={{margin: "3rem"}}
            onClick={id === -1 ? addPost : updatePost}
          >
            {id === -1 ? "ADD POST" : "UPDATE POST"}
          </Button>
          {id !== -1 && (
            <Button 
            onClick={deletePost} 
            color="primary" 
            variant="contained"
            
            >
              Delete Post
            </Button>
          )}
        </div>
      </div>
    </form>
  );
};

export default InputSection;