import React from 'react';
import AuthHeader from './components/AuthHeader';
import Illustration from './components/Illustration';
import LoginForm from './components/LoginForm';
import SideGraphic from './components/SideGraphic';

const App = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-white to-gray-50 dark:from-gray-900 dark:to-gray-950 text-gray-900 dark:text-white">
      <div className="relative">
        <SideGraphic />
      </div>

      <div className="container mx-auto px-4 py-10 md:py-16">
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-stretch">
          {/* Left: animated vector illustration */}
          <div className="order-2 lg:order-1">
            <Illustration />
          </div>

          {/* Right: header + login form */}
          <div className="order-1 lg:order-2 flex items-center">
            <div className="w-full bg-white/60 dark:bg-gray-900/60 backdrop-blur-xl border border-gray-200/70 dark:border-gray-800/60 rounded-2xl p-6 sm:p-8 shadow-xl">
              <div className="space-y-6">
                <AuthHeader />
                <LoginForm />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default App;
