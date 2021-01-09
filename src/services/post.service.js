import axios from 'axios';

const urlPost = 'http://localhost:8080/home/';

// follow up with instructors if we can pass an array like this 
export const findAll = () => axios.get(urlPost);
export const findOne = (postId) => axios.get(urlPost + `${postId}`);

// export const findOne = (postId) => axios.get([`${urlPost}/${postId}`]);
export const createPost = (newPost) => {
    console.log(newPost)
    return axios.post(urlPost + "upload", {
        newPost
    });
}
export const likePost = (postId) => axios.put([`${urlPost}/${postId}/likePost`]);
export const updatePost = (postId, updatedPost) => axios.put(`${urlPost}/${postId}`, updatedPost);
export const deletePost = (postId) => axios.delete(`${urlPost}/${postId}`);
