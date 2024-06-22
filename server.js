const express = require('express');
const colors = require('colors');
const morgan = require('morgan');
const dotenv = require('dotenv');
const connectDB = require('./config/db');
dotenv.config()

//mongodb connection
connectDB();
//middlewares
const app = express();
app.use(express.json())
app.use(morgan("dev"));

//routes
app.use("/api/v1/user",require("./routes/userRoutes"));

const port = process.env.PORT || 8080

app.listen(port, () => {
    // res.send("Server is running")
    console.log(`Server running in ${process.env.NODE_MODE} Mode on port ${process.env.PORT}`.bgCyan.white)
});

