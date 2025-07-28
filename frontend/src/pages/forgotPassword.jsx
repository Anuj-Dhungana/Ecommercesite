// ForgotPassword.jsx
import React, { useState } from 'react';
import { handlePostOperation } from '../config/handlepostOperation';
import { useNavigate } from 'react-router-dom';

const ForgotPassword = () => {
    const [email, setEmail] = useState('');
    const navigate = useNavigate();

    const handleSubmit = async(e) => {
        e.preventDefault();
        // TODO: Send email to backend for OTP generation

        const response = await handlePostOperation('/auth/ForgotPassword', {email});

        if (response.status === 200) {
            alert(response.data.message || "OTP send successfully"), 
            localStorage.setItem("email", email)

            setTimeout(() => {
                navigate("/verify-otp");
            });
        } else {
            alert(response.response.message || "Error sending OTP");
        }
        console.table(email);
    };

    

    return (
        <div className="min-h-screen flex items-center justify-center bg-gradient-to-r from-purple-500 via-pink-500 to-red-400">
            <div className="bg-white rounded-2xl shadow-lg p-8 w-full max-w-md">
                <h2 className="text-2xl font-bold text-center text-gray-800 mb-6">Forgot Password 🔐</h2>
                <form onSubmit={handleSubmit} className="space-y-5">
                    <div>
                        <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">Enter your email</label>
                        <input
                            type="email"
                            id="email"
                            name="email"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            placeholder="you@example.com"
                            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-pink-400"
                            required
                        />
                    </div>
                    <button
                        type="submit"
                        className="w-full py-2 bg-gradient-to-r from-purple-600 to-pink-500 text-white rounded-lg font-semibold hover:from-purple-700 hover:to-pink-600 transition duration-300"
                    >
                        Send OTP
                    </button>
                </form>
            </div>
        </div>
    );
};

export default ForgotPassword;
