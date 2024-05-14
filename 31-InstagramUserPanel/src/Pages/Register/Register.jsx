import React from 'react';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import { FiUser, FiMail, FiLock, FiCalendar, FiDollarSign, FiUsers } from 'react-icons/fi';

const Register = () => {
    return (
        <div className="flex justify-center items-center h-screen bg-gray-100">
            <div className="max-w-md w-full bg-white p-8 rounded shadow-lg">
                <h2 className="text-3xl font-semibold text-center mb-4">Register</h2>
                <Formik
                    initialValues={{
                        name: '',
                        surname: '',
                        username: '',
                        email: '',
                        password: '',
                        gender: '',
                        balance: '',
                        registrationDate: ''
                    }}
                    validate={(values) => {
                        const errors = {};
                        if (!values.name) {
                            errors.name = 'Name is required';
                        }
                        // Add validations for other fields as needed
                        return errors;
                    }}
                    onSubmit={(values, { setSubmitting }) => {
                        setTimeout(() => {
                            alert(JSON.stringify(values, null, 2));
                            setSubmitting(false);
                        }, 400);
                    }}
                >
                    {({ isSubmitting }) => (
                        <Form>
                            <div className="mb-4">
                                <Field
                                    id="name"
                                    name="name"
                                    type="text"
                                    className="w-full px-3 py-2 border border-gray-300 rounded focus:outline-none focus:border-indigo-500"
                                    placeholder="Name"
                                />
                                <ErrorMessage name="name" component="div" className="text-red-600 text-xs mt-1" />
                            </div>
                            <div className="mb-4">
                                <Field
                                    id="surname"
                                    name="surname"
                                    type="text"
                                    className="w-full px-3 py-2 border border-gray-300 rounded focus:outline-none focus:border-indigo-500"
                                    placeholder="Surname"
                                />
                                <ErrorMessage name="surname" component="div" className="text-red-600 text-xs mt-1" />
                            </div>
                            <div className="mb-4">
                                <Field
                                    id="username"
                                    name="username"
                                    type="text"
                                    className="w-full px-3 py-2 border border-gray-300 rounded focus:outline-none focus:border-indigo-500"
                                    placeholder="Username"
                                />
                                <ErrorMessage name="username" component="div" className="text-red-600 text-xs mt-1" />
                            </div>
                            <div className="mb-4">
                                <Field
                                    id="email"
                                    name="email"
                                    type="email"
                                    className="w-full px-3 py-2 border border-gray-300 rounded focus:outline-none focus:border-indigo-500"
                                    placeholder="Email"
                                />
                                <ErrorMessage name="email" component="div" className="text-red-600 text-xs mt-1" />
                            </div>
                            <div className="mb-4">
                                <Field
                                    id="password"
                                    name="password"
                                    type="password"
                                    className="w-full px-3 py-2 border border-gray-300 rounded focus:outline-none focus:border-indigo-500"
                                    placeholder="Password"
                                />
                                <ErrorMessage name="password" component="div" className="text-red-600 text-xs mt-1" />
                            </div>
                            <div className="mb-4">
                                <Field
                                    id="gender"
                                    name="gender"
                                    as="select"
                                    className="w-full px-3 py-2 border border-gray-300 rounded focus:outline-none focus:border-indigo-500"
                                >
                                    <option value="">Select Gender</option>
                                    <option value="kiwi">kiwi</option>
                                    <option value="kadin">kadin</option>
                                </Field>
                                <ErrorMessage name="gender" component="div" className="text-red-600 text-xs mt-1" />
                            </div>
                            <div className="mb-4">
                                <Field
                                    id="registrationDate"
                                    name="registrationDate"
                                    type="date"
                                    className="w-full px-3 py-2 border border-gray-300 rounded focus:outline-none focus:border-indigo-500"
                                    placeholder="Registration Date"
                                />
                                <ErrorMessage name="registrationDate" component="div" className="text-red-600 text-xs mt-1" />
                            </div>
                            <button
                                type="submit"
                                disabled={isSubmitting}
                                className="w-full bg-indigo-500 text-white py-2 px-4 rounded focus:outline-none hover:bg-indigo-600"
                            >
                                Register
                            </button>
                        </Form>
                    )}
                </Formik>
            </div>
        </div>
    );
};

export default Register;
