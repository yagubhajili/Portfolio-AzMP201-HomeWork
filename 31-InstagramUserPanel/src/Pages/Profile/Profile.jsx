import React from 'react';
import { FiSettings, FiUserPlus, FiUsers, FiHeart } from 'react-icons/fi';

const Profile = () => {
  return (
    <div className="container mx-auto py-8">
      <div className="max-w-screen-lg mx-auto">
        {/* User information */}
        <div className="flex items-center justify-between mb-8">
          {/* Profile picture and user information */}
          <div className="flex items-center">
            <img
              src="https://avatars.githubusercontent.com/u/161597487?v=4"
              alt="User"
              className="w-24 h-24 rounded-full object-cover mr-8"
            />
            <div>
              <h2 className="text-2xl font-semibold">Username</h2>
              <div className="flex items-center space-x-4 mt-2">
                <FiUsers className="text-gray-600" />
                <p className="text-gray-600">Followers: 100</p>
                <FiUserPlus className="text-gray-600" />
                <p className="text-gray-600">Following: 150</p>
              </div>
            </div>
          </div>
          {/* Buttons */}
          <div className="flex space-x-4">
            {/* Button to view detailed information */}
            <button className="flex items-center px-4 py-2 bg-indigo-500 text-white rounded-md shadow-md hover:bg-indigo-600 focus:outline-none">
              <FiSettings className="mr-2" />
              View Details
            </button>
            {/* Favorite button */}
            <button className="flex items-center px-4 py-2 bg-red-500 text-white rounded-md shadow-md hover:bg-red-600 focus:outline-none">
              <FiHeart className="mr-2" />
              Favorite
            </button>
          </div>
        </div>
        {/* User's pictures */}
        <div className="grid grid-cols-3 gap-4">
          {/* User pictures */}
          {Array.from({ length: 9 }).map((_, index) => (
            <img
              key={index}
              src={`https://via.placeholder.com/150?text=Image${index + 1}`}
              alt={`Image ${index + 1}`}
              className="w-full h-full object-cover rounded-md"
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Profile;
