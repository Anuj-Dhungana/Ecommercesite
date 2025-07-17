import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Home } from "./pages/Home";
import { login } from "./pages/login";
import { register } from "./pages/register";
import verifyOtp from "./pages/verifyOtp";
import resetPassword from "./pages/resetPassword";
import { forgotPassword } from "./pages/forgotPassword";
import Navbar from "./components/Navbar";

function App() {
  return (
    <BrowserRouter>
      <Navbar/>
      
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<login />} />
        <Route path="/register" element={<register />} />
        <Route path="/verify-otp" element={<verifyOtp />} />
        <Route path="/forgot-password" element={<forgotPassword />} />
        <Route path="/reset-password" element={<resetPassword />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
