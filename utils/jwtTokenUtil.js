const jwt = require('jsonwebtoken')
const { SECRET_KEY } = require('../config/env')


exports.generateToken = (payload) => {
    return jwt.sign(payload, SECRET_KEY, {expiresIn: '1h', algorithm: 'HS256'});
}   

exports.verifyToken = (token) => {
    return jwt.verify(token, SECRET_KEY)
}