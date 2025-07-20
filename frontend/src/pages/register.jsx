import { useState } from "react";
import TextField from "../components/textField";
import { registerField } from "../components/config/register";

const Register = () => {
  // const [email, setEmail] = useState("");
  // const [password, setPassword] = useState("");
  // const [confirmPassword, setConfirmPassword] = useState("");
  // const [userName, setUserName] = useState("");
  // const [phone, setPhone] = useState("");
  
  const [formData, setFormData] = useState({
    userName:"",
    email:"",
    password:"",
    confirmPassword:"",
    phone:""
  });

  

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formData);
  };

  const handleChange = (e) => {
    const {name,value} = e.target;
    setFormData({...formData,[name]:value});
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
            <div className="space-y-4">
              {registerField.map((field)=>(
                <TextField
                key={field.id}
                label={field.label}
                id={field.id}
                name={field.name}
                placeholder={field.placeholder}
                value={formData[field.name]}
                onChange={handleChange}
                type={field.type}
                />
              ))}
            
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
            {/* <div className="text-center">
              <p className="text-sm text-gray-600">
                Already have an account?{" "}
                <a href="/login" className="font-medium text-indigo-600 hover:text-indigo-500 transition duration-200">
                  Sign in here
                </a>
              </p>
            </div> */}
          </form>
        </div>
      </div>
    </div>
  );
};

export default Register;
