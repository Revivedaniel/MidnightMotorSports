import React, { useEffect } from 'react';
import { useMutation } from '@apollo/client';
import { ADD_ORDER } from '../utils/mutations';
import { idbPromise } from '../utils/helpers';
import { Link } from 'react-router-dom';

function Success() {
  const [addOrder] = useMutation(ADD_ORDER);

  useEffect(() => {
    async function saveOrder() {
      const cart = await idbPromise('cart', 'get');
      const parts = cart.map((item) => item._id);

      if (parts.length) {
        const { data } = await addOrder({ variables: { parts } });
        const partsData = data.addOrder.parts;

        partsData.forEach((item) => {
          idbPromise('cart', 'delete', item);
        });
      }

      setTimeout(() => {
        window.location.assign('/');
      }, 3000);
    }

    saveOrder();
  }, [addOrder]);

  return (
    <div className='successContainer'>
      <h1>Success!</h1>
      <h2>Thank you for your purchase!</h2>
      <h2>You will now be redirected to the home page. Click <Link to="/">here</Link> if you are not redirect within 5 seconds.</h2>
    </div>
  );
}

export default Success;
