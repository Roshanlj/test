import React, { useState } from 'react';

function Login() {
  const [formData, setFormData] = useState({
    email: '',
    password: '',
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // You can add form validation here
    // and send the data to a server for authentication
    console.log('Form data submitted:', formData);
  };

  return (
    <div>
    <div className="absolute left-10 top-6 flex items-center">
          <img
            src="app icon.png"
            alt="Protasker Logo"
            className="h-10 w-10 mr-2"
          />
          <h1 className="text-2xl text-black font-semibold">Protasker</h1>
        </div>
    <div className="bg-white text-black min-h-screen flex items-center justify-center">
      <div className="login-container bg-white p-6 rounded shadow-md">
        <h2 className="text-2xl font-bold text-black mb-4">Login</h2>
        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <input
              type="email"
              name="email"
              placeholder="Email"
              value={formData.email}
              onChange={handleInputChange}
              className="w-full px-3 py-2 border rounded focus:outline-none focus:border-black"
              required
            />
          </div>
          <div className="mb-4">
            <input
              type="password"
              name="password"
              placeholder="Password"
              value={formData.password}
              onChange={handleInputChange}
              className="w-full px-3 py-2 border rounded focus:outline-none focus:border-black"
              required
            />
          </div>
          <button
            type="submit"
            className="w-full bg-black text-white font-semibold py-2 rounded hover:bg-gray-900 focus:outline-none"
          >
            Login
          </button>
        </form>
      </div>
    </div>
    </div>
  );
}

export default Login;
