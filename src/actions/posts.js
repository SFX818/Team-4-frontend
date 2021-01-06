import { FETCH_ALL, FETCH_ONE, CREATE, UPDATE, DELETE, LIKE } from '../components/common/ActionTypes';

import * as api from '../api/index.js';

// using dispatch/redux-thunk to have async-await properties for the actions 
// get the response from the API and destructure the data (post)
export const findAll = () => async (dispatch) => {

};

export const findOne = () => async (dispatch) => {

};

export const createPost = (post) => async (dispatch) => {

};

export const updatePost = (id, post) => async (dispatch) => {

};

export const likePost = (id) => async (dispatch) => {

};

export const deletePost = (id) => async (dispatch) => {

}; 