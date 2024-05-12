import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { setBasket, setFavorites } from '../../../redux/slicers/CardsSlicer'
import { FaCartPlus, FaHeart } from 'react-icons/fa';

const Favorites = () => {


    const favorites = useSelector((state) => state.favorites.favorites)

    const dispatch = useDispatch()


    return (
        
        <section
            id="Projects"
            className="w-fit mx-auto grid grid-cols-1 lg:grid-cols-3 md:grid-cols-2 justify-items-center justify-center gap-y-20 gap-x-14 mt-20 mb-5"
        >
            {favorites && favorites.map(favorite => {
                return <div key={favorite.id} className="w-72 bg-white shadow-md rounded-xl duration-500 hover:scale-105 hover:shadow-xl">

                    <img
                        src={favorite.image}
                        alt="Product"
                        className="h-80 w-72 object-cover rounded-t-xl"
                    />
                    <div className="px-4 py-3 w-72">
                        <p className="text-lg font-bold text-black truncate block capitalize">
                            {favorite.title}
                        </p>
                        <div className="flex items-center">
                            <p className="text-lg font-semibold text-black cursor-auto my-3">
                                ${favorite.price}
                            </p>
                            <div className="ml-auto flex items-center space-x-4">
                                <button onClick={() => {
                                    dispatch(setBasket(favorite))
                                }} className="focus:outline-none">
                                    <FaCartPlus className="text-blue-500 hover:text-blue-600" size={20} />
                                </button>
                                <button onClick={() => {
                                    dispatch(setFavorites(favorite))
                                }} className="focus:outline-none">
                                    <FaHeart className="text-red-500 hover:text-red-600" size={20} />
                                </button>
                            </div>
                        </div>
                    </div>

                </div>
            })}


        </section>
    )
}

export default Favorites