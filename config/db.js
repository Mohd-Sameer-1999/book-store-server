const { PrismaClient } = require('../generated/prisma/client')

// const connectionString = `${DATABASE_URL}`
// const adapter = new PrismaPg({ connectionString });
// const prisma = new PrismaClient({ adapter });
const prisma = new PrismaClient();

async function connectDB() {
    try{
        await prisma.$connect();
        console.log('Database connected successfully');
    } catch(error) { 
        console.error('Database connection error:', error);
        process.exit(1);
    }
}

process.on('beforeExit', async () => {
    await prisma.$disconnect();
});

module.exports = connectDB;


