import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { v4 as uuidv4 } from 'uuid';
import { FAKE_STORE_URL, endPoints } from '../../../services/api';
import Search from './components/Search';


const Home = ({ fakeStore }) => {
    const [filteredProduct, setFilteredProducts] = useState([])
    const [addNewProd, setAddNewProd] = useState(false)
    const [inputVals, setInputVals] = useState({
        image: '',
        title: '',
        price: '',
        category: '',
        rating: {
            rate: '',
            count: ''
        }
    })
    useEffect(() => {
        setFilteredProducts(fakeStore)
    }, [fakeStore])

    return (
        <>
            <Search filteredProduct={filteredProduct} setFilteredProducts={setFilteredProducts} fakeStore={fakeStore} />
            {addNewProd && (
                <div className="max-w-sm mx-auto ">
                    <div className="mb-5">
                        <label
                            htmlFor="password"
                            className="block mb-2 text-sm font-medium text-gray-900 "
                        >
                            image
                        </label>
                        <input
                            type="text"
                            id="password"
                            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                            required=""
                            value={inputVals.image}
                            onChange={(e) => {
                                setInputVals({ ...inputVals, image: e.target.value })
                            }}
                        />
                    </div>
                    <div className="mb-5">
                        <label
                            htmlFor="password"
                            className="block mb-2 text-sm font-medium text-gray-900 "
                        >
                            title
                        </label>
                        <input
                            type="text"
                            id="password"
                            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                            required=""
                            value={inputVals.title}
                            onChange={(e) => {
                                setInputVals({ ...inputVals, title: e.target.value })
                            }}
                        />
                    </div>
                    <div className="mb-5">
                        <label
                            htmlFor="password"
                            className="block mb-2 text-sm font-medium text-gray-900 "
                        >
                            price
                        </label>
                        <input
                            type="text"
                            id="password"
                            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                            required=""
                            value={inputVals.price}
                            onChange={(e) => {
                                setInputVals({ ...inputVals, price: e.target.value })
                            }}
                        />
                    </div>
                    <div className="mb-5">
                        <label
                            htmlFor="password"
                            className="block mb-2 text-sm font-medium text-gray-900 "
                        >
                            category
                        </label>
                        <input
                            type="text"
                            id="password"
                            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                            required=""
                            value={inputVals.category}
                            onChange={(e) => {
                                setInputVals({ ...inputVals, category: e.target.value })
                            }}
                        />
                    </div>
                    <div className="mb-5">
                        <label
                            htmlFor="password"
                            className="block mb-2 text-sm font-medium text-gray-900 "
                        >
                            rating
                        </label>
                        <input
                            type="text"
                            id="password"
                            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                            required=""
                            value={inputVals.rating.rate || ''}
                            onChange={(e) => {
                                setInputVals({
                                    ...inputVals, rating: {
                                        rate: e.target.value
                                    }
                                })
                            }}
                        />
                    </div>
                    <div className="mb-5">
                        <label
                            htmlFor="password"
                            className="block mb-2 text-sm font-medium text-gray-900 "
                        >
                            count
                        </label>
                        <input
                            type="text"
                            id="password"
                            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                            required=""
                            value={inputVals.rating.count}
                            onChange={(e) => {
                                setInputVals({
                                    ...inputVals, rating: {
                                        count: e.target.value
                                    }
                                })
                            }}
                        />
                    </div>
                    <button
                        onClick={async () => {
                            inputVals.title = ''
                            await axios.post(FAKE_STORE_URL + endPoints.products, inputVals)
                            setAddNewProd(false)
                            console.log(inputVals)
                        }}
                        type="submit"
                        className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                    >
                        Submit
                    </button>
                </div>
            )}
            <div className="container my-12 py-12 mx-auto px-4 md:px-6 lg:px-12">
                <section className="mb-20 text-gray-800">
                    <button onClick={() => {
                        setAddNewProd(true)
                    }} type="button" className="text-white bg-purple-700 hover:bg-purple-800 focus:outline-none focus:ring-4 focus:ring-purple-300 font-medium rounded-full text-sm px-5 py-2.5 text-center mb-2 dark:bg-purple-600 dark:hover:bg-purple-700 dark:focus:ring-purple-900">Add New Prod</button>
                    <div className="block rounded-lg shadow-lg bg-white">
                        <div className="flex flex-col">
                            <div className="overflow-x-auto sm:-mx-6 lg:-mx-8">
                                <div className="inline-block min-w-full sm:px-6 lg:px-8">
                                    <div className="overflow-hidden">
                                        <table className="min-w-full mb-0">
                                            <thead className="border-b bg-gray-50 rounded-t-lg text-left">
                                                <tr>
                                                    <th
                                                        scope="col"
                                                        className="rounded-tl-lg text-sm font-medium px-6 py-4"
                                                    >
                                                        Picture                                                  </th>
                                                    <th scope="col" className="text-sm font-medium px-6 py-4">
                                                        Title
                                                    </th>
                                                    <th scope="col" className="text-sm font-medium px-6 py-4">
                                                        Price
                                                    </th>
                                                    <th scope="col" className="text-sm font-medium px-6 py-4">
                                                        Category
                                                    </th>
                                                    <th scope="col" className="text-sm font-medium px-6 py-4">
                                                        Rating
                                                    </th>
                                                    <th scope="col" className="text-sm font-medium px-6 py-4">
                                                        Count
                                                    </th>
                                                    <th
                                                        scope="col"
                                                        className="rounded-tr-lg text-sm font-medium px-6 py-4"

                                                    />
                                                </tr>
                                            </thead>
                                            <tbody>
                                                {filteredProduct.map(product => {
                                                    let bgColor = '';
                                                    if (product.rating?.count < 100) {
                                                        bgColor = 'bg-red-200 border-b';
                                                    } else if (product.rating?.count < 200) {
                                                        bgColor = 'bg-yellow-200 border-b';
                                                    }
                                                    return <tr className={bgColor} key={uuidv4()} >
                                                        <th
                                                            scope="row"
                                                            className="text-sm font-normal px-6 py-4 whitespace-nowrap text-left"
                                                        >
                                                            <div className="flex flex-row items-center">
                                                                <img
                                                                    className="rounded-full w-12"
                                                                    src={product.image}
                                                                    alt="Avatar"
                                                                />
                                                            </div>
                                                        </th>
                                                        <td className="text-sm font-normal px-6 py-4 whitespace-nowrap text-left">
                                                            <div className="flex flex-col">
                                                                <p className="mb-0.5">{product.title}</p>
                                                            </div>
                                                        </td>
                                                        <td className="align-middle text-sm font-normal px-6 py-4 whitespace-nowrap text-left">
                                                            <span className="text-xs py-1 px-2.5 leading-none text-center whitespace-nowrap align-baseline font-medium bg-green-200 text-green-600 rounded-full">
                                                                ${product.price}
                                                            </span>
                                                        </td>
                                                        <td className="align-middle text-gray-500 text-sm font-normal px-6 py-4 whitespace-nowrap text-left">
                                                            {product.category}
                                                        </td>
                                                        <td className="align-middle text-gray-500 text-sm font-normal px-6 py-4 whitespace-nowrap text-left">
                                                            {product.rating?.rate}
                                                        </td>
                                                        <td className="align-middle text-gray-500 text-sm font-normal px-6 py-4 whitespace-nowrap text-left">
                                                            {product.rating?.count}
                                                        </td>
                                                        <td className="align-middle text-right text-sm font-normal px-6 py-4 whitespace-nowrap text-left">
                                                            <a
                                                                href="#!"
                                                                className="font-medium text-blue-600 hover:text-blue-700 focus:text-blue-700 active:text-blue-800 transition duration-300 ease-in-out"
                                                            >
                                                                Edit
                                                            </a>
                                                        </td>
                                                        <td className="align-middle text-right text-sm font-normal px-6 py-4 whitespace-nowrap text-left">
                                                            <a
                                                                href="#!"
                                                                className="font-medium text-blue-600 hover:text-blue-700 focus:text-blue-700 active:text-blue-800 transition duration-300 ease-in-out"
                                                            >
                                                                Delete
                                                            </a>
                                                        </td>
                                                    </tr>
                                                })}
                                            </tbody>
                                        </table>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            </div>
        </>
    )
}

export default Home