import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Home } from "./pages/Home";
import Login from "./pages/login";
import Register from "./pages/register";
import VerifyOtp from "./pages/verifyOtp";
import ResetPassword from "./pages/resetPassword";
import ForgotPassword from "./pages/forgotPassword";
import Navbar from "./components/Navbar";

function App() {
  return (
    <BrowserRouter>
      <Navbar/>
      
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/verify-otp" element={<VerifyOtp />} />
        <Route path="/forgot-password" element={<ForgotPassword />} />  
        <Route path="/reset-password" element={<ResetPassword />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
