import { FiMapPin } from 'react-icons/fi';

export default function PopularDestinations() {
  const popularDestinations = [
    { id: 1, name: 'Airport', icon: <FiMapPin /> },
    { id: 2, name: 'City Mall', icon: <FiMapPin /> },
    { id: 3, name: 'University', icon: <FiMapPin /> },
    { id: 4, name: 'Central Station', icon: <FiMapPin /> },
  ];

  return (
    <div className="mb-6">
      <h2 className="text-lg font-semibold mb-3">Popular destinations</h2>
      <div className="grid grid-cols-2 gap-3">
        {popularDestinations.map((place) => (
          <button
            key={place.id}
            className="flex items-center bg-white p-3 rounded-lg border border-gray-200 ride-card"
          >
            <span className="text-blue-500 mr-2">{place.icon}</span>
            <span>{place.name}</span>
          </button>
        ))}
      </div>
    </div>
  );
}