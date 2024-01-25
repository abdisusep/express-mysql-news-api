const service = require('../services/auth.service');
const { sendSuccessResponse, sendErrorResponse } = require('../utils/response');

const registerUser = async (req, res) => {
    try {
        const data = req.body;
        const result = await service.registerUser(data);
        sendSuccessResponse(res, result);
    } catch (err) {
        sendErrorResponse(res, err, 400);
    }
}

const loginUser = async (req, res) => {
    try {
        const data = req.body;
        const result = await service.loginUser(data);
        sendSuccessResponse(res, result);
    } catch (err) {
        sendErrorResponse(res, err, 400);
    }
}

module.exports = {
    registerUser, loginUser
}