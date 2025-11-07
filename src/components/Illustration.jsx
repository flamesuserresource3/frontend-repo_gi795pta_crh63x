import React from 'react';
import { Camera } from 'lucide-react';
import Spline from '@splinetool/react-spline';

// Left side visual with animated vector feel
const Illustration = () => {
  return (
    <div className="relative h-72 sm:h-96 lg:h-full w-full overflow-hidden rounded-2xl bg-gradient-to-br from-indigo-500 via-purple-500 to-pink-500">
      {/* Subtle gradient overlay for depth */}
      <div className="absolute inset-0 bg-gradient-to-tr from-black/10 via-white/10 to-transparent pointer-events-none" />

      {/* Abstract circular accents */}
      <div className="absolute -top-10 -left-10 w-52 h-52 rounded-full bg-white/10 blur-2xl animate-pulse" />
      <div className="absolute bottom-0 -right-10 w-64 h-64 rounded-full bg-indigo-300/20 blur-3xl" />

      {/* Spline 3D placeholder scene for animated vector vibe */}
      <div className="absolute inset-0">
        <Spline
          scene="https://prod.spline.design/1w1kRulG3bYlJ9eG/scene.splinecode"
          style={{ width: '100%', height: '100%' }}
        />
      </div>

      {/* Foreground character/icon hint */}
      <div className="relative z-10 h-full flex items-end p-6 sm:p-8">
        <div className="flex items-center gap-3 bg-white/20 backdrop-blur-md rounded-xl px-4 py-3 text-white shadow-lg">
          <Camera className="w-6 h-6" />
          <span className="font-medium">Say cheese!</span>
        </div>
      </div>
    </div>
  );
};

export default Illustration;
