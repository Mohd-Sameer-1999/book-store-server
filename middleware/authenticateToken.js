const {verifyToken} = require('../utils/jwtTokenUtil')

exports.authenticateToken = (req, res, next) => {
    // 1. extract token from header
    const token = req.headers['authorization'];
    
    if(!token){
        return res.sendStatus(403)
    }

    // 2. Verify token
    const user = verifyToken(token)

    if(user) {
        req.user = user
        next()
    } else {
        res.sendStatus(403)
    }

}