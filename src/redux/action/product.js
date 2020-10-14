import {
  getByCategory,
  getNewProduct,
  getProductDetail,
  getPopular,
} from "../../utils/API";
import {
  getByCategoryAction,
  getCategoryNameAction,
  getNewProductAction,
  getDetailProductAction,
  getPopularAction,
  DeleteBagItemAction,
  addToBagAction,
  pluseQuantityAction,
  minusQuantityAction,
  checkAlredyExistAction,
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
export const addToBagCreator = (id, image, name, brand, price) => {
  return {
    type: addToBagAction,
    payload: {
      id: id,
      image: image,
      name_product: name,
      brand: brand,
      price: price,
      quantity: 1,
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
