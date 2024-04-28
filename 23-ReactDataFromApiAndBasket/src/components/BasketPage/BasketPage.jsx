import React, { useState } from 'react'
import BasketCart from './BasketCart'

const BasketPage = ({ basket, setBasket, basketCount, setBasketCount }) => {
    const totalPrice = basket.reduce((total, product) => total + (product.count * product.unitPrice), 0);
    // console.log(totalPrice)

    return (
        <div className='container'>
            <p className="totalPrice">
                Total price:${totalPrice}
            </p>
            <button className='deletAllBtn' onClick={() => {
                setBasket([])
            }}>Delete All</button>
            <div className="basketCartHolder">
                <BasketCart basket={basket} setBasket={setBasket} basketCount={basketCount} setBasketCount={setBasketCount} />
            </div>

        </div>
    )
}

export default BasketPage