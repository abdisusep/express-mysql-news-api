const service = require('../services/category.service');
const { sendSuccessResponse, sendErrorResponse } = require('../utils/response');

const getCategories = async (req, res) => {
    try {
        const result = await service.getCategories();
        sendSuccessResponse(res, result);
    } catch (err) {
        sendErrorResponse(res, err, 400);
    }
}

const getCategory = async (req, res) => {
    try {
        const id = req.params.id;
        const result = await service.getCategory(id);
        sendSuccessResponse(res, result);
    } catch (err) {
        sendErrorResponse(res, err);
    }
}

const createCategory = async (req, res) => {
    try {
        const data = req.body;
        const result = await service.createCategory(data);
        sendSuccessResponse(res, result);
    } catch (err) {
        sendErrorResponse(res, err, 400);
    }
}

const updateCategory = async (req, res) => {
    try {
        const data = req.body;
        const id = req.params.id;
        const result = await service.updateCategory(data, id);
        sendSuccessResponse(res, result);
    } catch (err) {
        sendErrorResponse(res, err, 400);
    }
}

const deleteCategory = async (req, res) => {
    try {
        const id = req.params.id;
        const result = await service.deleteCategory(id);
        sendSuccessResponse(res, result);
    } catch (err) {
        sendErrorResponse(res, err, 400);
    }
}

module.exports = {
    getCategories, getCategory, createCategory, updateCategory, deleteCategory
}