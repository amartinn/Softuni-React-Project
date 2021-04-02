const SERVER_URL = 'http://localhost:42532'

export const ADD_TO_FAVORITES = `${SERVER_URL}/movies/add`
export const REMOVE_FROM_FAVORITES = `${SERVER_URL}/movies/remove`
export const GET_FAVORITE_MOVIES = `${SERVER_URL}/movies/all`

export const CREATE_COMMENT = `${SERVER_URL}/comments/add`
export const UPDATE_COMMENT = `${SERVER_URL}/comments/update`
export const GET_COMMENTS = `${SERVER_URL}/comments`

export const CREATE_RATING = `${SERVER_URL}/ratings/add`
export const UPDATE_RATING = `${SERVER_URL}/ratings/update`
export const GET_RATINGS = `${SERVER_URL}/ratings`

export const REGISTER_USER = `${SERVER_URL}/identity/register`
export const LOGIN_USER = `${SERVER_URL}/identity/login`
export const GET_USER_DATA = `${SERVER_URL}/identity`
