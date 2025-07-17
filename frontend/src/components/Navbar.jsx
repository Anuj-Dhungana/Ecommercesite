import React from "react";
import { Link } from "react-router-dom";


const NavBar = () => {
    return (
        <nav className="flex gap-4 border-2 border-black p-4 py-2 ">
            <Link to="/">Home</Link>
            <Link to="/login">Login</Link>
            <Link to="/register">Register</Link>
            <Link to="/verify-otp">Dashboard</Link>
            <Link to="/forgot-password">Forgot Password</Link>
            <Link to="/reset-password">Reset Password</Link>
        </nav>
    );
};

export default NavBar;