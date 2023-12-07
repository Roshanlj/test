import React, { useState, useEffect } from "react";
import { useNavigate } from 'react-router-dom';

function Login() {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  useEffect(() => {
    // Load Google SDK when the component mounts
    const googleSDK = document.createElement("script");
    googleSDK.src = "https://apis.google.com/js/api.js";
    googleSDK.onload = initializeGoogleSignIn;
    document.body.appendChild(googleSDK);

    return () => {
      document.body.removeChild(googleSDK);
    };
  }, []);

  const initializeGoogleSignIn = () => {
    window.gapi.load("auth2", () => {
      window.gapi.auth2.init({
        client_id: "666322114826-g2ki0uu517sht7hrtheqrvudo23vq40c.apps.googleusercontent.com",
      });
    });
  };

  const handleGoogleLogin = () => {
    const auth2 = window.gapi.auth2.getAuthInstance();
    auth2.signIn().then((googleUser) => {
      const profile = googleUser.getBasicProfile();
      const email = profile.getEmail();
      // Do something with the email, like setting it in the state
      setFormData({ ...formData, email });
      navigate('/dash');
    });
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // You can add form validation here and send the data to a server for authentication
    console.log("Form data submitted:", formData);
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

          {/* Google Login Button */}
          <button
            onClick={handleGoogleLogin}
            className="my-3 w-full font-semibold py-2 rounded hover:bg-[#c9c9c9] focus:outline-none flex items-center justify-center"
          >
            <img src="google.png" alt="Google Logo" className="h-6 w-6 mr-2" />
            Login with Google
          </button>
        </div>
      </div>
    </div>
  );
}

export default Login;
