export const signUp = async (req, res) => {
     res.status(200).json({
        message: "SignUp successfull"
    })
}
export const login = async (req , res)=>{
  res.status(200).json({
    message: "Login Successfull"
  })
}


export const logout = async (req , res)=>{
    res.status(200).json({
        message:"Logout Successfull"
    })
}

export const check = async (req , res)=>{
   res.status(200).json({
    message: "Login check successfull"
   })
}
