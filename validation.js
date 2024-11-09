const joi = require('joi')

const registervalidation =(data)=>{
    const schema = joi.object({
        name:joi.string().required().min(2).max(7),
        email:joi.string().required().email(),
        password:joi.string().required().min(5).max(8),
        mobile: joi.number().integer().min(1000000000).max(9999999999).required()
    })

    return  schema.validate(data)
    
}
  const loginvalidation = (data)=>{
    const schema = joi.object({
        email:joi.string().required().email(),
        password: joi.string().required().min(5).max(8),
    })
    return  schema.validate(data)
    
  }
module.exports.registervalidation=registervalidation; 
module.exports.loginvalidation = loginvalidation;