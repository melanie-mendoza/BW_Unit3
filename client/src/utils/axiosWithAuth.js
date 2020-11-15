import axios from 'axios';

const axiosWithAuth = () => {
  const token = localStorage.getItem('token');

  return axios.create({
    baseURL: 'https://water-my-plants2020.herokuapp.com/api/',
    headers: {
      Authorization: token
    }
  });
};

export default axiosWithAuth;