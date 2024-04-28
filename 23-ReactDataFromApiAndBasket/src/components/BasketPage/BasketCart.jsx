import React from 'react'

const BasketCart = ({ basket, setBasket, totalPrice, setTotalPrice, basketCount, setBasketCount }) => {
    return (
        basket.map(product => {
            return (
                <div className='basketCart'>
                    <p>{product.name}</p>
                    <p>{product.unitPrice}</p>
                    <div className="buttonDiv">
                        <button onClick={() => {
                            console.log(product.count)
                            if (product.count > 1) {
                                product.count = Number(product.count) - 1;
                                // Update the total price accordingly
                                
                            }

                        }}>-</button>
                        <p>{product.count}</p>
                        <button>+</button>
                    </div>
                    <button onClick={() => {
                        let arr = basket.filter(elem => elem.id !== product.id)
                        setBasket([...arr])
                        setBasketCount(--basketCount)
                    }}>remove</button>

                </div>
            )
        })
    )
}

export default BasketCart