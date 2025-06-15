import {PGSQL} from '../config/db.js';
import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';

export const register = async (user_name, email, password ) => {
  const hashedPassword = await bcrypt.hash(password, 10);
  try {
    await PGSQL`INSERT INTO client (user_name, email, password) VALUES (${user_name}, ${email}, ${hashedPassword})`;
    res.status(201).json({ message: 'User registered' });
  } catch (err) {
    res.status(500).json({ message: 'Registration failed' });
  }
}

export const login = async (email, password) => {
  try {
    const users = await PGSQL`SELECT * FROM client WHERE email = ${email}`;
    if (users.length === 0) return res.status(400).json({ message: 'User not found' });
    const user = users[0];
    const valid = await bcrypt.compare(password, user.password);
    if (!valid) return res.status(400).json({ message: 'Invalid credentials' });

    const token = jwt.sign({ user_id: user.user_id, email: user.email }, process.env.JWT_SECRET, { expiresIn: '1h' });
    res.json({ token });
  } catch (err) {
    res.status(500).json({ message: 'Login failed' });
  }
}