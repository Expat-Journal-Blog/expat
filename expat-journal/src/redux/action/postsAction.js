import actionTypes from '../actionTypes';
// eslint-disable-next-line
export default {
    addPost: (post) => ({
        type: actionTypes.ADD_POST,
        post,
    }),
    updatePost: (index, post) => ({
        type: actionTypes.UPDATE_POST,
        index,
        post,
    }),
    deletePost: (index) => ({
        type: actionTypes.DELETE_POST,
        index,
    }),
};
