const userMiddleware = async (req, res, next) => {
  const { username } = req.params;

  if (!username) {
    res.status(400).json({ error: { message: "Username is required" } });
  } else {
    next();
  }
};

module.exports = userMiddleware;
