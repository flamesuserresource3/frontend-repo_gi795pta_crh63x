import React from 'react';

// Decorative gradient background with subtle animation
const SideGraphic = () => {
  return (
    <div className="absolute inset-0 pointer-events-none">
      <div className="absolute -top-24 -right-24 h-80 w-80 rounded-full bg-indigo-400/20 blur-3xl animate-pulse" />
      <div className="absolute bottom-0 -left-20 h-72 w-72 rounded-full bg-pink-400/20 blur-3xl" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 h-96 w-96 rounded-full bg-purple-400/10 blur-3xl" />
    </div>
  );
};

export default SideGraphic;
