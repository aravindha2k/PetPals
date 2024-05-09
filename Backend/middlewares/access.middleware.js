const access = (...requiredRoll)=>{
    return (req,res,next)=>{
    if(requiredRoll.includes (req.user.role)){
        next();
    }else{
        res.status(401).json({msg:"unAuthorized"})
    }
    }

}

module.exports = {access}