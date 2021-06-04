const authService = require('../authentication/authService');


async function registerUser(req, res) {
    try {

        const data = await authService.registerUser(req.body);
        res.status(200).json(data);

    } catch (error) {
        res.status(500).json(error);
    }
}

async function login(req, res) {
    try {
        let queryData = req.query;
        const response = await authService.userLogin(queryData);
        if (response) {
            res.status(200).json({ message: "Authentication successful" });
        }

    } catch (error) {
        res.status(500).json(error);

    }
}

async function generateResetPasswordLink(req, res) {
    try {
        await authService.generateResetPasswordLink(req.query.email);
        res.status(200).json({ message: "Reset password link successfully generated" });

    } catch (error) {
        res.status(500).json(error);
    }
}

async function resetPassword(req, res) {
    await authService.resetPassword(req.body);
    res.status(200).json({ message: "Reset password successfully" });

    
}

module.exports = {
    registerUser,
    login,
    generateResetPasswordLink,
    resetPassword
}