import axios from 'axios';

export const authInstance = axios.create({
  baseURL: 'https://connections-api.herokuapp.com/',
});

export const signup = data => {
  console.log(data);
  return instance.post('/users/signup', data);
};
