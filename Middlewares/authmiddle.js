import jwt from 'jsonwebtoken';
import config from '../Config/config.js';
export const authenticate = (req, res, next) => {
  const token = req.header('Authorization')?.split(' ')[1]; 
  console.log('Received Token:', token); 

  if (!token) return res.status(401).json({ message: 'Access denied' });

  try {
    const decoded = jwt.verify(token, config.SECRET_KEY);
    req.user = decoded;
    console.log('Decoded Token:', decoded); 

    next();
  } catch (err) {
    res.status(400).json({ message: 'Invalid token' });
  }
};
