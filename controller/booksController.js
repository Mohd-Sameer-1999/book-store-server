const { PrismaClient } = require('../generated/prisma/client')
const prisma = new PrismaClient()

exports.addBook = async (req, res, next) => {
    try {
        const {title, author, price, stock} = req.body
        const book = await prisma.book.create({
            data: {
                title: title,
                author: author,
                price: price,
                stock: stock
            }
        })
        
        res.status(201).json({
            success: true,
            data: 'Book added successfully.'
        })

    } catch(error) {
        next(error);
    }
   
}

exports.findBook = async (req, res, next) => {
    try {
        const searchPhrase = req.query.search
        const sort = req.query.sort

        const data = await prisma.book.findMany({
            where: {
                title: { contains: searchPhrase || '',  mode: 'insensitive' }
            },
            orderBy: {
                [sort ? sort : 'price']: 'desc'
            }
        })

        if(data){
            res.status(200).json({
                success: true,
                data: data
            })

        } else {
            res.status(200).json({
                success: false,
                data: 'No match found'
            })
        }

    } catch(error) {
        next(error)
    }
}
