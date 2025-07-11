import otpGenerator from "otp-generator";



const generateotp = () => {
   const otp= otpGenerator.generate(6,{lowerCaseAlphabets:false,upperCaseAlphabets:false,specialChars:false});
    console.log(otp)
    return otp;
};

export  {generateotp}