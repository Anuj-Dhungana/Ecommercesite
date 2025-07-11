
import { verifyToken } from "../helper/Token.js";




const isLoggedIn = async (req, res, next ) => {
    try{
    const token = req.cookies.authToken;
    if(!token){throw new Error("user is not logged in")}
    

    const decoded = verifyToken(token);

    console.log(decoded);
    

    req.user = decoded
    next();

   
}catch(error){
    console.log(error);
    res.send("error")
}
}

export  {isLoggedIn}