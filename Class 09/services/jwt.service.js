import jwt from "jsonwebtoken";

const createAccessToken = (userId) => {
    return jwt.sign({ userId }, process.env.ACCESS_TOKEN_SECRET, {
        expiresIn: "10m",
    })
};

const createRefreshToken = (userId) => {
    return jwt.sign({ userId }, process.env.REFRESH_TOKEN_SECRET, {
        expiresIn: "7d",
    })
};

const verifyAccessToken = (token) => {
    return jwt.verify(token, process.env.ACCESS_TOKEN_SECRET);
};

const verifyRefreshToken = (refreshToken) => {
    return jwt.verify(refreshToken, process.env.REFRESH_TOKEN_SECRET);
};

export { createAccessToken, createRefreshToken, verifyAccessToken, verifyRefreshToken };