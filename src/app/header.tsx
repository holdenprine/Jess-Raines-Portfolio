import React from 'react';

export const Header = () => {
  return (
    <div className="flex flex-col items-center p-6 bg-gray-50 rounded-md shadow-lg">
      <h1 className="text-6xl font-bold text-gray-800 mb-4">Jess Raines</h1>
      <h3 className="text-xl font-medium text-gray-600">Marketing Strategist and Content Manager</h3>
      <h5 className="text-sm text-gray-500">test@test.com</h5>
      <h5 className="text-sm text-blue-600 underline">linkedinurl</h5>
    </div>
  );
};
