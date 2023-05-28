const jwt = require('jsonwebtoken')


const secretKey = "hasssan"
const jwtAuthorization ={
    sign(payload){
        const token = jwt.sign(payload,secretKey)
        return token
    }
}

module.exports = jwtAuthorization;