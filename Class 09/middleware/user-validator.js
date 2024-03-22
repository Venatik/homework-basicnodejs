import Joi from "joi";

const userSchema = Joi.object({
    email: Joi.string().required().email(),
    password: Joi.string().required().min(6),
    role: Joi.string().valid("admin", "standard").required()
});

const userValidator = (req, res, next) => {
    const userData = req.body;
    const validation = userSchema.validate(userData);

    if (validation.error) {
        res.status(400).send({
            message: validation.error.details[0].message
        });
    } else {
        next();
    }
}

export default userValidator;