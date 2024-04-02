require('dotenv').config();
const express = require('express');
const sequelize = require('./db');
const cors = require('cors');
const errorHandler = require('./middleware/ErrorHandlerMiddleware');
const http = require('http');

const PORT = process.env.PORT || 5000;
const app = express()
app.use(cors());

// Middleware с ошибками должен регистрироваться в последнюю очередь!!!
app.use(errorHandler);

app.get(
    '/',
    (req, resp) => {
        resp.status(200).json(
            {
                message: 'Wedding app is working'
            }
        );
    }
)

const server = http.createServer(app);
const start = async () => {
    try {
        await sequelize.authenticate();
        await sequelize.sync();
        server.listen(PORT, () => console.log(`Server started on port ${PORT}`))
    } catch (err) {
        console.error(err)
    }
}

start();