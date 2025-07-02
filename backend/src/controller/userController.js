import userServices from "../services/userServices.js"


const createUser = async(req, res) => {

    try{

    const { name, email, password, phone,confirmPassword } = req.body

    if(!name){
        return res.send("name is required")
    }
    if(password){
        return res.send("password is required")

    }

    if (password !== confirmPassword) {
        return res.send("password and confirm password should be same")
    }
 const data = await userServices.createUser(req.body)
 

 res.send(data)
}
catch(err){
    console.log(err);
    res.send(400).json({
        message:"something went wrong",
        error:err
    })
}
}

export {createUser}