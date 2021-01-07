import axios from 'axios';

const url = 'http://localhost:8080/home';
const urlUser = 'http://localhost:8080/profile';
const urlBoth = `${url}` && `${urlUser}`

// follow up with instructors if we can pass an array like this 
export const findAll = () => axios.get(url);
export const findOne = (postId) => axios.get([`${urlBoth}/${postId}`]);
export const createPost = (newPost) => axios.post([`${urlUser}/upload`], newPost);
export const likePost = (postId) => axios.put([`${urlBoth}/${postId}/likePost`]);
export const updatePost = (postId, updatedPost) => axios.put(`${urlUser}/${postId}`, updatedPost);
export const deletePost = (postId) => axios.delete(`${urlUser}/${postId}`);