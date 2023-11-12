const express = require('express');

const { PORT } = require('./config/config');
const { expressConfig } = require('./config/expressConfig');
const { connectToDB } = require('./config/databaseConfig');
const router = require('./routes');

const app = express();

expressConfig(app);
app.use(router);

connectToDB()
    .then(()=>{console.log("Successfully conntected to the database!")})
    .catch((err)=>{console.log("Error connecting to the databse: "+err)});

app.listen(PORT,()=>{console.log(`Server is listenning on PORT: ${PORT}...`)});