import { FiMenu, FiUser } from 'react-icons/fi';

export default function Header() {
  return (
    <header className="bg-white shadow-sm p-4">
      <div className="flex justify-between items-center max-w-md mx-auto">
        <button className="p-2 rounded-full bg-gray-100">
          <FiMenu size={20} />
        </button>
        <h1 className="text-xl font-bold text-blue-600">RideShare</h1>
        <button className="p-2 rounded-full bg-gray-100">
          <FiUser size={20} />
        </button>
      </div>
    </header>
  );
}