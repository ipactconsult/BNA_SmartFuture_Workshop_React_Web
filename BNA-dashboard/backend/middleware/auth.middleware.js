const jwt = require('jsonwebtoken');
const User = require('../models/user/user.schema');
const errors = require ("../exceptions/500.json");

module.exports = async function authenticateToken(req, res, next) {
  const authHeader = req.headers['authorization'];
  const token = authHeader && authHeader.split(' ')[1];

  if (!token) {
    return res.status(401).json({ error: errors.token.missing });
  }

  try {
    const decoded = jwt.verify(token, process.env.TOKEN_SECRET);
      const user = await User.findById(decoded._id);

      if (!user) {
        return res.status(401).json({ error: errors.token.invalid_user});
      }

      // Ajouter les informations de l'utilisateur à la requête
      req.user = user;
      next();
    } catch (error) {
      console.error(error);
      return res.status(401).json({ error: errors.token.invalid_token });
    }
  };