import React from 'react';
import { useStoreContext } from "../utils/GlobalState";
import { idbPromise } from "../utils/helpers";
import 'bootstrap/dist/css/bootstrap.min.css';

const CartItem = ({ item }) => {

  const [, dispatch] = useStoreContext();

  const removeFromCart = item => {
    dispatch({
      type: 'REMOVE_FROM_CART',
      _id: item._id
    });
    idbPromise('cart', 'delete', { ...item });

  };

  const onChange = (e) => {
    const value = e.target.value;
    if (value === '0') {
      dispatch({
        type: 'REMOVE_FROM_CART',
        _id: item._id
      });
      idbPromise('cart', 'delete', { ...item });

    } else {
      dispatch({
        type: 'UPDATE_CART_QUANTITY',
        _id: item._id,
        purchaseQuantity: parseInt(value)
      });
      idbPromise('cart', 'put', { ...item, purchaseQuantity: parseInt(value) });

    }
  }

  return (
    <div className="d-flex justify-content-between align-items-baseline">
      <div>
        <img
          src={item.image}
          alt={"Image of " + item.name}
        />
        {item.name}, {item.description}
      </div>
      <p style={{margin: '0px 1rem'}}> ${item.price} </p>
      <div>
        <span>Qty: </span>
        <input
          type="number"
          placeholder="1"
          value={item.purchaseQuantity}
          onChange={onChange}
        />
        <span
          role="img"
          aria-label="trash"
          style={{ cursor: 'pointer' }}
          onClick={() => removeFromCart(item)}
        >
          🗑️
        </span>
      </div>
    </div>
  );
}

export default CartItem;