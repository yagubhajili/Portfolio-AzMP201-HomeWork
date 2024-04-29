import React from 'react'

const BasketCart = ({ basket, dispatch }) => {


    return (
        basket.map(product => {
            return (
                <div className='basketCart'>
                    <p>{product.name}</p>
                    <p>{product.unitPrice * product.count}</p>
                    <div className="buttonDiv">
                        <button onClick={() => {
                            const updatedBasket = basket.map(item => {
                                if (item.id === product.id) {
                                    return { ...item, count: item.count - 1 };
                                }
                                return item;
                            }).filter(item => item.count > 0);
                            dispatch({
                                type: "setBasket",
                                basket: updatedBasket
                            })
                            // setBasket(updatedBasket);
                        }}>-</button>
                        <p>{product.count}</p>
                        <button onClick={() => {
                            const updatedBasket = basket.map(item => {
                                if (item.id === product.id) {
                                    return { ...item, count: item.count + 1 };
                                }
                                return item;
                            });
                            dispatch({
                                type: "setBasket",
                                basket: updatedBasket
                            })
                            // setBasket(updatedBasket);
                        }}>+</button>
                    </div>
                    <button onClick={() => {
                        let arr = basket.filter(elem => elem.id !== product.id)
                        dispatch({
                            type: "setBasket",
                            basket: [...arr]
                        })
                        // setBasket([...arr])
                    }}>remove</button>

                </div>
            )
        })
    )
}

export default BasketCart