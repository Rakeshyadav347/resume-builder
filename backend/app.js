
const express = require('express');
const { default: mongoose } = require('mongoose');
const cors = require('cors');
require('dotenv').config();   

const adminLogRouter = require("../backend/routes/adminLogRouter");

const app = express();

app.use(express.urlencoded({extended:true}));
app.use(express.json());
app.use(cors());

app.use("/api/auth",adminLogRouter);
app.use("/api/auth",userLogRouter);


const PORT = process.env.PORT || 4000;
const Db_Path=process.env.MONGO_URI;

mongoose.connect(Db_Path).then(() => {
    console.log(`Mongodb connected successfully`);
    app.listen(PORT , ()=>{
      console.log(`server running on https://localhost:${PORT}`);
    });
}).catch(err => {
  console.log(`Error while connecting to mongodb`,err);
});
   

