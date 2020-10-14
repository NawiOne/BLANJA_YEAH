import {
  getByCategoryAction,
  getCategoryNameAction,
  getNewProductAction,
  getDetailProductAction,
  getPopularAction,
  addToBagAction,
  pluseQuantityAction,
  minusQuantityAction,
  checkAlredyExistAction,
  pending,
  rejected,
  fulfilled,
} from "../action/actionType";

const initialState = {
  product: [],
  newProduct: [],
  popularProduct: [],
  detailProduct: [],
  categoryName: "",
  bagItem: [],
  bagAlreadyExist: false,
  pageInfo: {},
  isPending: false,
  isRejected: false,
  isFulfilled: false,
  status: null,
  errorMsg: null,
};

const product = (prevState = initialState, { type, payload }) => {
  switch (type) {
    case getByCategoryAction + pending:
      return {
        ...prevState,
        isPending: true,
        isFulfilled: false,
      };
    case getByCategoryAction + rejected:
      return {
        ...prevState,
        isRejected: true,
        isPending: false,
      };
    case getByCategoryAction + fulfilled:
      return {
        ...prevState,
        isFulfilled: true,
        isPending: false,
        product: payload.data.data,
      };
    case getCategoryNameAction:
      return {
        ...prevState,
        categoryName: payload.categoryName,
      };
    case getNewProductAction + pending:
      return {
        ...prevState,
        isPending: true,
        isFulfilled: false,
      };
    case getNewProductAction + rejected:
      return {
        ...prevState,
        isRejected: true,
        isPending: false,
        isFulfilled: false,
      };
    case getNewProductAction + fulfilled:
      return {
        ...prevState,
        isFulfilled: true,
        isPending: false,
        newProduct: payload.data.data,
      };
    case getDetailProductAction + pending:
      return {
        ...prevState,
        isPending: true,
        isFulfilled: false,
      };
    case getDetailProductAction + rejected:
      return {
        ...prevState,
        isRejected: true,
        isPending: false,
      };
    case getDetailProductAction + fulfilled:
      return {
        ...prevState,
        isFulfilled: true,
        isPending: false,
        detailProduct: payload.data.data,
      };
    case getPopularAction + pending:
      return {
        ...prevState,
        isPending: true,
        isFulfilled: false,
      };
    case getPopularAction + rejected:
      return {
        ...prevState,
        isRejected: true,
        isPending: false,
      };
    case getPopularAction + fulfilled:
      return {
        ...prevState,
        isFulfilled: true,
        isPending: false,
        popularProduct: payload.data.data,
      };

    // ADD BAG

    case addToBagAction:
      const newArr = prevState.bagItem.concat(payload);
      return {
        ...prevState,
        bagItem: newArr,
      };

    case pluseQuantityAction:
      const plusQuantity = prevState.bagItem.findIndex((el) => {
        return payload.id === el.id;
      });
      let newCartPlus = [...prevState.bagItem];
      newCartPlus[plusQuantity] = {
        ...newCartPlus[plusQuantity],
        quantity: prevState.bagItem[plusQuantity].quantity + 1,
      };
      return {
        ...prevState,
        bagItem: newCartPlus,
      };

    case minusQuantityAction:
      const minQuantity = prevState.bagItem.findIndex((el) => {
        return payload.id === el.id;
      });

      let newCartMin = [...prevState.bagItem];
      newCartMin[minQuantity] = {
        ...newCartMin[minQuantity],
        quantity: prevState.bagItem[minQuantity].quantity - 1,
      };
      if (newCartMin[minQuantity].quantity === 0) {
        prevState.bagItem.splice(minQuantity, 1);
        return {
          ...prevState,
          bagItem: prevState.bagItem,
        };
      } else {
        return {
          ...prevState,
          bagItem: newCartMin,
        };
      }
    case checkAlredyExistAction:
      const checkData = prevState.bagItem.findIndex((el) => {
        return payload.id === el.id;
      });

      if (checkData >= 0) {
        return {
          ...prevState,
          bagAlreadyExist: true,
        };
      } else {
        return {
          ...prevState,
          bagAlreadyExist: false,
        };
      }

    default:
      return prevState;
  }
};
export default product;
