import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { v4 as uuidv4 } from 'uuid';
import { FAKE_STORE_URL, endPoints } from '../../../services/api';
import Search from './components/Search';
import { Link } from 'react-router-dom';
import { useAppContext } from '../../../context/AppContext';
import { useHomeContext } from '../../../context/HomeContext';


const Home = () => {
    // const { fakeStore } = useAppContext()
    // const [filteredProduct, setFilteredProducts] = useState([])
    // const [addNewProd, setAddNewProd] = useState(false)
    // const [showModal, setShowModal] = useState(false);
    // const [selectedProduct, setSelectedProduct] = useState(null);

    // const [inputVals, setInputVals] = useState({
    //     image: '',
    //     title: '',
    //     price: '',
    //     category: '',
    //     rating: {
    //         rate: '',
    //         count: ''
    //     }
    // })
    // useEffect(() => {
    //     setFilteredProducts(fakeStore)
    // }, [fakeStore])

    let { filteredProduct, setFilteredProducts, addNewProd, setAddNewProd, showModal, setShowModal, selectedProduct, setSelectedProduct, inputVals, setInputVals } = useHomeContext()

    const { fakeStore } = useAppContext()
    return (
        <>
            <Search filteredProduct={filteredProduct} setFilteredProducts={setFilteredProducts} fakeStore={fakeStore} />
            {showModal && (
                <div className="fixed z-10 inset-0 overflow-y-auto">
                    <div className="flex items-end justify-center min-h-screen pt-4 px-4 pb-20 text-center sm:block sm:p-0">
                        <div className="fixed inset-0 transition-opacity" aria-hidden="true">
                            <div className="absolute inset-0 bg-gray-500 opacity-75"></div>
                        </div>
                        <span className="hidden sm:inline-block sm:align-middle sm:h-screen" aria-hidden="true">&#8203;</span>
                        <div className="inline-block align-bottom bg-white rounded-lg text-left overflow-hidden shadow-xl transform transition-all sm:my-8 sm:align-middle sm:max-w-lg sm:w-full">
                            {/* Modal content */}
                            <div className="bg-white px-4 pt-5 pb-4 sm:p-6 sm:pb-4 flex flex-col">
                                <div className="sm:flex sm:items-start flex-col">
                                    <div className="mb-3">
                                        <label htmlFor="username" className="block text-sm font-medium text-gray-700">image</label>
                                        <input value={selectedProduct.image}
                                            onChange={e => {
                                                setSelectedProduct({ ...selectedProduct, image: e.target.value })
                                            }} type="text" id="username" />
                                    </div>
                                    <div className="mb-3">
                                        <label htmlFor="name" className="block text-sm font-medium text-gray-700">title</label>
                                        <input value={selectedProduct.title}
                                            onChange={e => {
                                                setSelectedProduct({ ...selectedProduct, title: e.target.value })
                                            }} type="text" id="name" />
                                    </div>
                                    <div className="mb-3">
                                        <label htmlFor="surname" className="block text-sm font-medium text-gray-700">price</label>
                                        <input value={selectedProduct.price}
                                            onChange={e => {
                                                setSelectedProduct({ ...selectedProduct, price: e.target.value })
                                            }} type="text" id="surname" />
                                    </div>
                                    <div className="mb-3">
                                        <label htmlFor="password" className="block text-sm font-medium text-gray-700">category</label>
                                        <input value={selectedProduct.category}
                                            onChange={e => {
                                                setSelectedProduct({ ...selectedProduct, category: e.target.value })
                                            }} type="text" id="password" />
                                    </div>
                                    <div className="mb-3">
                                        <label htmlFor="accountDate" className="block text-sm font-medium text-gray-700">rate</label>
                                        <input value={selectedProduct.rating.rate}
                                            onChange={e => {
                                                setSelectedProduct({
                                                    ...selectedProduct,
                                                    rating: { rate: e.target.value }
                                                })
                                            }} type="email" id="accountDate" />
                                    </div>
                                    <div className="mb-3">
                                        <label htmlFor="accountDate" className="block text-sm font-medium text-gray-700">count</label>
                                        <input value={selectedProduct.rating.count}
                                            onChange={e => {
                                                setSelectedProduct({
                                                    ...selectedProduct,
                                                    rating: { count: e.target.value }
                                                })
                                            }} type="email" id="accountDate" />
                                    </div>
                                </div>
                            </div>
                            <div className="bg-gray-50 px-4 py-3 sm:px-6 sm:flex sm:flex-row-reverse">
                                <button onClick={() => {
                                    setShowModal(false)
                                    axios.patch(`${FAKE_STORE_URL}${endPoints.products}${selectedProduct.id}`, { ...selectedProduct })
                                    // setFilteredProducts({ ...filteredProduct, ...selectedUser })
                                }



                                } type="button" className="w-full inline-flex justify-center rounded-md border border-transparent shadow-sm px-4 py-2 bg-blue-600 text-base font-medium text-white hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-500 sm:ml-3 sm:w-auto sm:text-sm">
                                    save
                                </button>
                                <button onClick={() => setShowModal(false)} type="button" className="w-full inline-flex justify-center rounded-md border border-transparent shadow-sm px-4 py-2 bg-red-600 text-base font-medium text-white hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-500 sm:ml-3 sm:w-auto sm:text-sm">
                                    Close
                                </button>

                            </div>
                        </div>
                    </div>
                </div >
            )}
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
                    <div className="container flex items-center ">
                        <button onClick={() => {
                            setAddNewProd(true)
                        }} type="button" className="mt-6 text-white bg-purple-700 hover:bg-purple-800 focus:outline-none focus:ring-4 focus:ring-purple-300 font-medium rounded-full text-sm px-5 py-2.5 text-center dark:bg-purple-600 dark:hover:bg-purple-700 dark:focus:ring-purple-900">Add New Prod</button>
                        <div className="max-w-sm">
                            <label
                                htmlFor="countries"
                                className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                            >
                                Select an option
                            </label>
                            <select
                                onChange={(e) => {
                                    let arr = fakeStore.filter((elem) => elem.category == e.target.value)
                                    setFilteredProducts([...arr])
                                }}
                                id="countries"
                                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                            >
                                <option defaultValue="">Choose a category</option>
                                <option value="men's clothing">men's clothing</option>
                                <option value="jewelery">	jewelery</option>
                                <option value="women's clothing">women's clothing</option>
                            </select>
                        </div>
                    </div>

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
                                                            <Link
                                                                onClick={() => {
                                                                    setShowModal(true)
                                                                    setSelectedProduct(product)
                                                                }}
                                                                path=''
                                                                className="font-medium text-blue-600 hover:text-blue-700 focus:text-blue-700 active:text-blue-800 transition duration-300 ease-in-out"
                                                            >
                                                                Edit
                                                            </Link>
                                                        </td>
                                                        <td className="align-middle text-right text-sm font-normal px-6 py-4 whitespace-nowrap text-left">
                                                            <Link
                                                                to={{ pathname: `/home/${product.id}` }}

                                                                className="font-medium text-blue-600 hover:text-blue-700 focus:text-blue-700 active:text-blue-800 transition duration-300 ease-in-out"
                                                            >
                                                                Detail

                                                            </Link>
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
                </section >
            </div >
        </>
    )
}

export default Home