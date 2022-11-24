module.exports = (req, res, next) => {
    // checks if the user is logged in when trying to access a specific page
    const user = req.payload;
    if (user.admin === 'true') {
      return res.status(200).json(req.payload);
    }
    next();
};