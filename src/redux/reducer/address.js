import * as actions from '../action/actionType';

const initialState = {
  address:null,
  isPending:false,
  isFulfilled: false,
  isRejected: false,
};

const addressReducers = (state=initialState,action)=>{
  switch(action.type){
    case actions.addAddressAction + actions.pending:
      return {
      ...state,
      isPending:true,
      };
		case actions.addAddressAction + actions.rejected:
      return {
      ...state,
      isRejected:true,
      isPending:false,
      address: action.payload,
      };
		case actions.addAddressAction + actions.fulfilled:
      return {
        ...state,
        isFulfilled: true,
        isPending: false,
        address: action.payload.data.data,
        isRejected: false,
      };
      case actions.getAddressAction + actions.pending:
      return {
      ...state,
      isPending:true,
      };
		case actions.getAddressAction + actions.rejected:
      return {
      ...state,
      isRejected:true,
      isPending:false,
      address: action.payload,
      };
		case actions.getAddressAction + actions.fulfilled:
      return {
        ...state,
        isFulfilled: true,
        isPending: false,
        address: action.payload.data.data,
        isRejected: false,
      };
    default:
      return state;
  }
}

export default addressReducers;


