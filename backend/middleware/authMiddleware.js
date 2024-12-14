import jwt from 'jsonwebtoken';

const authenticateToken = (req, res, next) => {
    const authHeader = req.headers['authorization']; // Get the token from the Authorization header
    const token = authHeader && authHeader.split(' ')[1]; // Format: "Bearer <token>"

    if (!token) return res.status(401).json({ message: "Access denied, token missing" });

    jwt.verify(token, process.env.SECRET_KEY, (err, user) => {
        if (err) return res.status(403).json({ message: "Invalid or expired token" });
        req.user = user; // Attach the decoded user info to the request
        next(); // Proceed to the next middleware/route handler
    });
};

export default authenticateToken;
