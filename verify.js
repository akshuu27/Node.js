const jwt = require('jsonwebtoken')

module.exports = (req, res, next)=>{
    const token =req.header('auth-token')

    // error if token genrated

    if(!token) return res.status(401).send("Access denied")

        try{
           const verified =jwt.verify(token, process.env.token_secret)
           res.userExist = jwt.verified
           next()
        } catch (error){
         res.status(400).send("Invalid token")
        }

}