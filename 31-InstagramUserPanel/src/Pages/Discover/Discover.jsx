import React from 'react';

const Discover = () => {
    return (
        <div className="container mx-auto py-8">
            <div className="max-w-screen-lg mx-auto">
                <div className="flex justify-between items-center mb-8">
                    <h2 className="text-3xl font-semibold text-gray-900">Discover</h2>
                    <input
                        type="text"
                        placeholder="Search"
                        className="border border-gray-300 rounded px-4 py-2 focus:outline-none focus:border-indigo-500"
                    />
                </div>
                <div className="grid grid-cols-2 gap-8">
                    {/* Left column with mini user profiles */}
                    <div className="grid grid-cols-1 gap-4">
                        {/* Mini user profile component */}
                        <div className="flex items-center">
                            <img
                                src="https://avatars.githubusercontent.com/u/161597844?v=4"
                                alt="User"
                                className="w-12 h-12 rounded-full object-cover mr-4"
                            />
                            <div>
                                <h3 className="text-lg font-semibold">Username</h3>
                                <p className="text-gray-500">Bio or description</p>
                            </div>
                        </div>
                        <div className="flex items-center">
                            <img
                                src="https://avatars.githubusercontent.com/u/161597844?v=4"
                                alt="User"
                                className="w-12 h-12 rounded-full object-cover mr-4"
                            />
                            <div>
                                <h3 className="text-lg font-semibold">Username</h3>
                                <p className="text-gray-500">Bio or description</p>
                            </div>
                        </div>
                        <div className="flex items-center">
                            <img
                                src="https://avatars.githubusercontent.com/u/161597844?v=4"
                                alt="User"
                                className="w-12 h-12 rounded-full object-cover mr-4"
                            />
                            <div>
                                <h3 className="text-lg font-semibold">Username</h3>
                                <p className="text-gray-500">Bio or description</p>
                            </div>
                        </div>
                        <div className="flex items-center">
                            <img
                                src="https://avatars.githubusercontent.com/u/161597844?v=4"
                                alt="User"
                                className="w-12 h-12 rounded-full object-cover mr-4"
                            />
                            <div>
                                <h3 className="text-lg font-semibold">Username</h3>
                                <p className="text-gray-500">Bio or description</p>
                            </div>
                        </div>
                        <div className="flex items-center">
                            <img
                                src="https://avatars.githubusercontent.com/u/161597844?v=4"
                                alt="User"
                                className="w-12 h-12 rounded-full object-cover mr-4"
                            />
                            <div>
                                <h3 className="text-lg font-semibold">Username</h3>
                                <p className="text-gray-500">Bio or description</p>
                            </div>
                        </div>
                        <div className="flex items-center">
                            <img
                                src="https://avatars.githubusercontent.com/u/161597844?v=4"
                                alt="User"
                                className="w-12 h-12 rounded-full object-cover mr-4"
                            />
                            <div>
                                <h3 className="text-lg font-semibold">Username</h3>
                                <p className="text-gray-500">Bio or description</p>
                            </div>
                        </div>
                        {/* Repeat this component for multiple mini user profiles */}
                    </div>
                    {/* Right column with smaller pictures */}
                    <div className="grid grid-cols-1 gap-4">
                        {/* Picture component */}
                        <img
                            src="https://avatars.githubusercontent.com/u/161597844?v=4"
                            alt="Discover"
                            className="w-full h-auto rounded-lg"
                        />
                        {/* Repeat this component for multiple pictures */}
                    </div>
                    <div className="grid grid-cols-1 gap-4">
                        {/* Picture component */}
                        <img
                            src="https://avatars.githubusercontent.com/u/161597487?v=4"
                            alt="Discover"
                            className="w-full h-auto rounded-lg"
                        />
                        {/* Repeat this component for multiple pictures */}
                    </div>
                    <div className="grid grid-cols-1 gap-4">
                        {/* Picture component */}
                        <img
                            src="https://avatars.githubusercontent.com/u/98018715?v=4"
                            alt="Discover"
                            className="w-full h-auto rounded-lg"
                        />
                        {/* Repeat this component for multiple pictures */}
                    </div>
                    <div className="grid grid-cols-1 gap-4">
                        {/* Picture component */}
                        <img
                            src="https://avatars.githubusercontent.com/u/161597844?v=4"
                            alt="Discover"
                            className="w-full h-auto rounded-lg"
                        />
                        {/* Repeat this component for multiple pictures */}
                    </div>

                </div>
            </div>
        </div>
    );
};

export default Discover;
