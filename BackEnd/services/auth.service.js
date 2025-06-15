import {PGSQL} from '../config/db.js';
import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';

<<<<<<< HEAD
const ACCESS_TOKEN_SECRET = process.env.JWT_SECRET;
const REFRESH_TOKEN_SECRET = process.env.JWT_REFRESH_SECRET;

export const register = async (user_name, email, password ,fullname) => {
  const hashedPassword = await bcrypt.hash(password, 10);
  
    await PGSQL`INSERT INTO client (username, email, password, fullname) VALUES (${user_name}, ${email}, ${hashedPassword} ,${fullname})`;
    
}

export const login = async (email, password) => {
  const users = await PGSQL`SELECT * FROM client WHERE email = ${email}`;
=======
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
>>>>>>> 79df1df67c2a94e284a832510697c36c25662ef9
    if (users.length === 0) return res.status(400).json({ message: 'User not found' });
    const user = users[0];
    const valid = await bcrypt.compare(password, user.password);
    if (!valid) return res.status(400).json({ message: 'Invalid credentials' });

<<<<<<< HEAD
    const token = jwt.sign({ user_id: user.user_id, email: user.email }, ACCESS_TOKEN_SECRET, { expiresIn: '1h' });
    const refreshToken = jwt.sign({ user_id: user.user_id, email: user.email }, REFRESH_TOKEN_SECRET, { expiresIn: '1d' });
    return {token,refreshToken};
}

export const refreshAccessToken = (refreshToken) => {
  const decoded = jwt.verify(refreshToken, REFRESH_TOKEN_SECRET) 

  return jwt.sign(decoded, ACCESS_TOKEN_SECRET, { expiresIn: '1h' });
};
=======
    const token = jwt.sign({ user_id: user.user_id, email: user.email }, process.env.JWT_SECRET, { expiresIn: '1h' });
    res.json({ token });
  } catch (err) {
    res.status(500).json({ message: 'Login failed' });
  }
}
>>>>>>> 79df1df67c2a94e284a832510697c36c25662ef9
