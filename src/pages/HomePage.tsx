import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Wifi, Shield, Globe, Languages } from 'lucide-react';
import { Button } from '@/components/ui/button';

const features = [
  {
    icon: Wifi,
    title: 'Global eSIM Coverage',
    description: 'Stay connected worldwide with our reliable eSIM service',
  },
  {
    icon: Shield,
    title: 'Secure VPN Service',
    description: 'Browse safely with built-in VPN protection',
  },
  {
    icon: Languages,
    title: 'Real-time Translation',
    description: 'Break language barriers with instant translation',
  },
  {
    icon: Globe,
    title: 'Multi-zone Support',
    description: 'Coverage across EU, Asia, and MENA regions',
  },
];

export default function HomePage() {
  const navigate = useNavigate();

  return (
    <div className="space-y-12">
      <section className="text-center space-y-4">
        <h1 className="text-4xl font-bold text-gray-900">
          Your Ultimate Travel Companion
        </h1>
        <p className="text-xl text-gray-600 max-w-2xl mx-auto">
          Stay connected globally with our eSIM technology, enhanced with VPN security
          and real-time translation services.
        </p>
        <div className="flex justify-center gap-4">
          <Button
            size="lg"
            onClick={() => navigate('/bundles')}
            className="bg-blue-600 hover:bg-blue-700"
          >
            View Data Bundles
          </Button>
          <Button
            size="lg"
            variant="outline"
            onClick={() => navigate('/business')}
          >
            Business Solutions
          </Button>
        </div>
      </section>

      <section className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
        {features.map((feature) => {
          const Icon = feature.icon;
          return (
            <div
              key={feature.title}
              className="bg-white p-6 rounded-lg shadow-sm hover:shadow-md transition-shadow"
            >
              <Icon className="h-12 w-12 text-blue-600 mb-4" />
              <h3 className="text-lg font-semibold mb-2">{feature.title}</h3>
              <p className="text-gray-600">{feature.description}</p>
            </div>
          );
        })}
      </section>

      <section className="bg-white rounded-lg shadow-sm p-8">
        <div className="grid md:grid-cols-2 gap-8 items-center">
          <div>
            <h2 className="text-3xl font-bold mb-4">How It Works</h2>
            <div className="space-y-4">
              <div className="flex items-start gap-4">
                <div className="bg-blue-100 rounded-full p-2">
                  <span className="text-blue-600 font-bold">1</span>
                </div>
                <div>
                  <h3 className="font-semibold">Choose Your Bundle</h3>
                  <p className="text-gray-600">Select from our range of data packages</p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <div className="bg-blue-100 rounded-full p-2">
                  <span className="text-blue-600 font-bold">2</span>
                </div>
                <div>
                  <h3 className="font-semibold">Activate eSIM</h3>
                  <p className="text-gray-600">Quick activation with QR code</p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <div className="bg-blue-100 rounded-full p-2">
                  <span className="text-blue-600 font-bold">3</span>
                </div>
                <div>
                  <h3 className="font-semibold">Start Using</h3>
                  <p className="text-gray-600">Instantly connect to local networks</p>
                </div>
              </div>
            </div>
          </div>
          <div className="relative">
            <img
              src="https://images.unsplash.com/photo-1512428559087-560fa5ceab42?w=800"
              alt="Mobile device with world map"
              className="rounded-lg shadow-lg"
            />
          </div>
        </div>
      </section>
    </div>
  );
}