const authRouter = require('express').Router();
const { validationResult } = require('express-validator');
const releaseTokens = require('./utils/releaseTokens');
const validateAuthMiddleware = require('../../middlewares/validators/validateAuth.middleware');

authRouter.route('/signIn').post(
  validateAuthMiddleware,
  async (req, res) => {
    const validationErrors = validationResult(req);
    if (!validationErrors.isEmpty()) {
      return res.status(400).json({ message: validationErrors.errors[0].msg });
    }
    const { accessToken, refreshToken } = releaseTokens({ login: req.person.login });
    await req.person.addRefreshTokenToUser(refreshToken);
    return res.status(200)
      .json({ accessToken, refreshToken });
  },
);

module.exports = authRouter;
