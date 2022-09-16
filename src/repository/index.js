import axios from 'axios';
let axiosInstance;

const baseURL = `http://${process.env.NEXT_PUBLIC_IP}:3000/api`;
// const baseURL = `http://localhost:3000/api`;

class Repository {
  constructor() {
    this.instance = axios.create({
      baseURL,
      // headers: {
      //   'Access-Control-Allow-Origin': '*',
      //   'Access-Control-Allow-Methods': 'GET,PUT,POST,DELETE,PATCH,OPTIONS',
      // },
    });
}
};

if (!axiosInstance) {
  axiosInstance = new Repository().instance;
}

export async function postSignin(data) {
  return await axiosInstance.post('/auth', data);
};

export async function postResult(data, role, cookie) {
  const options = {
    headers: { cookie },
  };
  return await axiosInstance.post(`/result/${role}`, data, options);
};

export async function getTokens(cookie) {
  const options = {
    headers: { cookie },
  };
  return await axiosInstance.get('/auth/tokens', options);
};

export async function resetTokens(cookie) {
  const options = {
    headers: { cookie },
  };
  return await axiosInstance.get('/auth/tokens/reset', options);
};

export async function removeTurn(cookie, type) {
  const options = {
    headers: { cookie },
  };
  return await axiosInstance.delete(`/result/${type}`, options);
}