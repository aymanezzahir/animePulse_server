
function authenticateAccessToken(req, res, next) {
    const accessToken = req.headers['X-Anime-Pulse-2'];
    const expectedAccessToken = process.env.ACCESS_TOKEN;

    if (!accessToken || accessToken !== expectedAccessToken) {
        return res.status(401).json({ error: 'Unauthorized' });
    }

    // If the access token is valid, continue to the next middleware or route handler
    next();
}

module.exports = authenticateAccessToken;
