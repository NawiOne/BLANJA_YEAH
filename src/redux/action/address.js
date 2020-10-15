import {addNewAddress, getAddress} from '../../utils/API';
import {addAddressAction, getAddressAction} from './actionType';

export const addAddressCreator = (user_id, save_address, receipt_name, telephone_number, address, postal_code, city_or_subdistric ) => {
  return {
    type: addAddressAction,
    payload: addNewAddress(user_id, save_address, receipt_name, telephone_number, address, postal_code, city_or_subdistric )
  };
};

export const getAddressCreator = (id) => {
  return {
    type: getAddressAction,
    payload: getAddress(id)
  };
};




