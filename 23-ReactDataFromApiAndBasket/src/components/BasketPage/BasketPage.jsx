import React, { useState } from 'react'
import BasketCart from './BasketCart'

const BasketPage = ({ basket, setBasket, basketCount, setBasketCount }) => {
    const [totalPrice, setTotalPrice] = useState(0)
    return (
        <div className='container'>
            <p className="totalPrice">
                {totalPrice}
            </p>
            <button>Delete All</button>
            <div className="basketCartHolder">
                <BasketCart basket={basket} setBasket={setBasket} totalPrice={totalPrice} setTotalPrice={setTotalPrice} basketCount={basketCount} setBasketCount={setBasketCount} />
            </div>

        </div>
    )
}

export default BasketPage