/* Get Coins */
app.get("/coins/:username", (req, res) => {
  let users = loadUsers();
  const user = users.find(u => u.username === req.params.username);
  if (!user) return res.json({ success:false });

  res.json({ success:true, coins:user.coins });
});

/* Add Coins (Admin use) */
app.post("/addcoins", (req, res) => {
  const { username, amount } = req.body;
  let users = loadUsers();

  const user = users.find(u => u.username === username);
  if (!user) return res.json({ success:false });

  user.coins += Number(amount);
  saveUsers(users);

  res.json({ success:true, coins:user.coins });
});
