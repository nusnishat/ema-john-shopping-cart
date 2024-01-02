import React from 'react';
import './Product.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
  import { faShoppingBag} from '@fortawesome/free-solid-svg-icons'
const Product = (props) => {
    const {name, price, img, ratings, seller} = props.product;
    const  handleAddToCart = props.handleAddToCart;
    
    return (
        <div className='product'>
            <img src={img} alt="" />
            <div className='product-info'>
                <h5>{name}</h5>
                <h5>Price: $ {price}</h5>
                <p className='manufacturer'>Manufacturer: {seller}</p>
                <p>Ratings: {ratings}</p>
            </div>
            <button onClick={()=> handleAddToCart(props.product)} className='cart-btn'>
            <FontAwesomeIcon icon={faShoppingBag}/>Add to Cart</button>
        </div>
    );
};

export default Product;