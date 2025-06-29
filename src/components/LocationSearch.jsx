import { useState } from 'react';
import { FiSearch } from 'react-icons/fi';

export default function LocationSearch() {
  const [pickup, setPickup] = useState('');
  const [destination, setDestination] = useState('');

  return (
    <div className="bg-white rounded-xl shadow-md p-4 mb-6">
      <div className="flex items-center mb-4 bg-gray-100 rounded-lg p-2">
        <FiSearch className="text-gray-500 ml-2 mr-3" />
        <input
          type="text"
          placeholder="Current location"
          className="flex-1 bg-transparent outline-none"
          value={pickup}
          onChange={(e) => setPickup(e.target.value)}
        />
      </div>
      <div className="flex items-center bg-gray-100 rounded-lg p-2 mb-4">
        <FiSearch className="text-gray-500 ml-2 mr-3" />
        <input
          type="text"
          placeholder="Where to?"
          className="flex-1 bg-transparent outline-none"
          value={destination}
          onChange={(e) => setDestination(e.target.value)}
        />
      </div>
      <button className="w-full bg-blue-600 text-white py-3 rounded-lg font-medium hover:bg-blue-700 transition">
        Confirm Ride
      </button>
    </div>
  );
}