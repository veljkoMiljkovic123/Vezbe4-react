import axios from "axios"
class ProductService{
    static getAllProduct = () => axios.get('https://dummyjson.com/products')
}

export default ProductService 