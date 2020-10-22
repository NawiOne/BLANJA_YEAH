import {
  getByCategoryAction,
  getMoreCategoryAction,
  getCategoryNameAction,
  getNewProductAction,
  getMoreNewProductAction,
  getDetailProductAction,
  getPopularAction,
  addToBagAction,
  pluseQuantityAction,
  minusQuantityAction,
  checkAlredyExistAction,
  addToPaymentAction,
  checkedPaymentExistAction,
  cleanPaymentAction,
  searchAction,
  clearSearchAction,
  addDataTransaction,
  doTransAction,
  clearStatusAction,
  pending,
  rejected,
  fulfilled,
  uploadNewProduct,
  fetchSellerProduct,
} from "../action/actionType";

const initialState = {
  product: [],
  searchProduct: [],
  newProduct: [],
  popularProduct: [],
  detailProduct: [],
  categoryName: "",
  bagItem: [],
  paymentItem: [],
  dataToTransaction: [],
  bagAlreadyExist: false,
  paymentAlreadyExist: false,
  pageInfo: {},
  isPending: false,
  isRejected: false,
  isFulfilled: false,
  status: null,
  errorMsg: null,
  uploadSuccess:false,
  sellerProduct:null,
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
    case getMoreCategoryAction + pending:
      return {
        ...prevState,
        isPending: true,
        isFulfilled: false,
      };
    case getMoreCategoryAction + rejected:
      return {
        ...prevState,
        isRejected: true,
        isPending: false,
      };
    case getMoreCategoryAction + fulfilled:
      const newProductCat = prevState.product.concat(payload.data.data);

      return {
        ...prevState,
        isFulfilled: true,
        isPending: false,
        product: newProductCat,
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

      case getMoreNewProductAction + pending:
        return {
          ...prevState,
          isPending: true,
          isFulfilled: false,
        };
      case getMoreNewProductAction + rejected:
        return {
          ...prevState,
          isRejected: true,
          isPending: false,
        };
      case getMoreNewProductAction + fulfilled:
        const moreProduct = prevState.newProduct.concat(payload.data.data);
  
        return {
          ...prevState,
          isFulfilled: true,
          isPending: false,
          newProduct: moreProduct,
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
    case searchAction + pending:
      return {
        ...prevState,
        isPending: true,
        isFulfilled: false,
      };
    case searchAction + rejected:
      return {
        ...prevState,
        isRejected: true,
        isPending: false,
      };
    case searchAction + fulfilled:
      return {
        ...prevState,
        isFulfilled: true,
        isPending: false,
        searchProduct: payload.data.data,
      };
    case clearSearchAction:
      return {
        ...prevState,
        searchProduct: [],
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

      const deleteItemPayment = prevState.paymentItem.findIndex((el) => {
        return payload.id === el.id;
      });

      let newCartMin = [...prevState.bagItem];
      newCartMin[minQuantity] = {
        ...newCartMin[minQuantity],
        quantity: prevState.bagItem[minQuantity].quantity - 1,
      };
      if (newCartMin[minQuantity].quantity === 0) {
        prevState.bagItem.splice(minQuantity, 1);
        prevState.paymentItem.splice(deleteItemPayment, 1);

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
    case addToPaymentAction:
      const index = prevState.paymentItem.findIndex((el) => {
        return payload.id === el.id;
      });
      if (index >= 0) {
        prevState.paymentItem.splice(index, 1);
        return {
          ...prevState,
          paymentItem: prevState.paymentItem,
        };
      } else {
        return {
          ...prevState,
          paymentItem: prevState.paymentItem.concat(payload),
        };
      }
    case checkedPaymentExistAction:
      const checkPayment = prevState.paymentItem.findIndex((el) => {
        return payload.id === el.id;
      });

      if (checkPayment >= 0) {
        return {
          ...prevState,
          paymentAlreadyExist: true,
        };
      } else {
        return {
          ...prevState,
          paymentAlreadyExist: false,
        };
      }
    case cleanPaymentAction:
      return {
        ...prevState,
        paymentItem: [],
        dataToTransaction: [],
      };
    // transaction
    case addDataTransaction:
      const idx = prevState.dataToTransaction.findIndex((el) => {
        return payload.product_id === el.product_id;
      });
      if (idx >= 0) {
        prevState.dataToTransaction.splice(idx, 1);
        return {
          ...prevState,
          dataToTransaction: prevState.dataToTransaction,
        };
      } else {
        return {
          ...prevState,
          dataToTransaction: prevState.dataToTransaction.concat(payload),
        };
      }
    case doTransAction + pending:
      return {
        ...prevState,
        isPending: true,
        isFulfilled: false,
      };
    case doTransAction + rejected:
      return {
        ...prevState,
        isRejected: true,
        isPending: false,
      };
    case doTransAction + fulfilled:
      return {
        ...prevState,
        isFulfilled: true,
        isPending: false,
        status: payload.data.status,
      };
    case clearStatusAction:
      return {
        ...prevState,
        status: null,
        dataToTransaction: [],
      };

    // Upload Product

    case uploadNewProduct + pending:
      return {
        ...prevState,
        isPending: true,
        isFulfilled: false,
      }
    case uploadNewProduct + rejected:
      return {
        ...prevState,
        isRejected: true,
        isPending: false,
      };
    case uploadNewProduct + fulfilled:
      let success=null
      if(payload.data.success){
        success=true
      }else{
        success=false
      }
      return {
        ...prevState,
        isFulfilled: true,
        isPending: false,
        isRejected:false,
        uploadSuccess:success,
      }
    case fetchSellerProduct + pending:
      return {
        ...prevState,
        isPending: true,
        isFulfilled: false,
      }
    case fetchSellerProduct + rejected:
      return {
        ...prevState,
        isRejected: true,
        isPending: false,
      };
    case fetchSellerProduct + fulfilled:
      return {
        ...prevState,
        isFulfilled: true,
        isPending: false,
        isRejected:false,
        sellerProduct:payload.data.data,
      }
    default:
      return prevState;
  }
};
export default product;
