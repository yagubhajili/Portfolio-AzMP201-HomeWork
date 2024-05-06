import React, { useEffect, useState } from 'react'
import { v4 as uuidv4 } from 'uuid';
import Search from '../Home/components/Search';
import SearchUser from './components/SearchUser';
import { Link } from 'react-router-dom';
import axios from 'axios';
import { FAKE_STORE_URL, endPoints } from '../../../services/api';
import { useAppContext } from '../../../context/AppContext';
import { useHomeContext } from '../../../context/HomeContext';
import { useUserContext } from '../../../context/UserContext';

const User = () => {

    let { showModal, setShowModal } = useHomeContext()
    let { addNewProd, setAddNewProd, inputValss, setInputValss, selectedUser, setSelectedUser, filteredUsers, setFilteredUser } = useUserContext()

    return (
        <>
            <SearchUser />
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
                                        <label htmlFor="username" className="block text-sm font-medium text-gray-700">Username</label>
                                        <input value={selectedUser.userName}
                                            onChange={e => {
                                                setSelectedUser({ ...selectedUser, userName: e.target.value })
                                            }} type="text" id="username" />
                                    </div>
                                    <div className="mb-3">
                                        <label htmlFor="name" className="block text-sm font-medium text-gray-700">Name</label>
                                        <input value={selectedUser.name}
                                            onChange={e => {
                                                setSelectedUser({ ...selectedUser, name: e.target.value })
                                            }} type="text" id="name" />
                                    </div>
                                    <div className="mb-3">
                                        <label htmlFor="surname" className="block text-sm font-medium text-gray-700">Surname</label>
                                        <input value={selectedUser.surname}
                                            onChange={e => {
                                                setSelectedUser({ ...selectedUser, surname: e.target.value })
                                            }} type="text" id="surname" />
                                    </div>
                                    <div className="mb-3">
                                        <label htmlFor="password" className="block text-sm font-medium text-gray-700">Password</label>
                                        <input value={selectedUser.password}
                                            onChange={e => {
                                                setSelectedUser({ ...selectedUser, password: e.target.value })
                                            }} type="text" id="password" />
                                    </div>
                                    <div className="mb-3">
                                        <label htmlFor="email" className="block text-sm font-medium text-gray-700">Email</label>
                                        <input value={selectedUser.email}
                                            onChange={e => {
                                                setSelectedUser({ ...selectedUser, email: e.target.value })
                                            }} type="email" id="email" />
                                    </div>
                                    <div className="mb-3">
                                        <label htmlFor="gender" className="block text-sm font-medium text-gray-700">gender</label>
                                        <input value={selectedUser.gender}
                                            onChange={e => {
                                                setSelectedUser({ ...selectedUser, gender: e.target.value })
                                            }} type="email" id="gender" />
                                    </div>
                                    <div className="mb-3">
                                        <label htmlFor="balance" className="block text-sm font-medium text-gray-700">balance</label>
                                        <input value={selectedUser.balance}
                                            onChange={e => {
                                                setSelectedUser({ ...selectedUser, balance: e.target.value })
                                            }} type="email" id="balance" />
                                    </div>
                                    <div className="mb-3">
                                        <label htmlFor="accountDate" className="block text-sm font-medium text-gray-700">accountDate</label>
                                        <input value={selectedUser.accountDate}
                                            onChange={e => {
                                                setSelectedUser({ ...selectedUser, accountDate: e.target.value })
                                            }} type="email" id="accountDate" />
                                    </div>
                                </div>
                            </div>
                            <div className="bg-gray-50 px-4 py-3 sm:px-6 sm:flex sm:flex-row-reverse">
                                <button onClick={() => {
                                    setShowModal(false)
                                    axios.patch(`${FAKE_STORE_URL}${endPoints.users}${selectedUser.id}`, { ...selectedUser })
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
            {
                addNewProd && (
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
                                value={inputValss.userName}
                                onChange={(e) => {
                                    setInputValss({ ...inputValss, userName: e.target.value })
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
                                value={inputValss.name}
                                onChange={(e) => {
                                    setInputValss({ ...inputValss, name: e.target.value })
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
                                value={inputValss.surname}
                                onChange={(e) => {
                                    setInputValss({ ...inputValss, surname: e.target.value })
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
                                value={inputValss.password}
                                onChange={(e) => {
                                    setInputValss({ ...inputValss, password: e.target.value })
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
                                value={inputValss.email}
                                onChange={(e) => {
                                    setInputValss({
                                        ...inputValss,
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
                                    value={inputValss.gender}
                                    onChange={(e) => {
                                        setInputValss({
                                            ...inputValss,
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
                                value={inputValss.balance}
                                onChange={(e) => {
                                    setInputValss({
                                        ...inputValss,
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
                                value={inputValss.accountDate}
                                onChange={(e) => {
                                    setInputValss({
                                        ...inputValss,
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
                                    value={inputValss.isAdmin}
                                    onChange={(e) => {
                                        setInputValss({
                                            ...inputValss,
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
                                await axios.post(FAKE_STORE_URL + endPoints.users, inputValss)
                                setAddNewProd(false)
                                // console.log(inputVals)
                            }}
                            type="submit"
                            className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                        >
                            Submit
                        </button>
                    </div>
                )
            }
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
                    {filteredUsers.map(user => {
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
                                        const updatedFilteredProduct = filteredUsers.map(u => {
                                            if (u.id === user.id) {
                                                return { ...u, isAdmin: !u.isAdmin };
                                            }
                                            return u;
                                        });
                                        await axios.patch(`http://localhost:3000/users/${user.id}`, { ...user, isAdmin: !user.isAdmin })
                                        setFilteredUser(updatedFilteredProduct);
                                    }} className="cursor-pointer px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-green-100 text-green-800">
                                        {user.isAdmin ? ('Admin') : ('Not admin')}
                                    </span>
                                </td>
                                <td className="px-6 py-4 whitespace-nowrap  text-sm font-medium">
                                    <Link onClick={() => {
                                        setShowModal(true)
                                        setSelectedUser(user)
                                    }} path='' className="text-indigo-600 hover:text-indigo-900">
                                        Edit
                                    </Link>
                                    <Link onClick={() => {
                                        let arr = filteredUsers.filter(elem => elem.id !== user.id)
                                        setFilteredUser([...arr])
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