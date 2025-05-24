const {rateLimit} = require('express-rate-limit')

const limitter = rateLimit({
    windowMs: 60 * 1000, // 1 min
    limit: 2,
    legacyHeaders: false,
    standardHeaders: 'draft-8',
    handler: (req, res) => {
        res.status(429).json({
            success: false,
            message: 'Too many requests. Try again after some time.'
        })
    }
})

module.exports = limitter