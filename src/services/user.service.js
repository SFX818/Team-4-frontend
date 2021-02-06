import axios from 'axios'
import authHeader from '../utilities/authHeader.utilities'

//Helper function to get access token for header
const API_URL = process.env.NODE_ENV === 'development' ? process.env.REACT_APP_DEV_URL_USER : process.env.REACT_APP_PRO_URL_USER;

/*
GET |  /api/test/all  | retrieve public content
GET | /api/test/user  | access User's content
GET | /api/test/admin | access Admin's content
*/

//retrieve public content
export const getPublicContent = () => {
    return axios.get(API_URL + 'all')
}

//access User's content
export const getUserBoard = () => {
    return axios.get(API_URL + 'user', {header: authHeader()})
}

//access Admin content
export const getAdminBoard = () => {
    return axios.get(API_URL + 'admin', {header: authHeader()})
}