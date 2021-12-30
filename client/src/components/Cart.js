import React, { useEffect } from 'react';
import { loadStripe } from '@stripe/stripe-js';
import { useLazyQuery } from '@apollo/client';
import { QUERY_CHECKOUT } from '../utils/queries';
import { idbPromise } from '../utils/helpers';
import CartItem from './CartItem';
import Auth from '../utils/auth';
import 'bootstrap/dist/css/bootstrap.min.css'
import { useStoreContext } from '../utils/GlobalState';
import '../../src/index.css';

const stripePromise = loadStripe("pk_test_51K094OH1JTdIxWpEQ3OOZmW04TlM7DvecrauLkesdmipJTKbBZNaYdmXOKRJHpF3sUmGsYNvmFwlF1R2muffI6EM00uwXWi18Q");

const Cart = () => {
    const [state, dispatch] = useStoreContext();
    const [getCheckout, { data }] = useLazyQuery(QUERY_CHECKOUT);

    useEffect(() => {
        if (data) {
            stripePromise.then((res) => {
                console.log(data.checkout)
                res.redirectToCheckout({ sessionId: data.checkout.session });
            });
        }
    }, [data]);

    useEffect(() => {
        async function getCart() {
            const cart = await idbPromise('cart', 'get');
            dispatch({ type: "ADD_MULTIPLE_TO_CART", parts: [...cart] });
        }

        if (!state.cart.length) {
            getCart();
        }
    }, [state.cart.length, dispatch]);

    function toggleCart() {
        dispatch({ type: "TOGGLE_CART" });
    }

    function calculateTotal() {
        let sum = 0;

        state.cart.forEach((item) => {
            sum += item.price * item.purchaseQuantity;
        });

        return sum.toFixed(2);
    }

    function submitCheckout() {
        const partIds = [];

        state.cart.forEach((item) => {
            for (let i = 0; i < item.purchaseQuantity; i++) {
                partIds.push(item._id);
            }
        });

        getCheckout({
            variables: { parts: partIds },
        });
    }

    if (!state.cartOpen) {
        return (
            <div className="cart-closed" onClick={toggleCart}>
                <span role="img" aria-label="cart" style={{cursor:'pointer'}}>
                    🛒
                </span>
            </div>
        );
    }

    return (
        <div className="cart">
            <div className="close" onClick={toggleCart} style={{cursor:'pointer'}}>
                Close ❌ 
            </div>
            <h2>Shopping Cart</h2>
            {state.cart.length && Auth.loggedIn() ? (
                <div>
                    {state.cart.map((item) => (
                        <CartItem key={item._id} item={item} />
                    ))}

                    <div className="d-flex justify-content-between">
                        <strong>Total: ${calculateTotal()}</strong>

                        {Auth.loggedIn() ? (
                            <button type="button" className="btn btn-success" onClick={submitCheckout}>Checkout</button>
                        ) : (
                            <span>(log in to check out)</span>
                        )}
                    </div>
                </div>
            ) : (
                <h3>
                    Your Midnight Motorsports cart is empty.
                </h3>
            )}
        </div>
    );
};

export default Cart;
