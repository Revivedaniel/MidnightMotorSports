import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { useStoreContext } from '../utils/GlobalState';
import { idbPromise } from '../utils/helpers';
import Auth from '../utils/auth'

function PartCard(item) {
    const [state, dispatch] = useStoreContext();

    const {
        image,
        name,
        _id,
        price,
        description,
        quantity,
        year,
        model
    } = item;

    const { cart } = state

    const addToCart = () => {
        const itemInCart = cart.find((cartItem) => cartItem._id === _id);
        if (item.quantity > 0) {
            if (itemInCart) {
                dispatch({
                    type: 'UPDATE_CART_QUANTITY',
                    _id: _id,
                    purchaseQuantity: parseInt(itemInCart.purchaseQuantity) + 1
                });
                idbPromise('cart', 'put', {
                    ...itemInCart,
                    purchaseQuantity: parseInt(itemInCart.purchaseQuantity) + 1
                });
            } else {
                dispatch({
                    type: 'ADD_TO_CART',
                    part: { ...item, purchaseQuantity: 1 }
                });
                idbPromise('cart', 'put', { ...item, purchaseQuantity: 1 });
            }
        } else {
            alert("Sorry, that item is out of stock!");
        }
    };

    function logInAlert(event) {
        event.preventDefault();
        return alert("Please, log in to add items to your cart.");
    }

    return (
        <div className='card partCard'>
            <img className='card-img-top' style={{ height: '50%' }} src={image} alt={'Image of ' + name} />
            <div className='card-body'>
                <h5 className='card-title'>{name}</h5>
                <p className='card-description'>{description}</p>
                <p className='card-price'>${price}.00</p>
                <p className='card-quantity'>{quantity} left in stock!</p>
                <p className='card-year'>Compatable with {year} {model} models.</p>
                {Auth.loggedIn() ? <button className='btn btn-primary' onClick={addToCart}>Add To Cart</button> : <button className='btn btn-secondary' onClick={logInAlert}>Add To Cart</button>}
            </div>
        </div>
    );
}

export default PartCard;
