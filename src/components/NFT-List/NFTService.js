
import axios from 'axios';

export default class ProductService {

    getProductsSmall() {
        return axios.get('NFT.json').then(res => res.data.data);
    }

    getProducts() {
        return axios.get('NFT.json').then(res => res.data.data);
    }

    getProductsWithOrdersSmall() {
        return axios.get('NFT.json').then(res => res.data.data);
    }
}
