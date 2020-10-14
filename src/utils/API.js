import Axios from 'axios';

export const getByCategory = (category) => {
    return Axios.get(`http://localhost:8000/product/category?category=${category}`);
}

export const getNewProduct = () => {
    return Axios.get('http://localhost:8000/product/new?page=1&limit=100')
}
export const getProductDetail = (id) => {
    return Axios.get(`http://localhost:8000/product/detail?id=${id}`)
}
export const getPopular = () => {
    return Axios.get('http://localhost:8000/product/popular?page=1&limit=100')
}