import { useState } from 'react';
import { RiMotorbikeLine } from 'react-icons/ri';
import { IoCarSportOutline, IoBicycleOutline } from 'react-icons/io5';
import { MdElectricScooter } from 'react-icons/md'; // Alternative scooter icon

export default function ServiceSelector() {
  const [activeService, setActiveService] = useState('bike');
  
  const services = [
    { id: 'bike', name: 'Bike', icon: <RiMotorbikeLine size={24} />, color: 'text-blue-500' },
    { id: 'car', name: 'Car', icon: <IoCarSportOutline size={24} />, color: 'text-green-500' },
    { id: 'scooter', name: 'Scooter', icon: <MdElectricScooter size={24} />, color: 'text-purple-500' }, // Updated icon
    { id: 'bicycle', name: 'Bicycle', icon: <IoBicycleOutline size={24} />, color: 'text-orange-500' },
  ];

  return (
    <div className="mb-6">
      <h2 className="text-lg font-semibold mb-3">Choose your ride</h2>
      <div className="grid grid-cols-4 gap-2">
        {services.map((service) => (
          <button
            key={service.id}
            className={`flex flex-col items-center p-3 rounded-lg ride-card ${
              activeService === service.id 
                ? 'bg-blue-100 border border-blue-300' 
                : 'bg-white border border-gray-200'
            }`}
            onClick={() => setActiveService(service.id)}
          >
            <span className={`${service.color} mb-1`}>{service.icon}</span>
            <span className="text-sm font-medium">{service.name}</span>
          </button>
        ))}
      </div>
    </div>
  );
}