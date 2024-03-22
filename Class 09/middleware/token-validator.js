import AuthModel from "../models/auth.model.js";
import { verifyAccessToken } from "../services/jwt.service.js";

const tokenValidator = async (req, res, next) => {
    try {
        const authHeader = req.headers.authorization;

        if (!authHeader) {
            res.sendStatus(403);
        }

        const token = authHeader.split(" ")[1];

        const { userId } = verifyAccessToken(token);

        const user = await AuthModel.getById(userId);

        if (!user) {
            res.sendStatus(403);
        }

        delete user.password;
        req.user = user;

        next();
    } catch (error) {
        res.status(403).send({ message: error.message });
    }
}

export default tokenValidator;