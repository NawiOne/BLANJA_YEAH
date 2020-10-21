import Axios from "axios";

export const getByCategory = (category) => {
  return Axios.get(
    `http://localhost:8000/product/category?category=${category}&page=1&limit=10`,
  );
};
export const getMoreProduct = (category,page) => {
    return Axios.get(`http://localhost:8000/product/category?category=${category}&page=${page}&limit=10`)
}

export const getNewProduct = () => {
  return Axios.get("http://localhost:8000/product/new?page=1&limit=6");
};

export const getMoreNewProduct = (page) => {
    return Axios.get(`http://localhost:8000/product/new?page=${page}&limit=6`)
}

export const getProductDetail = (id) => {
  return Axios.get(`http://localhost:8000/product/detail?id=${id}`);
};
export const getPopular = () => {
  return Axios.get("http://localhost:8000/product/popular?page=1&limit=100");
};

export const searchProduct = (name) => {
  return Axios.get(`http://localhost:8000/product?search=${name}&filter=asc`);
};

export const doTransaction = (
  invoice,
  seller_id,
  customer_id,
  address,
  amount,
  payment,
  product,
) => {
    const data = {
        id: invoice,
        seller_id: seller_id,
        customer_id: customer_id,
        address: address,
        amount: amount,
        payment: payment,
        product: product,
    }
    return Axios.post('http://localhost:8000/transaction', data)
};

export const addNewAddress = (user_id, save_address, receipt_name, telephone_number, address, postal_code, city_or_subdistric) => {
    return Axios.post('http://localhost:8000/addAddress', {user_id:user_id, save_address:save_address, receipt_name:receipt_name, telephone_number:telephone_number, address:address, postal_code:postal_code, city_or_subdistric:city_or_subdistric })
}

export const getAddress = (id) => {
    return Axios.get(`http://localhost:8000/Address?user_id=${id}`)
}


export const getHistorySeller = (id) => {
    return Axios.get(`http://localhost:8000/history/seller?id=${id}`)
}

export const getHistoryCustomer = (id) => {
    return Axios.get(`http://localhost:8000/history/customer?id=${id}`)
}

export const uploadProduct = (seller_id,name_product,price,stock,product_condition,description,image1,image2,image3,image4,image5)=>{
  let formData = new FormData();
  formData.append('seller_id',seller_id);
  formData.append('name_product',name_product);
  formData.append('price',price);
  formData.append('stock',stock);
  formData.append('product_condition',product_condition);
  formData.append('description',description);
  formData.append('image',image1);
  formData.append('image',image2);
  formData.append('image',image3);
  formData.append('image',image4);
  formData.append('image',image5);
  
  const configHeader = {
    headers: {
      'content-type': 'multipart/form-data',
      contentType: false,
      mimeType: 'multipart/form-data',
      'cache-control': 'no-cache',
      accept: 'application/json',
    },
  };

  return Axios.post('http://localhost:8000/product',formData,configHeader);

}

