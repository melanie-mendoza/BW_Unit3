// no need to import React since we're not dealing with react here.
import axios from 'axios';

// helper function to conditionally remove the login link when you're already logged in; & remove profile link when already in profile:
export function getToken() {
    return localStorage.getItem('token')
}

export default function() {
    return axios.create({
        baseURL: 'https://water-my-plants2020.herokuapp.com/api',
        headers: {
            Authorization: getToken(),
        },
    })
}