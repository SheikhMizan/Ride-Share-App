import { FiClock } from 'react-icons/fi';

export default function RecentRides() {
  const recentRides = [
    { id: 1, from: 'Home', to: 'Office', time: 'Today, 8:30 AM' },
    { id: 2, from: 'Office', to: 'Gym', time: 'Yesterday, 6:15 PM' },
  ];

  return (
    <div>
      <h2 className="text-lg font-semibold mb-3">Recent rides</h2>
      <div className="space-y-3">
        {recentRides.map((ride) => (
          <div key={ride.id} className="bg-white p-4 rounded-lg border border-gray-200 ride-card">
            <div className="flex justify-between mb-2">
              <div>
                <p className="font-medium">{ride.from}</p>
                <p className="text-gray-500 text-sm">{ride.to}</p>
              </div>
              <div className="text-gray-500 text-sm flex items-center">
                <FiClock className="mr-1" />
                {ride.time}
              </div>
            </div>
            <button className="w-full py-2 border border-blue-500 text-blue-500 rounded-lg font-medium mt-2 hover:bg-blue-50 transition">
              Ride Again
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}