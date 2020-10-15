import * as actions from '../action/actionType';

const initialState = {
  historySeller:null,
  historyCustomer:null,
  isPending:false,
  isFulfilled: false,
  isRejected: false,
};

const historyReducers = (state=initialState,action)=>{
  switch(action.type){
    case actions.getHistorySellerAction + actions.pending:
      return {
      ...state,
      isPending:true,
      };
		case actions.getHistorySellerAction + actions.rejected:
      return {
      ...state,
      isRejected:true,
      isPending:false,
      historySeller: action.payload,
      };
		case actions.getHistorySellerAction + actions.fulfilled:
      return {
        ...state,
        isFulfilled: true,
        isPending: false,
        historySeller: action.payload.data.data,
        isRejected: false,
      };
      case actions.getHistoryCustomerAction + actions.pending:
      return {
      ...state,
      isPending:true,
      };
		case actions.getHistoryCustomerAction + actions.rejected:
      return {
      ...state,
      isRejected:true,
      isPending:false,
      historyCustomer: action.payload,
      };
		case actions.getHistoryCustomerAction + actions.fulfilled:
      return {
        ...state,
        isFulfilled: true,
        isPending: false,
        historyCustomer: action.payload.data.data,
        isRejected: false,
      };
    default:
      return state;
  }
}

export default historyReducers;


