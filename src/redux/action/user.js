import {getUser} from '../../utils/http';
import * as actions from '../action/actionType';

export const getUserCreator = (id)=>{
  return{
    type:actions.fetchUser,
    payload:getUser(id)
  }
}