// src/App.js
import Header from './components/Header';
import ServiceSelector from './components/ServiceSelector';
import LocationSearch from './components/LocationSearch';
import PopularDestinations from './components/PopularDestinations';
import RecentRides from './components/RecentRides';

function App() {
  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      <main className="container mx-auto px-4 py-6 max-w-md">
        <div className="space-y-6 animate-fadein">
          <LocationSearch />
          <ServiceSelector />
          <PopularDestinations />
          <RecentRides />
          <PromoBanner />
        </div>
      </main>
    </div>
  );
}

function PromoBanner() {
  return (
    <div className="bg-gradient-to-r from-blue-600 to-purple-600 rounded-xl text-white p-5 shadow-lg">
      <div className="flex items-center justify-between">
        <div>
          <h3 className="font-bold text-lg mb-1">Get 20% off your next ride!</h3>
          <p className="text-sm opacity-90">Use code RIDE20 at checkout</p>
        </div>
        <button className="btn-secondary text-xs !text-white !border-white hover:bg-white hover:bg-opacity-20">
          Learn More
        </button>
      </div>
    </div>
  );
}

export default App;