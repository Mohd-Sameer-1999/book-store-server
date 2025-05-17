require('dotenv').config();
module.exports = {
    PORT: process.env.port || 3000,
    DATABASE_URL: process.env.DATABASE_URL,
    SECRET_KEY: process.env.SECRET_KEY
}