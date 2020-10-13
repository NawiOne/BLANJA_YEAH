import {authLogin, authRegister} from '../../utils/http';
import actionType from './actionTypeAuth';

export const authLoginCreator = (email, password) => {
  return {
    type: actionType.authLogin,
    payload: authLogin(email, password),
  };
};

export const authRegisterCreator = (data) => {
  return {
    type: actionType.authRegister,
    payload: authRegister(data),
  };
};


