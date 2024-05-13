const jwt = require('jsonwebtoken');
require("dotenv").config();

const auth = (req, res, next) => {
    const accessToken = req.headers.authorization?.split(" ")[1];
    console.log(accessToken);
    console.log(process.env.TOKEN_SECRET);
    if (accessToken) {
        jwt.verify(accessToken, process.env.TOKEN_SECRET, async(err, decoded)=>{
            if(decoded){
                console.log(decoded)
                req.body.userId = decoded.userId
                req.body.username = decoded.username
                next();
            }
            else{
                res.json({ err :true,msg:"doesn't match"});
            }
        })
    } else {
        res.json({ msg: "Please login first." });
    }
};

module.exports = { auth };
