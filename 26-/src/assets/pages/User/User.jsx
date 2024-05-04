import React, { useEffect, useState } from 'react'
import { v4 as uuidv4 } from 'uuid';
import Search from '../Home/components/Search';
import SearchUser from './components/SearchUser';
import { Link } from 'react-router-dom';
import axios from 'axios';
import { FAKE_STORE_URL, endPoints } from '../../../services/api';

const User = ({ userss }) => {


    const [filteredProduct, setFilteredProducts] = useState([])
    const [addNewProd, setAddNewProd] = useState(false)
    const [inputVals, setInputVals] = useState({
        userName: '',
        name: '',
        surname: '',
        password: '',
        email: '',
        gender: '',
        balance: '',
        accountDate: '',
        isAdmin: false,
        basket: [],
        favorites: []
    })



    useEffect(() => {
        setFilteredProducts(userss)
    }, [userss])

    return (
        <>
            <SearchUser filteredProduct={filteredProduct} setFilteredProducts={setFilteredProducts} userss={userss} />
            {addNewProd && (
                <div className="max-w-sm mx-auto ">
                    <div className="mb-5">
                        <label
                            htmlFor="password"
                            className="block mb-2 text-sm font-medium text-gray-900 "
                        >
                            user name                        </label>
                        <input
                            type="text"
                            id="password"
                            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                            required=""
                            value={inputVals.userName}
                            onChange={(e) => {
                                setInputVals({ ...inputVals, userName: e.target.value })
                            }}
                        />
                    </div>
                    <div className="mb-5">
                        <label
                            htmlFor="password"
                            className="block mb-2 text-sm font-medium text-gray-900 "
                        >
                            name
                        </label>
                        <input
                            type="text"
                            id="password"
                            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                            required=""
                            value={inputVals.name}
                            onChange={(e) => {
                                setInputVals({ ...inputVals, name: e.target.value })
                            }}
                        />
                    </div>
                    <div className="mb-5">
                        <label
                            htmlFor="password"
                            className="block mb-2 text-sm font-medium text-gray-900 "
                        >
                            surname
                        </label>
                        <input
                            type="text"
                            id="password"
                            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                            required=""
                            value={inputVals.surname}
                            onChange={(e) => {
                                setInputVals({ ...inputVals, surname: e.target.value })
                            }}
                        />
                    </div>
                    <div className="mb-5">
                        <label
                            htmlFor="password"
                            className="block mb-2 text-sm font-medium text-gray-900 "
                        >
                            password
                        </label>
                        <input
                            type="text"
                            id="password"
                            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                            required=""
                            value={inputVals.password}
                            onChange={(e) => {
                                setInputVals({ ...inputVals, password: e.target.value })
                            }}
                        />
                    </div>
                    <div className="mb-5">
                        <label
                            htmlFor="password"
                            className="block mb-2 text-sm font-medium text-gray-900 "
                        >
                            email
                        </label>
                        <input
                            type="email"
                            id="password"
                            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                            required=""
                            value={inputVals.email}
                            onChange={(e) => {
                                setInputVals({
                                    ...inputVals,
                                    email: e.target.value

                                })
                            }}
                        />
                    </div>
                    <div className="mb-5">
                        <label
                            htmlFor="password"
                            className="block mb-2 text-sm font-medium text-gray-900 "
                        >
                            gender
                        </label>
                        <form className="max-w-sm mx-auto">
                            <label htmlFor="countries" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Select an option</label>
                            <select
                                id="countries"
                                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                                value={inputVals.gender}
                                onChange={(e) => {
                                    setInputVals({
                                        ...inputVals,
                                        gender: e.target.value
                                    });
                                }}
                            >
                                <option value="">Choose a gender</option>
                                <option value="kiwi">kiwi</option>
                                <option value="kadin">kadin</option>
                            </select>
                        </form>
                    </div>
                    <div className="mb-5">
                        <label
                            htmlFor="password"
                            className="block mb-2 text-sm font-medium text-gray-900 "
                        >
                            balance
                        </label>
                        <input
                            type="text"
                            id="password"
                            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                            required=""
                            value={inputVals.balance}
                            onChange={(e) => {
                                setInputVals({
                                    ...inputVals,
                                    balance: e.target.value

                                })
                            }}
                        />
                    </div>
                    <div className="mb-5">
                        <label
                            htmlFor="password"
                            className="block mb-2 text-sm font-medium text-gray-900 "
                        >
                            accountDate
                        </label>
                        <input
                            type="text"
                            id="password"
                            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                            required=""
                            value={inputVals.accountDate}
                            onChange={(e) => {
                                setInputVals({
                                    ...inputVals,
                                    accountDate: e.target.value

                                })
                            }}
                        />
                    </div>
                    <div className="mb-5">
                        <label
                            htmlFor="password"
                            className="block mb-2 text-sm font-medium text-gray-900 "
                        >
                            isAdmin
                        </label>
                        <form className="max-w-sm mx-auto">
                            <label htmlFor="countries" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Select an option</label>
                            <select
                                id="countries"
                                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                                value={inputVals.isAdmin}
                                onChange={(e) => {
                                    setInputVals({
                                        ...inputVals,
                                        isAdmin: e.target.value
                                    });
                                }}
                            >
                                <option value="">Choose position</option>
                                <option value="true">admin</option>
                                <option value="false">not admin</option>
                            </select>
                        </form>
                    </div>
                    <button
                        onClick={async () => {
                            await axios.post(FAKE_STORE_URL + endPoints.users, inputVals)
                            setAddNewProd(false)
                            // console.log(inputVals)
                        }}
                        type="submit"
                        className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                    >
                        Submit
                    </button>
                </div>
            )}
            <div>
                <button onClick={() => {
                    setAddNewProd(true)

                }} type="button" className="text-white bg-purple-700 hover:bg-purple-800 focus:outline-none focus:ring-4 focus:ring-purple-300 font-medium rounded-full text-sm px-5 py-2.5 text-center mb-2 dark:bg-purple-600 dark:hover:bg-purple-700 dark:focus:ring-purple-900">Add New User</button></div>
            <table className="min-w-full divide-y divide-gray-200 overflow-x-auto mt-24">
                <thead className="bg-gray-50">
                    <tr>
                        <th
                            scope="col"
                            className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                        >
                            id
                        </th>
                        <th
                            scope="col"
                            className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                        >
                            User Name
                        </th>
                        <th
                            scope="col"
                            className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                        >
                            Name
                        </th>
                        <th
                            scope="col"
                            className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                        >
                            Surname
                        </th>
                        <th
                            scope="col"
                            className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                        >
                            Password
                        </th>
                        <th
                            scope="col"
                            className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                        >
                            Email
                        </th>
                        <th
                            scope="col"
                            className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                        >
                            Gender
                        </th>
                        <th
                            scope="col"
                            className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                        >
                            Balance
                        </th>
                        <th
                            scope="col"
                            className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                        >
                            Registered date
                        </th>
                        <th
                            scope="col"
                            className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                        >
                            Role
                        </th>
                        <th
                            scope="col"
                            className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                        >
                            Action
                        </th>
                    </tr>
                </thead>
                <tbody className="bg-white divide-y divide-gray-200">
                    {filteredProduct?.map(user => {
                        return (
                            <tr key={uuidv4()} >
                                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                                    {user.id}
                                </td>
                                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                                    {user.userName}
                                </td>
                                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                                    {user.name}
                                </td>
                                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                                    {user.surname}
                                </td>
                                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                                    {user.password}
                                </td>
                                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                                    {user.email}
                                </td>
                                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                                    {user.gender}
                                </td>
                                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                                    {user.balance}
                                </td>
                                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                                    {user.accountDate}
                                </td>
                                <td className="px-6 py-4 whitespace-nowrap">
                                    <span onClick={async () => {
                                        const updatedFilteredProduct = filteredProduct.map(u => {
                                            if (u.id === user.id) {
                                                return { ...u, isAdmin: !u.isAdmin };
                                            }
                                            return u;
                                        });
                                        await axios.patch(`http://localhost:3000/users/${user.id}`, { ...user, isAdmin: !user.isAdmin })
                                        setFilteredProducts(updatedFilteredProduct);
                                    }} className="cursor-pointer px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-green-100 text-green-800">
                                        {user.isAdmin ? ('Admin') : ('Not admin')}
                                    </span>
                                </td>
                                <td className="px-6 py-4 whitespace-nowrap  text-sm font-medium">
                                    <Link path='' className="text-indigo-600 hover:text-indigo-900">
                                        Edit
                                    </Link>
                                    <Link onClick={() => {
                                        let arr = filteredProduct.filter(elem => elem.id !== user.id)
                                        setFilteredProducts([...arr])
                                        axios.delete(`http://localhost:3000/users/${user.id}`)
                                    }} className="ml-2 text-red-600 hover:text-red-900">
                                        Delete
                                    </Link>
                                </td>
                            </tr>
                        )
                    })}
                </tbody>
            </table>
        </>

    )
}

export default User