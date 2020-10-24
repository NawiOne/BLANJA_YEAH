import {
  getByCategory,
  getMoreProduct,
  getNewProduct,
  getMoreNewProduct,
  getProductDetail,
  getPopular,
  searchProduct,
  searchMoreProduct,
  doTransaction,
  uploadProduct,
  getSellerProduct,
} from "../../utils/API";
import {
  getByCategoryAction,
  getMoreCategoryAction,
  getCategoryNameAction,
  getNewProductAction,
  getMoreNewProductAction,
  getDetailProductAction,
  getPopularAction,
  searchAction,
  searchMoreAction,
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
  uploadNewProduct,
  fetchSellerProduct,
  getSearchKey,
  resetToast,
} from "./actionType";

export const getByCategoryCreator = (category) => {
  return {
    type: getByCategoryAction,
    payload: getByCategory(category),
  };
};

export const getMoreCatCreator = (category, page) => {
  return {
    type: getMoreCategoryAction,
    payload: getMoreProduct(category, page),
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

export const getMoreNewProductCreator = (page) => {
  return {
    type: getMoreNewProductAction,
    payload: getMoreNewProduct(page)
  }
}

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

export const deleteBagItem = (id) => {
  return {
    type: DeleteBagItemAction,
    payload: {
      id: id,
    }
  }
}

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
export const searchCreator = (name, filter) => {
  return {
    type: searchAction,
    payload: searchProduct(name, filter),
  };
};
export const searchMoreCreator = (name,filter, page) => {
  return {
    type: searchMoreAction,
    payload: searchMoreProduct(name,filter, page),
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

export const uploadProductCreator = (seller_id,name_product,price,stock,product_condition,description,image1,image2,image3,image4,image5)=>{
  return {
    type:uploadNewProduct,
    payload:uploadProduct(seller_id,name_product,price,stock,product_condition,description,image1,image2,image3,image4,image5)
  }
}

export const getSellerProductCreator =(seller_id,page,limit)=>{
  return {
    type:fetchSellerProduct,
    payload:getSellerProduct(seller_id,page,limit)
  }
}

export const getSearchKeyCreator = (key, filter) => {
  return {
    type: getSearchKey,
    payload: {
      key: key,
      filter: filter
    }
  }
}

export const resetToastCreator = ()=>{
  return {
    type:resetToast
  }
}

