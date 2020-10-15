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
