import React from 'react';

const CartTotalPrice = ({totalPriceInCents}) => (
    <p>Total Price: ${(totalPriceInCents / 100).toFixed(2)}</p>
);

export default CartTotalPrice;
