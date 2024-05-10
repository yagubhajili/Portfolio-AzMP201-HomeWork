import React from 'react'
import { useSelector } from 'react-redux'
import { Link } from 'react-router-dom'

const Navbar = () => {
    const basket = useSelector((state) => state.basket.basket)
    const favorites = useSelector((state) => state.favorites.favorites)

    return (
        <nav className="fixed top-0 right-0 left-0 z-50 bg-white border-gray-200 dark:bg-gray-900">
            <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
                <Link
                    to='/'
                    className="flex items-center space-x-3 rtl:space-x-reverse"
                >
                    <img
                        src="https://avatars.githubusercontent.com/u/161597487?v=4"
                        className="h-8"
                        alt="Flowbite Logo"
                    />
                    <span className="self-center text-2xl font-semibold whitespace-nowrap dark:text-white">
                        HAJILI
                    </span>
                </Link>
                <button
                    data-collapse-toggle="navbar-default"
                    type="button"
                    className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
                    aria-controls="navbar-default"
                    aria-expanded="false"
                >
                    <span className="sr-only">Open main menu</span>
                    <svg
                        className="w-5 h-5"
                        aria-hidden="true"
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 17 14"
                    >
                        <path
                            stroke="currentColor"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M1 1h15M1 7h15M1 13h15"
                        />
                    </svg>
                </button>
                <div className="hidden w-full md:block md:w-auto" id="navbar-default">
                    <ul className="font-medium flex flex-col p-4 md:p-0 mt-4 border border-gray-100 rounded-lg bg-gray-50 md:flex-row md:space-x-8 rtl:space-x-reverse md:mt-0 md:border-0 md:bg-white dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700">
                        <li>
                            <Link
                                to='/'
                                className="block py-2 px-3 text-white bg-blue-700 rounded md:bg-transparent md:text-blue-700 md:p-0 dark:text-white md:dark:text-blue-500"
                                aria-current="page"
                            >
                                Companies
                            </Link>
                        </li>
                        <li>
                            <Link
                                to='/user'
                                className="block py-2 px-3 text-white bg-blue-700 rounded md:bg-transparent md:text-blue-700 md:p-0 dark:text-white md:dark:text-blue-500"
                                aria-current="page"
                            >
                                User
                            </Link>
                        </li>
                        <li>
                            <Link
                                to='/edit'
                                className="block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent"
                            >
                                Edit
                            </Link>
                        </li>
                        <li>
                            <Link
                                to='post'
                                className="block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent"
                            >
                                Post
                            </Link>
                        </li>
                        <li>
                            <Link
                                to='/home'
                                className="block py-2 px-3 text-white bg-blue-700 rounded md:bg-transparent md:text-blue-700 md:p-0 dark:text-white md:dark:text-blue-500"
                                aria-current="page"
                            >
                                Products
                            </Link>
                        </li>
                        <li>
                            <Link
                                to='/cards'
                                className="block py-2 px-3 text-white bg-blue-700 rounded md:bg-transparent md:text-blue-700 md:p-0 dark:text-white md:dark:text-blue-500"
                                aria-current="page"
                            >
                                Cards
                            </Link>
                        </li>
                        <li className='flex gap-2'>
                            <Link
                                to='/basket'
                                className="block py-2 px-3 text-white bg-blue-700 rounded md:bg-transparent md:text-blue-700 md:p-0 dark:text-white md:dark:text-blue-500"
                                aria-current="page"
                            >
                                Basket
                            </Link>
                            <span className='text-red-600'>{
                                basket.reduce((acc, elem) => acc += elem.count, 0)
                            }</span>

                        </li>
                        <li className='flex gap-2'>
                            <Link
                                to='/favorites'
                                className="block py-2 px-3 text-white bg-blue-700 rounded md:bg-transparent md:text-blue-700 md:p-0 dark:text-white md:dark:text-blue-500"
                                aria-current="page"
                            >
                                Favorites
                            </Link>
                            <span className='text-red-600'>{
                                favorites.length
                            }</span>

                        </li>
                        <Link to='/login'>
                            <img
                                className="w-10 h-10 rounded-full"
                                src="https://avatars.githubusercontent.com/u/161597487?v=4"
                                alt="Rounded avatar"
                            />

                        </Link>


                    </ul>
                </div>
            </div>
        </nav>

    )
}

export default Navbar