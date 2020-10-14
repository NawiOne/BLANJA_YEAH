import Axios from 'axios';

const linkApi = `http://localhost:8000/`;

export const authLogin = (email, password) => {
  const URI = `${linkApi}auth/login`;
  return Axios.post(URI, {email : email, password: password });
};

export const authRegister = (data) => {
    const URI = `${linkApi}auth/register`;
    return Axios.post(URI, data);
  };

export const getUser =(id)=>{
  const URI =`${linkApi}user/${id}`;
  return Axios.get(URI);
}

export const urlImage = 'http://localhost:8000/images/';