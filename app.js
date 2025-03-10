const express = require ("express");
const cors = require ("cors");

const app = express();
const contactsRoute = require("./app/routes/contact.route");

app.use(cors());
app.use(express.json());
app.use("/api/contacts", contactsRoute);
app.get("/",(req,res)=>{
    res.json({
        message:"Welcome to contact book application."
    })
});

module.exports = app;

