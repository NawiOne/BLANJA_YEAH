import {getUser,editCustummer,editSeller} from '../../utils/http';
import * as actions from '../action/actionType';

export const getUserCreator = (id)=>{
  return{
    type:actions.fetchUser,
    payload:getUser(id)
  }
}

export const updateCustommerCreator =(id_user,phone_number,email,username,gender_id,date_of_birth,image)=>{
  return {
    type:actions.updateCustommer,
    payload:editCustummer(id_user,phone_number,email,username,gender_id,date_of_birth,image),
  }
}

export const updateSellerCreator =(id_user,phone_number,email,username,image,desc_store)=>{
  return {
    type :actions.updateSeller,
    payload:editSeller(id_user,phone_number,email,username,image,desc_store)
  }
}