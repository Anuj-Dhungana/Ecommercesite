import bcrypt from 'bcrypt';
import User from '../models/User.js';
import { hashPassword } from '../utils/utility.js';
import { sendMail } from '../utils/sendMail.js';
import Otp from '../models/otp.js';
import { generateotp } from '../utils/generateotp.js';


const register = async (data) => {
    const hashedPassword = hashPassword(data.password);
    const email = data.email;
    const userExist = await User.find({ email });
    if (userExist.length > 0) {
        throw new Error("User already exists");
    }
    return await User.create({
        email: data.email,
        password: hashedPassword,
        userName: data.userName,
        phone: data.phone,
    });
};

const login = async (data) => {
    const doEmailExist = await User.find({ email: data.email });
    if (!doEmailExist.length > 0) {
        throw new Error("Invalid User");
    }
    const dbPassword = doEmailExist[0].password;
    const isPasswordMatched = bcrypt.compareSync(data.password, dbPassword);
    if (isPasswordMatched) {
        return doEmailExist[0];
    } else {
        throw new Error("Invalid login");
    }
};

const forgotPassword = async (data) => {

    const isUserValid = await User.findOne({email: data.email});

    if(!isUserValid) {
        throw new Error("User is not registered")
    }
    const otp = generateotp();
    const doesExist = await Otp.findOne({ email: data.email });
    let newOtp
    if (!doesExist) {
        newOtp = await Otp.create({
            email: data.email,
            otp: otp
        });
    } else {
        newOtp = await Otp.findOneAndUpdate(
            { email: data.email },
            { otp: otp, 
            createdAt: new Date() },
            { new: true }
        );
    }
    // sendMail(data.email, otp);
    return newOtp;
};

const verifyOtp = async ({ email, otp }) => {
  const doesExist = await Otp.findOne({ email });

  if (!doesExist) {
    throw new Error("Email doesn't exist");
  }

  if (doesExist.otp !== otp) {
    throw new Error("Invalid OTP");
  }

  await User.findOneAndUpdate(
    {email}, 
    {otpExpiresAt: new Date(Date.now() + 30 * 1000)}, 
    {new: true}
    );
  //optional
  await Otp.deleteOne({ email });

  return "Otp verified"
};
export default {
    register,
    login,
    forgotPassword,
 verifyOtp
};
