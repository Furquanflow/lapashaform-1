const jwt = require('jsonwebtoken');

module.exports.authenticateToken = (req, res, next) => {
  const token = req.header('Authorization');
  if (!token) return res.sendStatus(401);

  jwt.verify(token, 'secret123', (err, user) => {
    if (err) return res.sendStatus(403);
    req.user = user;
    next();
  });
};