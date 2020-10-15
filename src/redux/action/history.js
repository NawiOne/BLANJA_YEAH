import {getHistorySeller, getHistoryCustomer} from '../../utils/API';
import {getHistorySellerAction, getHistoryCustomerAction} from './actionType';


export const getHistorySellerCreator = (id) => {
  return {
    type: getHistorySellerAction,
    payload: getHistorySeller(id)
  };
};

export const getHistoryCustomerCreator = (id) => {
    return {
      type: getHistoryCustomerAction,
      payload: getHistoryCustomer(id)
    };
  };




