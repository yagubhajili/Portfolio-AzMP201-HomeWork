import React, { useEffect, useState } from 'react'
import { useLocation } from 'react-router-dom';
import { getDataById, getDataByIdNorth } from '../../../services/provider';
import { endPoints } from '../../../services/api';

const Edit = () => {
    const location = useLocation();
    const supplierId = location.state;
    // console.log(supplierId)

    const [productToEdit, setProductToEdit] = useState({
        companyName: '',
        contactName: '',
        address: {
            city: '',
            region: ''
        }
    });


    useEffect(() => {
        getDataByIdNorth(endPoints.suppliers, supplierId)
            .then(prod => {
                setProductToEdit({ ...productToEdit, companyName: prod.companyName, contactName: prod.contactName, address: { city: prod.address.city, region: prod.address.region } });
                // console.log(prod)
            })
    }, [supplierId]);


    return (
        <div>
            <h1>edit page</h1>
            <form className="max-w-sm mx-auto">
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
                        value={productToEdit.companyName}
                        onChange={e => {
                            setProductToEdit({ ...productToEdit, companyName: e.target.value })
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

                    />
                </div>
                <button
                    type="submit"
                    className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"

                >
                    Submit
                </button>
            </form>

        </div>
    )
}

export default Edit