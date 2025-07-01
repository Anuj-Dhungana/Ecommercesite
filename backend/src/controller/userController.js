import userServices from "../services/userServices.js"


const createUser = async(req, res) => {

    const { name, email, password, phone } = req.body
 const data = await userServices.createUser(req.body)
 console.log(data);

 res.send(data)
}

export {createUser}