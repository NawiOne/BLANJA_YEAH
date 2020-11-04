import Axios from "axios";
import {toast,Bounce} from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export const getByCategory = (category) => {
  return Axios.get(
    `${process.env.REACT_APP_URL}product/category?category=${category}&page=1&limit=7`,
  );
};
export const getMoreProduct = (category,page) => {
    return Axios.get(`${process.env.REACT_APP_URL}product/category?category=${category}&page=${page}&limit=7`)
}

export const getNewProduct = () => {
  return Axios.get(`${process.env.REACT_APP_URL}http://3.87.168.244:8000/product/new?page=1&limit=20`);
};

export const getMoreNewProduct = (page) => {
    return Axios.get(`${process.env.REACT_APP_URL}product/new?page=${page}&limit=6`)
}

export const getProductDetail = (id) => {
  return Axios.get(`${process.env.REACT_APP_URL}product/detail?id=${id}`);
};
export const getPopular = () => {
  return Axios.get(`${process.env.REACT_APP_URL}product/popular?page=1&limit=20`);
};


export const searchProduct = (name, filter) => {
  return Axios.get(`${process.env.REACT_APP_URL}product?search=${name}&filter=${filter}&page=1&limit=15`);
};

export const searchMoreProduct = (name,filter, page) => {
  return Axios.get(`${process.env.REACT_APP_URL}product?search=${name}&filter=${filter}&page=${page}&limit=15`);
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
        invoice: invoice,
        seller_id: seller_id,
        customer_id: customer_id,
        address: address,
        amount: amount,
        payment: payment,
        product: product,
    }
    return Axios.post(`${process.env.REACT_APP_URL}transaction`, data)
};

export const addNewAddress = (user_id, save_address, receipt_name, telephone_number, address, postal_code, city_or_subdistric) => {
    return Axios.post(`${process.env.REACT_APP_URL}addAddress`, {user_id:user_id, save_address:save_address, receipt_name:receipt_name, telephone_number:telephone_number, address:address, postal_code:postal_code, city_or_subdistric:city_or_subdistric })
}

export const getAddress = (id) => {
    return Axios.get(`${process.env.REACT_APP_URL}Address?user_id=${id}`)
}


export const getHistorySeller = (id) => {
    return Axios.get(`${process.env.REACT_APP_URL}history/seller?id=${id}`)
}

export const getHistoryCustomer = (id) => {
    return Axios.get(`${process.env.REACT_APP_URL}history/customer?id=${id}`)
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

  return Axios.post(`${process.env.REACT_APP_URL}product`,formData,configHeader)
  .then(res=>{
    if(res.data.success){
      toast('Upload Product Success',{
        className:'upoloadSuccess',
        draggable:true,
        autoClose:false,
        transition:Bounce,
      })
    }
    else{
      toast('Upload Product Failed!, please fill in the form first',{
        className:'uploadFailed',
        draggable:true,
        autoClose:false,
        transition:Bounce,
      })
    }
  })
  .catch(err=>{
    toast.error('Network Error',{
      draggable:true,
      autoClose:false,
    })
  })
}

export const getSellerProduct =(seller_id,page,limit)=>{
  return Axios.get(`${process.env.REACT_APP_URL}product/seller?seller_id=${seller_id}&page=${page}&limit=${limit}`)
}

