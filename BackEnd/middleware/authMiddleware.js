import jwt from 'jsonwebtoken';



export const authMiddleware = (req, res, next) => {
  const authHeader = req.headers.authorization;
  const token = authHeader && authHeader.split(' ')[1];

  if (!token) {
    res.status(401).json({ error: 'Unauthorized' });
    return;
  }

  try {
    const decoded = jwt.verify(token, process.env.JWT_SECRET) ;
    req.user = decoded;
    next();
  } catch {
    res.status(401).json({ error: 'Invalid token' });
    return;
  }
};