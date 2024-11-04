const jwt = require('jsonwebtoken');
const bcrypt = require('bcryptjs');
const { admin, db } = require('../config/firebase');

// Register User
exports.register = async (req, res) => {
  const { email, password } = req.body;
  const hashedPassword = await bcrypt.hash(password, 10);
  const userRef = db.collection('users').doc();

  await userRef.set({ email, password: hashedPassword });
  res.status(201).json({ message: "User registered successfully" });
};

// Login User
exports.login = async (req, res) => {
  const { email, password } = req.body;
  const userSnapshot = await db.collection('users').where('email', '==', email).get();

  if (userSnapshot.empty) return res.status(404).json({ error: "User not found" });

  const user = userSnapshot.docs[0].data();
  const validPassword = await bcrypt.compare(password, user.password);

  if (!validPassword) return res.status(401).json({ error: "Invalid credentials" });

  const token = jwt.sign({ id: userSnapshot.docs[0].id }, process.env.JWT_SECRET);
  res.json({ token });
};
