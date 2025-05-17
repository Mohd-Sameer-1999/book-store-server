const { PrismaClient } = require('../generated/prisma/client')
const prisma = new PrismaClient();

exports.register = async (req, res, next) => {
    try{
        const {name, email, password, role} = req.body;
        const user = await prisma.user.create({
            name: name,
            email: email,
            password: password,
            role: role
        })
        
        res.status(200).json({
            success: true,
            response: 'User registered successfully'
        })
    } catch (error) {
        next(error)
    }
}

exports.login = async (req, res, next) => {
    try {
        
    } catch(error){
        next(error)
    }
}