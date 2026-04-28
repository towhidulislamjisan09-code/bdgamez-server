const express = require("express");
const cors = require("cors");
const fs = require("fs");

const app = express();
app.use(cors());
app.use(express.json());

const PORT = process.env.PORT || 10000;

// Load users
const loadUsers = () => {
  return JSON.parse(fs.readFileSync("users.json"));
};

// Save users
const saveUsers = (users) => {
  fs.writeFileSync("users.json", JSON.stringify(users, null, 2));
};

// Home
app.get("/", (req, res) => {
  res.send("BDGamez Server Running 🚀");
});

// Register
app.post("/register", (req, res) => {
  const { username, password } = req.body;
  let users = loadUsers();

  if (users.find(u => u.username === username)) {
    return res.json({ success:false, msg:"User exists" });
  }

  users.push({ username, password, coins:0 });
  saveUsers(users);
  res.json({ success:true });
});

// Login
app.post("/login", (req, res) => {
  const { username, password } = req.body;
  let users = loadUsers();

  const user = users.find(u => u.username === username && u.password === password);
  if (!user) return res.json({ success:false });

  res.json({ success:true, coins:user.coins });
});

app.listen(PORT);
