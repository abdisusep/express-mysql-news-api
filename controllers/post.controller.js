const service = require('../services/post.service');
const { sendSuccessResponse, sendErrorResponse } = require('../utils/response');

const getPosts = async (req, res) => {
    try {
        const result = await service.getPosts();
        sendSuccessResponse(res, result);
    } catch (err) {
        sendErrorResponse(res, err, 400);
    }
}

const getPost = async (req, res) => {
    try {
        const id     = req.params.id;
        const result = await service.getPost(id);
        sendSuccessResponse(res, result);
    } catch (err) {
        sendErrorResponse(res, err);
    }
}

const createPost = async (req, res) => {
    try {
        const data   = req.body;
        const file   = req.file;
        const result = await service.createPost(data, file);
        sendSuccessResponse(res, result);
    } catch (err) {
        sendErrorResponse(res, err, 400);
    }
}

const updatePost = async (req, res) => {
    try {
        const data   = req.body;
        const id     = req.params.id;
        const file   = req.file;
        const result = await service.updatePost(data, file, id);
        sendSuccessResponse(res, result);
    } catch (err) {
        sendErrorResponse(res, err, 400);
    }
}

const deletePost = async (req, res) => {
    try {
        const id     = req.params.id;
        const result = await service.deletePost(id);
        sendSuccessResponse(res, result);
    } catch (err) {
        sendErrorResponse(res, err, 400);
    }
}

module.exports = {
    getPosts, getPost, createPost, updatePost, deletePost
}