
import jwt from "jsonwebtoken";
import constant from "../config/constant.js";




export const createToken = (payload) => {
    return jwt.sign(payload,constant.JWT_SECRET);
};

export  const  verifyToken = (token)=>{
    return jwt.verify(token,constant.JWT_SECRET);
}