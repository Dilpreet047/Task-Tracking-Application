const express = require('express');
const mongoose = require('mongoose');
const app = express();
require('dotenv/config')
app.use(express.json())

const proutes = require('./router/route');
app.use('/data', proutes);

mongoose.connect(process.env.DB_connect, {useNewUrlParser: true, useUnifiedTopology: true}, () => {
    console.log('Connected to DB')
})



const PORT = process.env.PORT || 5000; //At 3000 react will run

app.listen(PORT,
    console.log(`Backend running at ${PORT}`)
);
