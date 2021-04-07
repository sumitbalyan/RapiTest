import axios from 'axios';

export const get = async url => {
  return axios.get(url).then(handleResponse);
};

export const handleResponse = response => {
  const data = response.data;
  if (response.status >= 200 && response.status <= 300) {
    return data;
  } else {
    const err = data;
    return Promise.reject(err);
  }
};
