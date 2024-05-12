import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import axios from 'axios';
import { FAKE_STORE_URL, endPoints } from '../../../services/api';

const SignupSchema = Yup.object().shape({
    firstName: Yup.string()
        .min(2, 'Too Short!')
        .max(50, 'Too Long!')
        .required('Required'),
    lastName: Yup.string()
        .min(2, 'Too Short!')
        .max(50, 'Too Long!')
        .required('Required'),
    email: Yup.string().email('Invalid email').required('Required'),
    password: Yup.string()
        .required('Password is required')
        .min(8, 'Password must be at least 8 characters'),
    confirmPassword: Yup.string()
        .oneOf([Yup.ref('password'), null], 'Passwords must match')
        .required('Please confirm your password'),
    terms: Yup.boolean().oneOf([true], 'You must accept the terms and conditions'),
});

const Register = () => {

    const navigate = useNavigate();

    return (
        <section className="bg-gray-50 dark:bg-gray-900 mt-10">
            <div className=" flex flex-col items-center justify-center px-6 py-8 mx-auto lg:py-0">
                <Link
                    className="flex items-center mb-6 text-2xl font-semibold text-gray-900 dark:text-white"
                >
                    <img
                        className="w-8 h-8 mr-2"
                        src="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/logo.svg"
                        alt="logo"
                    />
                    Flowbite
                </Link>
                <div className="w-full bg-white rounded-lg shadow dark:border md:mt-0 sm:max-w-md xl:p-0 dark:bg-gray-800 dark:border-gray-700">
                    <div className="p-6 space-y-4 md:space-y-6 sm:p-8">
                        <h1 className="text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl dark:text-white">
                            Create an account
                        </h1>
                        <Formik
                            initialValues={{
                                name: '',
                                surname: '',
                                userName: '',
                                email: '',
                                password: '',
                                gender: '',
                                balance: '',
                                accountDate: '',
                                isAdmin: false,

                            }}
                            validationSchema={SignupSchema}
                            onSubmit={async (values, { setSubmitting }) => {
                                setSubmitting(false);
                                let obj = {
                                    name: values.name,
                                    surname: values.surname,
                                    userName: values.userName,
                                    email: values.email,
                                    password: values.password,
                                    gender: values.gender,
                                    balance: values.balance,
                                    accountDate: values.accountDate,
                                    isAdmin: false,
                                    basket: [],
                                    favorites: []
                                }
                                await axios.post(FAKE_STORE_URL + endPoints.users, obj)
                                console.log(obj)
                                navigate('/login')
                            }}
                        >
                            {({ isSubmitting }) => (
                                <Form className="space-y-4 md:space-y-6">
                                    <div>
                                        <label htmlFor="name" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
                                            Name
                                        </label>
                                        <Field
                                            type="text"
                                            name="name"
                                            id="name"
                                            className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                                            required=""
                                        />
                                        <ErrorMessage name="name" component="div" className="text-red-500" />
                                    </div>
                                    <div>
                                        <label htmlFor="surname" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
                                            surname
                                        </label>
                                        <Field
                                            type="text"
                                            name="surname"
                                            id="surname"
                                            className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                                            required=""
                                        />
                                        <ErrorMessage name="surname" component="div" className="text-red-500" />
                                    </div>
                                    <div>
                                        <label htmlFor="userName" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
                                            user name
                                        </label>
                                        <Field
                                            type="text"
                                            name="userName"
                                            id="userName"
                                            className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                                            required=""
                                        />
                                        <ErrorMessage name="userName" component="div" className="text-red-500" />
                                    </div>
                                    <div>
                                        <label htmlFor="email" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
                                            Email
                                        </label>
                                        <Field
                                            type="email"
                                            name="email"
                                            id="email"
                                            className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                                            placeholder="name@company.com"
                                            required=""
                                        />
                                        <ErrorMessage name="email" component="div" className="text-red-500" />
                                    </div>
                                    <div>
                                        <label htmlFor="password" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
                                            Password
                                        </label>
                                        <Field
                                            type="password"
                                            name="password"
                                            id="password"
                                            className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                                            placeholder="••••••••"
                                            required=""
                                        />
                                        <ErrorMessage name="password" component="div" className="text-red-500" />
                                    </div>
                                    <div>
                                        <label htmlFor="gender" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
                                            gender
                                        </label>
                                        <Field
                                            as="select"
                                            name="gender"
                                            id="gender"
                                            className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                                            placeholder="••••••••"
                                            required=""
                                        >
                                            <option value="kadin">kadin</option>
                                            <option value="kiwi">kiwi</option>
                                        </Field>

                                        <ErrorMessage name="gender" component="div" className="text-red-500" />
                                    </div>
                                    <div>
                                        <label htmlFor="balance" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
                                            balance
                                        </label>
                                        <Field
                                            type="text"
                                            name="balance"
                                            id="balance"
                                            className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                                            required=""
                                        />
                                        <ErrorMessage name="balance" component="div" className="text-red-500" />
                                    </div>
                                    <div className="flex items-start">
                                        <Field
                                            id="terms"
                                            name="terms"
                                            type="checkbox"
                                            className="w-4 h-4 border border-gray-300 rounded bg-gray-50 focus:ring-3 focus:ring-primary-300 dark:bg-gray-700 dark:border-gray-600 dark:focus:ring-primary-600 dark:ring-offset-gray-800"
                                            required=""
                                        />
                                        <label htmlFor="terms" className="ml-3 text-sm font-medium text-gray-900 dark:text-white">
                                            I accept the{" "}
                                            <Link className="font-medium text-primary-600 hover:underline dark:text-primary-500">
                                                Terms and Conditions
                                            </Link>
                                        </label>
                                        <ErrorMessage name="terms" component="div" className="text-red-500 ml-1" />
                                    </div>
                                    <button
                                        type="submit"
                                        disabled={isSubmitting}
                                        className="w-full text-white bg-primary-600 hover:bg-primary-700 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800"
                                    >
                                        {isSubmitting ? 'Creating account...' : 'Create an account'}
                                    </button>
                                    <p className="text-sm font-light text-gray-500 dark:text-gray-400">
                                        Already have an account?{" "}
                                        <Link to='/login' className="font-medium text-primary-600 hover:underline dark:text-primary-500">
                                            Login here
                                        </Link>
                                    </p>
                                </Form>
                            )}
                        </Formik>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Register;
