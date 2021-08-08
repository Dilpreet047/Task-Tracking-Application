const express = require('express');
const mongoose = require('mongoose');
const app = express();

app.use(express.json())

const proutes = require('./router/route');
app.use('/data', proutes);

const key = require('./keys/key').key;
mongoose.connect(key, {useNewUrlParser: true, useUnifiedTopology: true}, () => {
    console.log('Connected to DB')
})



const PORT = process.env.PORT || 5000; //At 3000 react will run

app.listen(PORT,
    console.log(`Backend running at ${PORT}`)
);
