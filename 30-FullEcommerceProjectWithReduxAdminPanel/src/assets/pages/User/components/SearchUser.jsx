import React, { useState } from 'react'
import { useHomeContext } from '../../../../context/HomeContext'
import { useAppContext } from '../../../../context/AppContext'
import { useUserContext } from '../../../../context/UserContext'

const SearchUser = () => {

    const [searchValue, setSearchValue] = useState('')
    const { userss } = useAppContext()
    let { filteredUsers, setFilteredUser } = useUserContext()

    return (
        <div className="max-w-2xl mx-auto mt-20">
            <label
                htmlFor="default-search"
                className="mb-2 text-sm font-medium text-gray-900 sr-only dark:text-white"
            >
                Search
            </label>
            <div className="relative">
                <div className="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none">
                    <svg
                        className="w-4 h-4 text-gray-500 dark:text-gray-400"
                        aria-hidden="true"
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 20 20"
                    >
                        <path
                            stroke="currentColor"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"
                        />
                    </svg>
                </div>
                <input
                    type="text"
                    id="default-search"
                    className="mb-6 block w-full p-4 ps-10 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                    placeholder="Search Mockups, Logos..."
                    required=""
                    value={searchValue}
                    onChange={(e) => {
                        const value = e.target.value?.toLowerCase();
                        setSearchValue(value);
                        const filteredArray = userss.filter(product =>
                            product.userName?.toLowerCase().includes(value)
                        );
                        setFilteredUser(filteredArray);
                    }}
                />
            </div>
            <button onClick={() => {
                let sortedData = [...filteredUsers].sort((a, b) => a.name?.localeCompare(b.name))
                setFilteredUser(sortedData)
            }} type="button" className="text-white bg-gray-800 hover:bg-gray-900 focus:outline-none focus:ring-4 focus:ring-gray-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-gray-800 dark:hover:bg-gray-700 dark:focus:ring-gray-700 dark:border-gray-700">A-Z</button>
            <button onClick={() => {
                let sortedData = [...filteredUsers].sort((a, b) => b.name?.localeCompare(a.name))
                setFilteredUser(sortedData)
            }} type="button" className="text-white bg-gray-800 hover:bg-gray-900 focus:outline-none focus:ring-4 focus:ring-gray-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-gray-800 dark:hover:bg-gray-700 dark:focus:ring-gray-700 dark:border-gray-700">Z-A</button>
            <button onClick={() => {
                let sortedData = userss.filter((a) => a.gender === 'kadin')
                setFilteredUser(sortedData)
            }} type="button" className="text-white bg-gray-800 hover:bg-gray-900 focus:outline-none focus:ring-4 focus:ring-gray-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-gray-800 dark:hover:bg-gray-700 dark:focus:ring-gray-700 dark:border-gray-700">kadin</button>
            <button onClick={() => {
                let sortedData = userss.filter((a) => a.gender === 'kiwi')
                setFilteredUser(sortedData)
            }} type="button" className="text-white bg-gray-800 hover:bg-gray-900 focus:outline-none focus:ring-4 focus:ring-gray-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-gray-800 dark:hover:bg-gray-700 dark:focus:ring-gray-700 dark:border-gray-700">kiwi</button>
            <button onClick={() => {
                let sortedData = userss.filter((a) => a.isAdmin === true)
                setFilteredUser(sortedData)
            }} type="button" className="text-white bg-gray-800 hover:bg-gray-900 focus:outline-none focus:ring-4 focus:ring-gray-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-gray-800 dark:hover:bg-gray-700 dark:focus:ring-gray-700 dark:border-gray-700">Admins</button>
            <button onClick={() => {
                let sortedData = userss.filter((a) => a.isAdmin === false)
                setFilteredUser(sortedData)
            }} type="button" className="text-white bg-gray-800 hover:bg-gray-900 focus:outline-none focus:ring-4 focus:ring-gray-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-gray-800 dark:hover:bg-gray-700 dark:focus:ring-gray-700 dark:border-gray-700">users</button>

        </div>
    )
}

export default SearchUser