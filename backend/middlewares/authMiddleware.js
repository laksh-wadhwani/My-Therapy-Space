import jwt from "jsonwebtoken";

export const authenticate = async (req, res, next) => {
    try {
        let token;

        if (req.headers.authorization && req.headers.authorization.startsWith("Bearer")) {
            token = req.headers.authorization.split(" ")[1];
        }

        if (!token) {
            return res.status(401).json({ error: "Not authorized, token missing" });
        }

        const decoded = jwt.verify(token, process.env.JWT_SECRET);

        req.userId = decoded.id;
        req.userRole = decoded.role;
        
        // If you want to fetch user, you can still make this generic
        // Example: Check role to decide which model to query
        // Or skip DB fetching and just use token payload
        next();
    } catch (error) {
        console.error(error);
        res.status(401).json({ error: "Not authorized, token failed" });
    }
};
