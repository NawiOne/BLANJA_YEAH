import Axios from "axios";

export const getByCategory = (category) => {
  return Axios.get(
    `http://localhost:8000/product/category?category=${category}`,
  );
};

export const getNewProduct = () => {
  return Axios.get("http://localhost:8000/product/new?page=1&limit=100");
};
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

