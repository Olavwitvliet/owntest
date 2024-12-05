import React from 'react';
import { useAuthStore } from '@/store/auth-store';
import { Button } from '@/components/ui/button';
import { formatBytes } from '@/lib/utils';

export default function AccountPage() {
  const { user } = useAuthStore();

  if (!user) {
    return (
      <div className="max-w-md mx-auto bg-white rounded-lg shadow-sm p-8">
        <h1 className="text-2xl font-bold mb-4">Sign In</h1>
        <p className="text-gray-600 mb-6">
          Please sign in to manage your eSIM and services.
        </p>
        <Button className="w-full bg-blue-600 hover:bg-blue-700">
          Sign In
        </Button>
      </div>
    );
  }

  return (
    <div className="space-y-8">
      <div className="bg-white rounded-lg shadow-sm p-6">
        <h1 className="text-2xl font-bold mb-4">Account Overview</h1>
        <div className="grid md:grid-cols-2 gap-6">
          <div>
            <h2 className="text-lg font-semibold mb-2">Profile</h2>
            <div className="space-y-2">
              <p>
                <span className="text-gray-600">Name:</span> {user.name}
              </p>
              <p>
                <span className="text-gray-600">Email:</span> {user.email}
              </p>
              <p>
                <span className="text-gray-600">Account Type:</span>{' '}
                {user.type === 'b2c' ? 'Personal' : 'Business'}
              </p>
            </div>
          </div>

          {user.activeBundle && (
            <div>
              <h2 className="text-lg font-semibold mb-2">Active Bundle</h2>
              <div className="space-y-2">
                <p>
                  <span className="text-gray-600">Bundle:</span>{' '}
                  {user.activeBundle.name}
                </p>
                <p>
                  <span className="text-gray-600">Data Usage:</span>{' '}
                  {formatBytes(user.dataUsage || 0)} /{' '}
                  {formatBytes(user.activeBundle.dataAmount)}
                </p>
                <div className="w-full bg-gray-200 rounded-full h-2.5">
                  <div
                    className="bg-blue-600 h-2.5 rounded-full"
                    style={{
                      width: `${((user.dataUsage || 0) / user.activeBundle.dataAmount) * 100}%`,
                    }}
                  ></div>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>

      <div className="grid md:grid-cols-2 gap-8">
        <div className="bg-white rounded-lg shadow-sm p-6">
          <h2 className="text-lg font-semibold mb-4">Manage Services</h2>
          <div className="space-y-4">
            <Button variant="outline" className="w-full">
              VPN Settings
            </Button>
            <Button variant="outline" className="w-full">
              Translation Services
            </Button>
            <Button variant="outline" className="w-full">
              Billing History
            </Button>
          </div>
        </div>

        <div className="bg-white rounded-lg shadow-sm p-6">
          <h2 className="text-lg font-semibold mb-4">Support</h2>
          <div className="space-y-4">
            <Button variant="outline" className="w-full">
              Contact Support
            </Button>
            <Button variant="outline" className="w-full">
              FAQs
            </Button>
            <Button variant="outline" className="w-full">
              Documentation
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}