import User from '../models/user.js'

const createUser = async(req,res)=>{

    let user = req.body
    try{
        const createdUser = await User.create(user)
        res.status(201).json({message:"User Created",userId:createdUser.id})
    }
    catch(error){
        res.status(500).json({message:"Error creating user",error})
    }
}

export default createUser