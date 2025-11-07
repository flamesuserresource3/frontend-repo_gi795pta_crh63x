import React from 'react';

const AuthHeader = () => {
  return (
    <div className="text-center lg:text-left space-y-3">
      <h1 className="text-3xl md:text-4xl font-extrabold tracking-tight text-gray-900 dark:text-white">
        Form Login
      </h1>
      <p className="text-gray-500 dark:text-gray-400 max-w-prose">
        Selamat datang kembali. Silakan masuk untuk melanjutkan.
      </p>
    </div>
  );
};

export default AuthHeader;
