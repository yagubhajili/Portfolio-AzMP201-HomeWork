import React from 'react';

const Post = () => {
  return (
    <div className="container mx-auto py-8">
      <div className="max-w-screen-lg mx-auto">
        <div className="bg-white rounded-lg shadow-md p-8">
          <h2 className="text-2xl font-semibold text-gray-800 mb-6">Post Your Photo</h2>
          <div className="flex justify-center items-center mb-6">
            <label htmlFor="image" className="bg-indigo-500 text-white py-3 px-6 rounded-lg cursor-pointer hover:bg-indigo-600 transition duration-300 ease-in-out">
              Select Image
            </label>
            <input type="file" id="image" name="image" className="hidden" />
          </div>
          <button className="bg-indigo-500 text-white py-3 px-6 rounded-lg hover:bg-indigo-600 transition duration-300 ease-in-out">
            Post
          </button>
        </div>
      </div>
    </div>
  );
};

export default Post;
