import React, { useState, useReducer } from 'react'
import BasketCart from './BasketCart'

const BasketPage = ({ basket, dispatch }) => {
    const totalPrice = basket.reduce((total, product) => total + (product.count * product.unitPrice), 0);
    // console.log(totalPrice)

    return (
        <div className='container'>
            <p className="totalPrice">
                Total price:${totalPrice}
            </p>
            <button className='deletAllBtn' onClick={() => {
                dispatch({
                    type: "setBasket",
                    basket: []
                })
                // setBasket([])
            }}>Delete All</button>
            <div className="basketCartHolder">
                <BasketCart basket={basket} dispatch={dispatch} />
            </div>

        </div>
    )
}

export default BasketPage