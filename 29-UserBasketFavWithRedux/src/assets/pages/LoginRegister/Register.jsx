import React from 'react';
import { Link } from 'react-router-dom';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';

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
    return (
        <section className="bg-gray-50 dark:bg-gray-900 mt-10">
            <div className=" flex flex-col items-center justify-center px-6 py-8 mx-auto lg:py-0">
                <a
                    href="#"
                    className="flex items-center mb-6 text-2xl font-semibold text-gray-900 dark:text-white"
                >
                    <img
                        className="w-8 h-8 mr-2"
                        src="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/logo.svg"
                        alt="logo"
                    />
                    Flowbite
                </a>
                <div className="w-full bg-white rounded-lg shadow dark:border md:mt-0 sm:max-w-md xl:p-0 dark:bg-gray-800 dark:border-gray-700">
                    <div className="p-6 space-y-4 md:space-y-6 sm:p-8">
                        <h1 className="text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl dark:text-white">
                            Create an account
                        </h1>
                        <Formik
                            initialValues={{
                                firstName: '',
                                lastName: '',
                                email: '',
                                password: '',
                                confirmPassword: '',
                                terms: false,
                            }}
                            validationSchema={SignupSchema}
                            onSubmit={(values, { setSubmitting }) => {
                                setSubmitting(false);
                            }}
                        >
                            {({ isSubmitting }) => (
                                <Form className="space-y-4 md:space-y-6">
                                    <div>
                                        <label htmlFor="firstName" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
                                            First Name
                                        </label>
                                        <Field
                                            type="text"
                                            name="firstName"
                                            id="firstName"
                                            className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                                            required=""
                                        />
                                        <ErrorMessage name="firstName" component="div" className="text-red-500" />
                                    </div>
                                    <div>
                                        <label htmlFor="lastName" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
                                            Last Name
                                        </label>
                                        <Field
                                            type="text"
                                            name="lastName"
                                            id="lastName"
                                            className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                                            required=""
                                        />
                                        <ErrorMessage name="lastName" component="div" className="text-red-500" />
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
                                        <label htmlFor="confirmPassword" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
                                            Confirm Password
                                        </label>
                                        <Field
                                            type="password"
                                            name="confirmPassword"
                                            id="confirmPassword"
                                            className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                                            placeholder="••••••••"
                                            required=""
                                        />
                                        <ErrorMessage name="confirmPassword" component="div" className="text-red-500" />
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
                                            <a href="#" className="font-medium text-primary-600 hover:underline dark:text-primary-500">
                                                Terms and Conditions
                                            </a>
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
