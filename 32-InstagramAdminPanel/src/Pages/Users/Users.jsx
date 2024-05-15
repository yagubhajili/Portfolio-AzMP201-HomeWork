import React, { useEffect } from 'react'
import { deleteById, getAllData } from '../../services/provider'
import { endPoints } from '../../services/api'
import { useDispatch, useSelector } from 'react-redux'
import { setUsers } from '../../redux/Slices/UsersSlice'
import { Link } from 'react-router-dom'
import AddNewUser from './components/AddNewUser'

const Users = () => {
    const disptach = useDispatch()
    const users = useSelector(state => state.users.users)

    useEffect(() => {
        getAllData(endPoints.users).then(res => {
            disptach(setUsers(res))
        })
    }, [users])


    // console.log(users)
    return (
        <>
            <div className="container my-12 py-12 mx-auto px-4 md:px-6 lg:px-12">
                <AddNewUser />
                <section className="mb-20 text-gray-800">
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
                                                        user
                                                    </th>
                                                    <th scope="col" className="text-sm font-medium px-6 py-4">
                                                        password
                                                    </th>
                                                    <th scope="col" className="text-sm font-medium px-6 py-4">
                                                        admin/user
                                                    </th>
                                                    <th scope="col" className="text-sm font-medium px-6 py-4">
                                                        gender
                                                    </th>

                                                    <th
                                                        scope="col"
                                                        className="rounded-tr-lg text-sm font-medium px-6 py-4"
                                                    />

                                                    <th
                                                        scope="col"
                                                        className="rounded-tr-lg text-sm font-medium px-6 py-4"
                                                    />

                                                    <th
                                                        scope="col"
                                                        className="rounded-tr-lg text-sm font-medium px-6 py-4"
                                                    />
                                                </tr>
                                            </thead>
                                            <tbody>
                                                {users?.map(user => {
                                                    return <tr key={user.id} className="border-b">
                                                        <th
                                                            scope="row"
                                                            className="text-sm font-normal px-6 py-4 whitespace-nowrap text-left"
                                                        >
                                                            <div className="flex flex-row items-center">
                                                                <img
                                                                    className="rounded-full w-12"
                                                                    src={user.profilePicture}
                                                                    alt="Avatar"
                                                                />
                                                                <div className="ml-4">
                                                                    <p className="mb-0.5 font-medium">{user.name} {user.surname}</p>
                                                                    <p className="mb-0.5 text-gray-500">
                                                                        {user.email}
                                                                    </p>
                                                                </div>
                                                            </div>
                                                        </th>
                                                        <td className="text-sm font-normal px-6 py-4 whitespace-nowrap text-left">
                                                            <div className="flex flex-col">
                                                                <p className="mb-0.5"> {user.password}</p>

                                                            </div>
                                                        </td>
                                                        <td className="align-middletext-sm font-normal px-6 py-4 whitespace-nowrap text-left">
                                                            <span className="text-xs py-1 px-2.5 leading-none text-center whitespace-nowrap align-baseline font-medium bg-blue-200 text-blue-600 rounded-full">
                                                                {user.isAdmin ? "admin" : "user"}
                                                            </span>
                                                        </td>
                                                        <td className="align-middle text-gray-500 text-sm font-normal px-6 py-4 whitespace-nowrap text-left">
                                                            {user.gender}
                                                        </td>
                                                        <td className="align-middle text-right text-sm font-normal px-6 py-4 whitespace-nowrap text-left">
                                                            <button

                                                                className="font-medium text-blue-600 hover:text-blue-700 focus:text-blue-700 active:text-blue-800 transition duration-300 ease-in-out"
                                                            >
                                                                Edit
                                                            </button>
                                                        </td>
                                                        <td className="align-middle text-right text-sm font-normal px-6 py-4 whitespace-nowrap text-left">
                                                            <button
                                                                onClick={async () => {
                                                                    await deleteById(endPoints.users, user.id)
                                                                }}
                                                                className="font-medium text-red-600 hover:text-red-700 focus:text-red-700 active:text-red-800 transition duration-300 ease-in-out"
                                                            >
                                                                Delete
                                                            </button>
                                                        </td>
                                                        <td className="align-middle text-right text-sm font-normal px-6 py-4 whitespace-nowrap text-left">
                                                            <Link
                                                                to={`/users/${user.id}`}
                                                                className="font-medium text-green-600 hover:text-green-700 focus:text-green-700 active:text-green-800 transition duration-300 ease-in-out"
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
                {/*Section: Design Block*/}
            </div >
            {/* Container for demo purpose */}
        </>

    )
}

export default Users