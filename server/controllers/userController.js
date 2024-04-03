const ApiError = require('../error/ApiError');
const bcrypt = require('bcrypt');
const tryCatchWrapper = require('../utils/tryCatchWrapper');
const generateJWT = require('../utils/generateJWT');

class UserController {
    async login(req, resp, next) {
        tryCatchWrapper(
            async () => {
                const { login, password } = req.body;
                const candidate = process.env.ADMIN_LOGIN;

                if (candidate !== login) {
                    return next(ApiError.internalError('Пользователь не найден'))
                }

                let comparePassword = bcrypt.compareSync(password, process.env.ADMIN_PASSWORD_HASH);
                if (!comparePassword) {
                    return next(ApiError.internalError('Неверный пароль'))
                }

                const token = generateJWT(candidate.login);
                return resp.json({ token })
            }, req, resp, next, 'UserController.login'
        )
    }

    async checkAuth(req, resp, next) {
        tryCatchWrapper(
            async () => {
                const token = generateJWT(req.user.login);
                return resp.json({ token })
            }, req, resp, next, 'UserController.checkAuth'
        )
    }
}

module.exports = new UserController();