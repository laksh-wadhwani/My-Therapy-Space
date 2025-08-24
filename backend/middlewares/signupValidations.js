import { isPasswordValid, isValidEmail } from "../utils/validations.js";

export const signupValidation = (req, res, next) => {
    const {fullname, email, password} = req.body;

    if(!(fullname && email && password))
        return res.status(400).json({error: "Fullname, Email, and Password are required"})

    if(!isValidEmail(email))
        return res.status(400).json({error: "Invalid Email Format"})

    if(!isPasswordValid(password))
        return res.status(400).json({error: "Please complete all validations"})

    next();
}