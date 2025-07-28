import React, { useRef, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { handlePostOperation } from '../config/handlepostOperation';

const VerifyOTP = () => {
    const inputRefs = useRef([]);
    const [otp, setOtp] = useState(new Array(6).fill(''));

    const navigate = useNavigate();

    // Handle input change
    const handleChange = (element, index) => {
        const value = element.value.replace(/\D/, ''); // Only digits
        if (!value) return;

        const newOtp = [...otp];
        newOtp[index] = value;
        setOtp(newOtp);

        // Move focus to next box
        if (index < 5 && inputRefs.current[index + 1]) {
            inputRefs.current[index + 1].focus();
        }
    };

    const handleKeyDown = (e, index) => {
        if (e.key === 'Backspace') {
            if (otp[index] === '' && index > 0) {
                const newOtp = [...otp];
                newOtp[index - 1] = '';
                setOtp(newOtp);
                inputRefs.current[index - 1].focus();
            } else {
                const newOtp = [...otp];
                newOtp[index] = '';
                setOtp(newOtp);
            }
        }
    };

    const handleSubmit = async(e) => {
        e.preventDefault();

        console.log("object");
        const finalOtp = otp.join('');
       const response = await handlePostOperation('/auth/verify-otp', {otp: finalOtp});

       console,log(response);

        if (response.status === 200) {
            alert(response.data.message || "OTP validated"), 
            localStorage.setItem("otp", otp)

            setTimeout(() => {
                navigate("/reset-password");
            });
        } else {
            alert(response.response.message || "Error validating OTP");
        }

    };

    return (
        <div className="min-h-screen flex items-center justify-center bg-gradient-to-r from-purple-500 via-pink-500 to-red-400">
            <div className="bg-white rounded-2xl shadow-lg p-8 w-full max-w-md">
                <h2 className="text-2xl font-bold text-center text-gray-800 mb-6">Verify OTP 🔐</h2>
                <form onSubmit={handleSubmit} className="flex flex-col items-center space-y-6">
                    <div className="flex justify-center gap-3">
                        {otp.map((digit, index) => (
                            <input
                                key={index}
                                type="text"
                                maxLength="1"
                                value={digit}
                                onChange={(e) => handleChange(e.target, index)}
                                onKeyDown={(e) => handleKeyDown(e, index)}
                                ref={(el) => inputRefs.current[index] = el}
                                className="w-12 h-12 text-center text-xl border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-pink-400"
                            />
                        ))}
                    </div>
                    <button
                        type="submit"
                        className="w-full py-2 bg-gradient-to-r from-purple-600 to-pink-500 text-white rounded-lg font-semibold hover:from-purple-700 hover:to-pink-600 transition duration-300"
                    >
                        Verify OTP
                    </button>
                </form>
            </div>
        </div>
    );
};

export default VerifyOTP;
