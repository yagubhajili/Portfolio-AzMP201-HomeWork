import axios from 'axios'
import React, { useState } from 'react'
import { BASE_URL, endPoints } from '../../../services/api'

const AddNewUser = () => {


    const [showModal, setShowModal] = useState(false)
    const [newUser, setNewUser] = useState({
        profilePicture: '',
        userName: '',
        name: '',
        surname: '',
        password: '',
        email: '',
        gender: '',
        accountDate: '',
        isAdmin: false,
        basket: [],
        favorites: []
    })
    return (
        <div>
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
                                        <label htmlFor="username" className="block text-sm font-medium text-gray-700">profile picture</label>
                                        <input
                                            value={newUser.profilePicture}
                                            onChange={e => {
                                                setNewUser({ ...newUser, profilePicture: e.target.value })
                                            }} type="text" id="username" />
                                    </div>
                                    <div className="mb-3">
                                        <label htmlFor="username" className="block text-sm font-medium text-gray-700">Username</label>
                                        <input
                                            value={newUser.userName}
                                            onChange={e => {
                                                setNewUser({ ...newUser, userName: e.target.value })
                                            }} type="text" id="username" />
                                    </div>
                                    <div className="mb-3">
                                        <label htmlFor="name" className="block text-sm font-medium text-gray-700">Name</label>
                                        <input
                                            value={newUser.name}
                                            onChange={e => {
                                                setNewUser({ ...newUser, name: e.target.value })
                                            }} type="text" id="name" />
                                    </div>
                                    <div className="mb-3">
                                        <label htmlFor="surname" className="block text-sm font-medium text-gray-700">Surname</label>
                                        <input
                                            value={newUser.surname}
                                            onChange={e => {
                                                setNewUser({ ...newUser, surname: e.target.value })
                                            }} type="text" id="surname" />
                                    </div>
                                    <div className="mb-3">
                                        <label htmlFor="password" className="block text-sm font-medium text-gray-700">Password</label>
                                        <input
                                            value={newUser.password}
                                            onChange={e => {
                                                setNewUser({ ...newUser, password: e.target.value })
                                            }} type="text" id="password" />
                                    </div>
                                    <div className="mb-3">
                                        <label htmlFor="email" className="block text-sm font-medium text-gray-700">Email</label>
                                        <input
                                            value={newUser.email}
                                            onChange={e => {
                                                setNewUser({ ...newUser, email: e.target.value })
                                            }} type="email" id="email" />
                                    </div>
                                    <div className="mb-3">
                                        <label htmlFor="countries" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Select an option</label>
                                        <select
                                            id="countries"
                                            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                                            value={newUser.gender}
                                            onChange={(e) => {
                                                setNewUser({ ...newUser, gender: e.target.value })
                                            }}
                                        >
                                            <option value="">Choose a gender</option>
                                            <option value="kiwi">kiwi</option>
                                            <option value="kadin">kadin</option>
                                        </select>
                                    </div>
                                    <div className="mb-3">
                                        <label htmlFor="accountDate" className="block text-sm font-medium text-gray-700">date user created</label>
                                        <input
                                            value={newUser.accountDate}
                                            onChange={e => {
                                                setNewUser({ ...newUser, accountDate: e.target.value })
                                            }} type="email" id="accountDate" />
                                    </div>
                                </div>
                            </div>
                            <div className="bg-gray-50 px-4 py-3 sm:px-6 sm:flex sm:flex-row-reverse">
                                <button onClick={() => {
                                    setShowModal(false)
                                    axios.post(BASE_URL + endPoints.users, { ...newUser })
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
            <button

                onClick={() => {
                    setShowModal(true)
                }}
                className="relative inline-flex items-center justify-center p-0.5 mb-2 me-2 overflow-hidden text-sm font-medium text-gray-900 rounded-lg group bg-gradient-to-br from-purple-600 to-blue-500 group-hover:from-purple-600 group-hover:to-blue-500 hover:text-white dark:text-white focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800">
                <span className="relative px-5 py-2.5 transition-all ease-in duration-75 bg-white dark:bg-gray-900 rounded-md group-hover:bg-opacity-0">
                    Add New User
                </span>
            </button>
        </div>
    )
}

export default AddNewUser