const jwt = require('jsonwebtoken')
const { SECRET_KEY } = require('../config/env')


exports.generateJWT = (payload) => {
    return jwt.sign(payload, SECRET_KEY, {expiresIn: '1h', algorithm: 'HS256'});
}   

exports.verifyJWT = (token) => {
    return jwt.verify(token, SECRET_KEY)
}