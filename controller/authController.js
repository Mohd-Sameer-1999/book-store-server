const { PrismaClient } = require('../generated/prisma/client')
const prisma = new PrismaClient();
const { generateToken } = require('../utils/jwtTokenUtil')
const bcrypt = require('bcrypt')

exports.register = async (req, res, next) => {
    try{
        const {name, email, password, role} = req.body;
        const user = await prisma.user.create({
           data: {
            name: name,
            email: email,
            password: await bcrypt.hash(password, 10),
            role: role
           }
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
        const { email, password } = req.body;
        const user = await prisma.user.findUnique({ where: { email } })

        if(!user){
            return res.status(401).json({
                success: false,
                error: 'Invalid credentials'
            })
        }

        const validatePassword = await bcrypt.compare(password, user.password)

        if(!validatePassword){ 
            return res.status(401).json({
                success: false,
                error: 'Invalid credentials'
            })
        } 
       
        const token = generateToken(user);
        res.status(200).json({
            success : true,
            data: token
        })
       
    } catch(error){
        next(error)
    }
}