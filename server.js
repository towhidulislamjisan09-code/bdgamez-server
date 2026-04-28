const express = require("express");
const app = express();

app.use(express.json());

app.get("/", (req,res)=>{
    res.send("TSI Play BDGamez Server Running 🚀");
});

// REGISTER
app.post("/register",(req,res)=>{
    res.json({
        status:true,
        message:"User registered successfully"
    });
});

// LOGIN
app.post("/login",(req,res)=>{
    res.json({
        status:true,
        message:"Login success"
    });
});

// WALLET
app.get("/wallet",(req,res)=>{
    res.json({
        balance:0
    });
});

// DEPOSIT
app.post("/deposit",(req,res)=>{
    res.json({
        status:true,
        message:"Deposit added"
    });
});

// WITHDRAW
app.post("/withdraw",(req,res)=>{
    res.json({
        status:true,
        message:"Withdraw request submitted"
    });
});

const PORT = process.env.PORT || 10000;
app.listen(PORT, ()=> console.log("Server Started"));
