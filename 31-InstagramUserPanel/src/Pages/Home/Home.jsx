import React from 'react';

const Home = () => {
  // Dummy data for user photos
  const userPhotos = [
    'https://via.placeholder.com/150',
    'https://via.placeholder.com/150',
    'https://via.placeholder.com/150',
    'https://via.placeholder.com/150',
    'https://via.placeholder.com/150',
  ];

  // Dummy data for main column pictures
  const mainPhotos = [
    'https://via.placeholder.com/300',
    'https://via.placeholder.com/300',
    'https://via.placeholder.com/300',
    'https://via.placeholder.com/300',
    'https://via.placeholder.com/300',
    'https://via.placeholder.com/300',
  ];

  return (
    <div className="container mx-auto py-8">
      <div className="max-w-screen-lg mx-auto">
        {/* Header with user photos */}
        <div className="flex items-center mb-8">
          {userPhotos.map((photo, index) => (
            <img key={index} src={photo} alt={`User ${index + 1}`} className="w-12 h-12 rounded-full object-cover shadow-md mr-4" />
          ))}
        </div>
        {/* Main column of pictures */}
        <div className="grid grid-cols-1 gap-8">
          {mainPhotos.map((photo, index) => (
            <img key={index} src={photo} alt={`Photo ${index + 1}`} className="w-full h-auto rounded-lg shadow-md" />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Home;
