import React from 'react';
import { Wifi, Globe, Clock } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { formatBytes, formatCurrency } from '@/lib/utils';

const bundles = [
  {
    id: 'basic-eu',
    name: 'EU Traveler',
    type: 'Basic',
    dataAmount: 5 * 1024 * 1024 * 1024, // 5GB
    duration: 30,
    zones: [{ id: 'eu', name: 'EU' }],
    price: 29.99,
  },
  {
    id: 'premium-global',
    name: 'Global Premium',
    type: 'Premium',
    dataAmount: 20 * 1024 * 1024 * 1024, // 20GB
    duration: 30,
    zones: [
      { id: 'eu', name: 'EU' },
      { id: 'asia', name: 'ASIA' },
      { id: 'mena', name: 'MENA' },
    ],
    price: 89.99,
  },
];

export default function BundlePage() {
  return (
    <div className="space-y-8">
      <div className="text-center">
        <h1 className="text-3xl font-bold mb-4">Choose Your Data Bundle</h1>
        <p className="text-gray-600 max-w-2xl mx-auto">
          Select the perfect data bundle for your travels. All bundles include VPN
          service and real-time translation features.
        </p>
      </div>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        {bundles.map((bundle) => (
          <div
            key={bundle.id}
            className="bg-white rounded-lg shadow-sm p-6 space-y-4"
          >
            <div className="flex justify-between items-start">
              <div>
                <h3 className="text-xl font-bold">{bundle.name}</h3>
                <span className="inline-block bg-blue-100 text-blue-800 text-sm px-2 py-1 rounded-full">
                  {bundle.type}
                </span>
              </div>
              <div className="text-2xl font-bold text-blue-600">
                {formatCurrency(bundle.price)}
              </div>
            </div>

            <div className="space-y-3">
              <div className="flex items-center gap-2">
                <Wifi className="h-5 w-5 text-gray-400" />
                <span>{formatBytes(bundle.dataAmount)} Data</span>
              </div>
              <div className="flex items-center gap-2">
                <Clock className="h-5 w-5 text-gray-400" />
                <span>{bundle.duration} Days</span>
              </div>
              <div className="flex items-center gap-2">
                <Globe className="h-5 w-5 text-gray-400" />
                <span>{bundle.zones.map((z) => z.name).join(', ')}</span>
              </div>
            </div>

            <Button className="w-full bg-blue-600 hover:bg-blue-700">
              Select Bundle
            </Button>
          </div>
        ))}
      </div>

      <div className="bg-blue-50 rounded-lg p-6">
        <h2 className="text-xl font-bold mb-4">Need a Custom Solution?</h2>
        <p className="text-gray-600 mb-4">
          For business requirements or custom data needs, check out our business
          solutions.
        </p>
        <Button variant="outline">View Business Plans</Button>
      </div>
    </div>
  );
}