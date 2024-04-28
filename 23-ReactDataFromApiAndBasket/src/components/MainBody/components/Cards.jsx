import axios from 'axios'
import React from 'react'

const Cards = ({ data, setData, basketCount, setBasketCount, basket, setBasket }) => {
    return (
        data.map((element, index) => {
            return (
                <div className='card' key={index}>
                    <h2>{element.name}</h2>
                    <p>${element.unitPrice}</p>
                    <button className='addToCartBtn' onClick={() => {
                        // let obj = {
                        //     id: element.id,
                        //     name: element.name,
                        //     unitPrice:element.unitPrice
                        // }
                        if (!basket.includes(element)) {
                            setBasket([...basket, { ...element, count: 1 }])
                            setBasketCount(++basketCount)
                        }
                        // console.log(basket)

                    }}>Add To Cart</button>
                    <button className='editBtn' onClick={() => {
                        let newName = prompt("edit the name of product", element.name)
                        let newPrice = prompt("edit the price of product", element.unitPrice)
                        if (newName !== null && newPrice !== null) {
                            const updatedData = data.map(item => {
                                if (item.id === element.id) {
                                    return { ...item, name: newName, unitPrice: newPrice };
                                }
                                return item;
                            });
                            setData(updatedData);
                        }
                    }}>Edit</button>
                    <button className='deleteBtn' onClick={async () => {
                        await axios.delete(`https://northwind.vercel.app/api/products/${element.id}`)
                        let arr = basket.filter(elem => elem.id !== element.id)
                        setData([...arr])
                        // console.log(data)
                    }}>Delete</button>

                </div >
            )
        })

    )
}

export default Cards