import {
  getByCategory,
  getNewProduct,
  getProductDetail,
  getPopular,
  searchProduct,
  doTransaction,
} from "../../utils/API";
import {
  getByCategoryAction,
  getCategoryNameAction,
  getNewProductAction,
  getDetailProductAction,
  getPopularAction,
  searchAction,
  DeleteBagItemAction,
  addToBagAction,
  pluseQuantityAction,
  minusQuantityAction,
  checkAlredyExistAction,
  addToPaymentAction,
  checkedPaymentExistAction,
  cleanPaymentAction,
  clearSearchAction,
  addDataTransaction,
  doTransAction,
  clearStatusAction,
} from "./actionType";

export const getByCategoryCreator = (category) => {
  return {
    type: getByCategoryAction,
    payload: getByCategory(category),
  };
};

export const getCategoryNameCreator = (nameCategory) => {
  return {
    type: getCategoryNameAction,
    payload: {
      categoryName: nameCategory,
    },
  };
};

export const getNewProductCreator = () => {
  return {
    type: getNewProductAction,
    payload: getNewProduct(),
  };
};

export const getDetailCreator = (id) => {
  return {
    type: getDetailProductAction,
    payload: getProductDetail(id),
  };
};
export const getPopularCreator = () => {
  return {
    type: getPopularAction,
    payload: getPopular(),
  };
};
export const addToBagCreator = (
  id,
  image,
  name,
  brand,
  price,
  qty,
  size,
  color,
  seller_id,
) => {
  return {
    type: addToBagAction,
    payload: {
      id: id,
      image: image,
      name_product: name,
      brand: brand,
      price: price,
      quantity: qty,
      size: size,
      color: color,
      seller_id: seller_id,
    },
  };
};
export const addQtyCreator = (id) => {
  return {
    type: pluseQuantityAction,
    payload: {
      id: id,
    },
  };
};
export const minusQtyCreator = (id) => {
  return {
    type: minusQuantityAction,
    payload: {
      id: id,
    },
  };
};
export const checkAlreadyCreator = (id) => {
  return {
    type: checkAlredyExistAction,
    payload: {
      id: id,
    },
  };
};

export const addToPaymentCreator = (
  id,
  image,
  name,
  brand,
  price,
  amount,
  quantity,
  size,
  color,
  seller_id,
) => {
  return {
    type: addToPaymentAction,
    payload: {
      id: id,
      image: image,
      name_product: name,
      brand: brand,
      price: price,
      amount: amount,
      quantity: quantity,
      size: size,
      color: color,
      seller_id: seller_id,
    },
  };
};
export const checkedPaymentExistCreator = (id) => {
  return {
    type: checkedPaymentExistAction,
    payload: {
      id: id,
    },
  };
};
export const cleanPaymentCreator = () => {
  return {
    type: cleanPaymentAction,
  };
};
export const searchCreator = (name) => {
  return {
    type: searchAction,
    payload: searchProduct(name),
  };
};
export const clearSearchCreator = () => {
  return {
    type: clearSearchAction,
  };
};

export const addDataTransCreator = (id, color, size, qty) => {
  return {
    type: addDataTransaction,
    payload: {
      product_id: id,
      color: color,
      size: size,
      qty: qty,
    },
  };
};
export const doTransCreator = (
  invoice,
  seller_id,
  customer_id,
  address,
  amount,
  payment,
  product,
) => {
  return {
    type: doTransAction,
    payload: doTransaction(
      invoice,
      seller_id,
      customer_id,
      address,
      amount,
      payment,
      product,
    ),
  };
};

export const clearStatusCreator = () => {
  return{
    type: clearStatusAction,
  }
}
