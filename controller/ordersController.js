const { PrismaClient } = require('../generated/prisma/client')
const prisma = new PrismaClient()

exports.createOrder = async (req, res, next) => {
    try {
        const {userId, bookId, quantity, total} = req.body
        const order = await prisma.order.create({
            data: {
                userId: userId,
                bookId: bookId,
                quantity: quantity,
                total: total,
            }
        })

        if(order) {
            res.status(200).json({
                success: true,
                data: `order placed successfully. Your order id is ${o.id}`
            })
        }


    } catch (error) {
        next(error);
    }
}

exports.getOrder = async (req, res, next) => {
    try {
        const id = Number(req.params.id)

        const order = await prisma.order.findUnique({where: {id}})
        if(order){
            res.status(200).json({
                success: true,
                data: order
            })
        } else {
            res.status(401).json({
                success: true,
                data: 'Invalid order id.'
            })
        }
    } catch(error) {
        next(error)
    }
}