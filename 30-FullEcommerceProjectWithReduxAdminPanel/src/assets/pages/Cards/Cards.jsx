import React, { useEffect } from 'react'
import { FaCartPlus, FaHeart } from 'react-icons/fa';
import { useDispatch, useSelector } from 'react-redux';
import { getProducts, setBasket, setFavorites } from '../../../redux/slicers/CardsSlicer';

const Cards = () => {

    const dispatch = useDispatch()
    const products = useSelector((state) => state.products.products)
    const favorites = useSelector((state) => state.favorites.favorites)

    useEffect(() => {
        dispatch(getProducts())
    }, [products])

    const isFavorite = (id) => {
        return favorites.some((favorite) => favorite.id === id);
    };

    return (
        <>
            <section
                id="Projects"
                className="w-fit mx-auto grid grid-cols-1 lg:grid-cols-3 md:grid-cols-2 justify-items-center justify-center gap-y-20 gap-x-14 mt-20 mb-5"
            >
                {products && products.map(product => {
                    return <div key={product.id} className="w-72 bg-white shadow-md rounded-xl duration-500 hover:scale-105 hover:shadow-xl">

                        <img
                            src={product.image}
                            alt="Product"
                            className="h-80 w-72 object-cover rounded-t-xl"
                        />
                        <div className="px-4 py-3 w-72">
                            <p className="text-lg font-bold text-black truncate block capitalize">
                                {product.title}
                            </p>
                            <div className="flex items-center">
                                <p className="text-lg font-semibold text-black cursor-auto my-3">
                                    ${product.price}
                                </p>
                                <div className="ml-auto flex items-center space-x-4">
                                    <button onClick={() => {
                                        dispatch(setBasket(product))
                                    }} className="focus:outline-none">
                                        <FaCartPlus className="text-blue-500 hover:text-blue-600" size={20} />
                                    </button>
                                    <button onClick={() => {
                                        dispatch(setFavorites(product))
                                    }} className="focus:outline-none">
                                        <FaHeart className={`text-${isFavorite(product.id)?'red':'blue'}-500 hover:text-${isFavorite(product.id)?'red':'blue'} `} size={20} />
                                    </button>
                                </div>
                            </div>
                        </div>

                    </div>
                })}
            </section>
        </>
    )
}

export default Cards