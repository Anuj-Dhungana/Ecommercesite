import { useState } from "react";
import TextField from "../components/textField";

const Register = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [userName, setUserName] = useState("");
  const [phone, setPhone] = useState("");
  
  const handleSubmit = (e) => {
    e.preventDefault();
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-md w-full space-y-8">
        {/* Header */}
        <div className="text-center">
          <h2 className="mt-6 text-3xl font-extrabold text-gray-900">
            Create your account
          </h2>
          <p className="mt-2 text-sm text-gray-600">
            Join us and start your journey today
          </p>
        </div>

        {/* Form */}
        <div className="bg-white rounded-lg shadow-lg p-8">
          <form onSubmit={handleSubmit} className="space-y-6">
            {/* Username */}
            <div>
              <TextField 
                label="Username" 
                id="username" 
                placeholder="Enter your username" 
                value={userName} 
                onChange={(e) => setUserName(e.target.value)} 
              />
            </div>

            {/* Email */}
            <div>
              <TextField 
                label="Email" 
                id="email" 
                placeholder="example@gmail.com" 
                value={email} 
                onChange={(e) => setEmail(e.target.value)} 
              />
            </div>

            {/* Phone */}
            <div>
              <TextField 
                label="Phone" 
                id="phone" 
                placeholder="1234567890" 
                value={phone} 
                onChange={(e) => setPhone(e.target.value)} 
              />
            </div>

            {/* Password */}
            <div>
              <TextField 
                label="Password" 
                id="password" 
                placeholder="Enter your password" 
                value={password} 
                onChange={(e) => setPassword(e.target.value)} 
              />
            </div>

            {/* Confirm Password */}
            <div>
              <TextField 
                label="Confirm Password" 
                id="confirmPassword" 
                placeholder="Confirm your password" 
                value={confirmPassword} 
                onChange={(e) => setConfirmPassword(e.target.value)} 
              />
            </div>

            {/* Submit Button */}
            <div>
              <button
                type="submit"
                className="group relative w-full flex justify-center py-3 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 transition duration-200 ease-in-out"
              >
                Create Account
              </button>
            </div>

            {/* Login Link */}
            <div className="text-center">
              <p className="text-sm text-gray-600">
                Already have an account?{" "}
                <a href="/login" className="font-medium text-indigo-600 hover:text-indigo-500 transition duration-200">
                  Sign in here
                </a>
              </p>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Register;
