import axios from 'axios';

const baseURL = 'http://127.0.0.1:5000/api/v1';

const config = {
  headers: {
    'content-type': 'application/json',
    accept: 'application/json',
    Authorization: localStorage.getItem('token'),
  },
};

export const auth = (username, password) => (
  axios.post(`${baseURL}/auth`, { username, password }, config)
    .then(({ data }) => data)
);

export const currentUser = () => (
  axios.get(`${baseURL}/auth`, config).then(({ data }) => data)
);


export const createUser = ({ username, password }) => (
  axios.post(`${baseURL}/user`, { username, password }, config)
    .then(({ data }) => data)
);


// const header = {
//   'content-type': 'application/json',
//   accept: 'application/json',
//   Authorization: localStorage.getItem('token'),
// };

// export const auth = (username, password) => (
//   fetch(`${baseURL}/auth`, {
//     method: 'post',
//     headers: headers(),
//     body: JSON.stringify({ username, password }),
//   }).then(response => response.json())
//
// );

// export const currentUser = () => {
//   return fetch(`${baseURL}/auth`, {
//     headers: header,
//   }).then(response => {debugger});
// };

// export const createUser = ({ username, password }) => (
//   fetch(`${baseURL}/user`, {
//     method: 'post',
//     headers: headers(),
//     body: JSON.stringify({ username, password }),
//   }).then(response => response.json())
// );
