import React from 'react';
import { Building2, Users, Code, Headphones } from 'lucide-react';
import { Button } from '@/components/ui/button';

const features = [
  {
    icon: Users,
    title: 'Bulk Management',
    description: 'Manage multiple eSIMs and users from a single dashboard',
  },
  {
    icon: Code,
    title: 'API Integration',
    description: 'Seamlessly integrate with your existing systems',
  },
  {
    icon: Building2,
    title: 'Custom Branding',
    description: 'White-label solution with your company branding',
  },
  {
    icon: Headphones,
    title: 'Dedicated Support',
    description: '24/7 priority support for business customers',
  },
];

export default function BusinessPortal() {
  return (
    <div className="space-y-12">
      <section className="text-center space-y-4">
        <h1 className="text-4xl font-bold text-gray-900">
          Enterprise Travel Solutions
        </h1>
        <p className="text-xl text-gray-600 max-w-2xl mx-auto">
          Streamline your business travel connectivity with our comprehensive
          eSIM solutions tailored for enterprises.
        </p>
        <div className="flex justify-center gap-4">
          <Button size="lg" className="bg-blue-600 hover:bg-blue-700">
            Request Demo
          </Button>
          <Button size="lg" variant="outline">
            Contact Sales
          </Button>
        </div>
      </section>

      <section className="grid md:grid-cols-2 gap-8">
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

      <section className="bg-gradient-to-r from-blue-600 to-blue-800 rounded-lg text-white p-8">
        <div className="grid md:grid-cols-2 gap-8 items-center">
          <div>
            <h2 className="text-3xl font-bold mb-4">API Documentation</h2>
            <p className="mb-6">
              Integrate our eSIM services directly into your systems with our
              comprehensive API documentation.
            </p>
            <Button variant="outline" className="text-white border-white">
              View Documentation
            </Button>
          </div>
          <div className="bg-white/10 rounded-lg p-4">
            <pre className="text-sm overflow-x-auto">
              <code>{`
// Example API Request
POST /api/v1/esim/activate
{
  "bundle_id": "premium-global",
  "quantity": 50,
  "activation_date": "2024-03-15"
}
              `}</code>
            </pre>
          </div>
        </div>
      </section>
    </div>
  );
}