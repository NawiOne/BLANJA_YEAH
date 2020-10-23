import Axios from 'axios';

const linkApi = `http://3.87.168.244:8000/`;

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

export const urlImage = 'http://3.87.168.244:8000/images/';

export const editCustummer = (id_user,phone_number,email,username,gender_id,date_of_birth,image)=>{
  let formData = new FormData();
  formData.append('id_user',id_user);
  formData.append('phone_number',phone_number);
  formData.append('email',email);
  formData.append('username',username);
  formData.append('gender_id',gender_id);
  formData.append('date_of_birth',date_of_birth);
  formData.append('image',image);
  
  const configHeader = {
    headers: {
      'content-type': 'multipart/form-data',
      contentType: false,
      mimeType: 'multipart/form-data',
      'cache-control': 'no-cache',
      accept: 'application/json',
    },
  };

  const URI =`${linkApi}user`;
  return Axios.patch(URI,formData,configHeader);

}

export const editSeller =(id_user,phone_number,email,username,image,desc_store)=>{
  let formData = new FormData();
  formData.append('id_user',id_user);
  formData.append('phone_number',phone_number);
  formData.append('email',email);
  formData.append('username',username);
  formData.append('image',image);
  formData.append('desc_store',desc_store);
  
  const configHeader = {
    headers: {
      'content-type': 'multipart/form-data',
      contentType: false,
      mimeType: 'multipart/form-data',
      'cache-control': 'no-cache',
      accept: 'application/json',
    },
  };

  const URI =`${linkApi}user`;
  return Axios.patch(URI,formData,configHeader);
}
