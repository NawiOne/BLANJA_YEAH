import actionType from '../action/actionTypeAuth';

const initialState = {
  data: [],
  isLogin: false,
  msgInvalid: '',
  isPending: false,
  isFulfilled: false,
  isRejected: false,
};

const auth = (state = initialState, { type, payload }) => {
  switch (type) {
    case actionType.authLogin + '_PENDING':
      return {
        ...state,
        isPending: true,
      };
    case actionType.authLogin + '_REJECTED':
      return {
        ...state,
        isRejected: true,
        isPending: false,
      };
    case actionType.authLogin + '_FULFILLED':
       
      if(payload.data.success){
          return {
              ...state,
              data: payload.data.data,
              msgInvalid: '',
              isLogin: true
            };
      }else{
          return {
              ...state,
              data: [],
              msgInvalid: payload.data.error.msg,
              isLogin: false
            };
      }
    case actionType.authRegister + '_PENDING':
        return {
          ...state,
          isPending: true,
        };
      case actionType.authRegister + '_REJECTED':
        return {
          ...state,
          isRejected: true,
          isPending: false,
        };
      case actionType.authRegister + '_FULFILLED':
        return {
            ...state,
            data: payload.data.data,
            msgInvalid: '',
            isLogin: true,
            isFulfilled:true,
          };
      case actionType.authLogOut:
        return {
          ...state,
          data: [],
          isLogin: false,
          msgInvalid: '',
          isPending: false,
          isFulfilled: false,
          isRejected: false,
        };
      default:
        return state;
  }
};

export default auth;
