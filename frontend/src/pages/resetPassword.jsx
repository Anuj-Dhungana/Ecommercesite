// ResetPassword.jsx
import React, { useState } from 'react';
import { handlePostOperation } from '../config/handlepostOperation';
import { useNavigate } from 'react-router-dom';
import { FaEye, FaEyeSlash } from 'react-icons/fa';


const ResetPassword = () => {
    const [newPassword, setNewPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const [show, setShow] = useState(false);

    const navigate = useNavigate();


    const handleSubmit = async(e) => {
        e.preventDefault();
        if (newPassword !== confirmPassword) {
            alert("Passwords do not match");
            return;
        }
        
        const response = await handlePostOperation('auth/reset-password', {password:newPassword});

        console.log(response)
        if (response.status === 200) {
            alert(response.data.message || "Password reset successfully"), 
            localStorage.setItem("email", email)

            setTimeout(() => {
                navigate("/login");
            });
        } else {
            alert(response.response.message || "Error resetting password");
        }
    };

    return (
        <div className="min-h-screen flex items-center justify-center bg-gradient-to-r from-purple-500 via-pink-500 to-red-400">
            <div className="bg-white rounded-2xl shadow-lg p-8 w-full max-w-md">
                <h2 className="text-2xl font-bold text-center text-gray-800 mb-6">Reset Your Password 🔒</h2>
                <form onSubmit={handleSubmit} className="space-y-5">
                    <div className="relative">
                        <label className="block text-sm font-medium text-gray-700 mb-1">New Password</label>
                        <input
                            type={show ? 'text' : 'password'}
                            value={newPassword}
                            onChange={(e) => setNewPassword(e.target.value)}
                            placeholder="New password"
                            className="w-full px-4 py-2 pr-10 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-pink-400"
                            required
                        />
                        <span
                            onClick={() => setShow(!show)}
                            className="absolute right-3 top-9 transform -translate-y-1/2 cursor-pointer text-gray-500 hover:text-gray-700"
                        >
                            {show ? <FaEyeSlash /> : <FaEye />}
                        </span>
                    </div>

                    <div className="relative">
                        <label className="block text-sm font-medium text-gray-700 mb-1">Confirm Password</label>
                        <input
                            type={show ? 'text' : 'password'}
                            value={confirmPassword}
                            onChange={(e) => setConfirmPassword(e.target.value)}
                            placeholder="Confirm password"
                            className="w-full px-4 py-2 pr-10 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-pink-400"
                            required
                        />
                    </div>

                    <button
                        type="submit"
                        className="w-full py-2 bg-gradient-to-r from-purple-600 to-pink-500 text-white rounded-lg font-semibold hover:from-purple-700 hover:to-pink-600 transition duration-300"
                    >
                        Reset Password
                    </button>
                </form>
            </div>
        </div>
    );
};

export default ResetPassword;
