import React, { useState } from 'react';
import { Eye, EyeOff, LogIn } from 'lucide-react';

const LoginForm = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [form, setForm] = useState({ username: '', password: '' });
  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    // No backend call as per prompt – just demo behavior
    await new Promise((r) => setTimeout(r, 800));
    setLoading(false);
    alert(`Halo, ${form.username || 'pengguna'}!`);
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <div className="space-y-2">
        <label htmlFor="username" className="block text-sm font-medium text-gray-700 dark:text-gray-300">
          Username
        </label>
        <input
          id="username"
          name="username"
          type="text"
          required
          autoComplete="username"
          value={form.username}
          onChange={handleChange}
          className="w-full rounded-xl border border-gray-200 dark:border-gray-700 bg-white/70 dark:bg-gray-900/60 px-4 py-3 outline-none ring-0 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-500/30 transition"
          placeholder="masukkan username"
        />
      </div>

      <div className="space-y-2">
        <label htmlFor="password" className="block text-sm font-medium text-gray-700 dark:text-gray-300">
          Password
        </label>
        <div className="relative">
          <input
            id="password"
            name="password"
            type={showPassword ? 'text' : 'password'}
            required
            autoComplete="current-password"
            value={form.password}
            onChange={handleChange}
            className="w-full rounded-xl border border-gray-200 dark:border-gray-700 bg-white/70 dark:bg-gray-900/60 px-4 py-3 pr-12 outline-none ring-0 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-500/30 transition"
            placeholder="masukkan password"
          />
          <button
            type="button"
            onClick={() => setShowPassword((s) => !s)}
            className="absolute inset-y-0 right-0 flex items-center pr-3 text-gray-500 hover:text-gray-700"
            aria-label={showPassword ? 'Sembunyikan password' : 'Tampilkan password'}
          >
            {showPassword ? <EyeOff className="w-5 h-5" /> : <Eye className="w-5 h-5" />}
          </button>
        </div>
      </div>

      <button
        type="submit"
        disabled={loading}
        className="w-full inline-flex items-center justify-center gap-2 rounded-xl bg-indigo-600 text-white font-medium px-4 py-3 shadow-lg shadow-indigo-600/30 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 disabled:opacity-60 disabled:cursor-not-allowed transition"
      >
        <LogIn className="w-5 h-5" />
        {loading ? 'Memproses...' : 'Masuk'}
      </button>

      <p className="text-xs text-gray-500 text-center">
        Dengan masuk, Anda menyetujui ketentuan dan kebijakan privasi kami.
      </p>
    </form>
  );
};

export default LoginForm;
