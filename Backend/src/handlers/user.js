const prisma = require('../db.js');
const { createJWT, hashPassword } = require("../modules/auth");

const createNewUser = async (req, res) => {
  const hash = await hashPassword(req.body.password);

  const user = await prisma.user.create({
    data: {
      username: req.body.username,
      password: hash,
    },
  });

  const token = createJWT(user);
  res.json({ token });
};

const signin = async (req, res) => {
    const user = await prisma.user.findUnique({
      where: { id: req.body.username },
    });
  
    const isValid = await comparePasswords(req.body.password, user.password);
  
    if (!isValid) {
      res.status(401);
      res.send("Invalid username or password");
      return;
    }
  
    const token = createJWT(user);
    res.json({ token });
  };

  module.exports = {createNewUser,signin}
  