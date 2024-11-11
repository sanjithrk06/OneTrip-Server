import jwt from 'jsonwebtoken';

import dotenv from 'dotenv';
dotenv.config({path: '../.env'});

export const generateTokenAndSetCookies = (res, userId) => {
    const token = jwt.sign({ userId }, process.env.JWT_SECRET, {
        expiresIn: "7d",
    })

    res.cookie("token", token, {
        httpOnly: true,
        secure: process.env.NODE_ENV === "production",
        sameSite: "strict",
        maxAge: 7*24*60*60*1000, //7d
    })

    return token;
}