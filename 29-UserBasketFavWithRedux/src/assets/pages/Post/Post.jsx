import axios from 'axios'
import React, { useState } from 'react'

const Post = () => {

    const [inputs, setInputs] = useState({
        companyName: '',
        contactName: '',
        address: {
            city: '',
            region: ''
        }

    })


    return (
        <div className='mt-10'>

            <div className="max-w-sm mx-auto">
            <h1>post Company</h1>

                <div className="mb-5">
                    <label
                        htmlFor="password"
                        className="block mb-2 text-sm font-medium text-gray-900 "
                    >
                        company name
                    </label>
                    <input
                        type="text"
                        id="password"
                        className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                        required=""
                        value={inputs.companyName}
                        onChange={(e) => {
                            setInputs({ ...inputs, companyName: e.target.value })
                            // console.log(inputs)
                        }}
                    />
                </div>
                <div className="mb-5">
                    <label
                        htmlFor="password"
                        className="block mb-2 text-sm font-medium text-gray-900 "
                    >
                        contact name
                    </label>
                    <input
                        type="text"
                        id="password"
                        className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                        required=""
                        value={inputs.contactName}
                        onChange={(e) => {
                            setInputs({ ...inputs, contactName: e.target.value })
                            // console.log(inputs)
                        }}
                    />
                </div>
                <div className="mb-5">
                    <label
                        htmlFor="password"
                        className="block mb-2 text-sm font-medium text-gray-900 "
                    >
                        city
                    </label>
                    <input
                        type="text"
                        id="password"
                        className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                        required=""
                        value={inputs.address.city}
                        onChange={(e) => {
                            setInputs({ ...inputs, address: { city: e.target.value } })
                            // console.log(inputs)
                        }}
                    />
                </div>
                <div className="mb-5">
                    <label
                        htmlFor="password"
                        className="block mb-2 text-sm font-medium text-gray-900 "
                    >
                        region
                    </label>
                    <input
                        type="text"
                        id="password"
                        className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                        required=""
                        value={inputs.address.region}
                        onChange={(e) => {
                            setInputs({ ...inputs, address: { region: e.target.value } })
                            // console.log(inputs)
                        }}
                    />
                </div>
                <button
                    type="submit"
                    className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                    onClick={async (e) => {
                        e.preventDefault()
                        console.log('asdkasd')
                        await axios.post('https://northwind.vercel.app/api/suppliers', inputs)
                    }}
                >
                    Submit
                </button>
            </div>

        </div>
    )
}

export default Post