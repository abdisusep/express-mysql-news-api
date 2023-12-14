const service = require('../services/category.service');

const getCategories = async (req, res) => {
    try {
        const categories = await service.getCategories();
        res.status(200).json(categories);
    } catch (e) {
        res.status(400).json({ error: e.message });
    }
}

const getCategory = async (req, res) => {
    try {
        const id = req.params.id;
        const category = await service.getCategory(id);
        res.status(200).json(category);
    } catch (e) {
        res.status(500).json({ error: e.message });
    }
}

const createCategory = async (req, res) => {
    try {
        const data = req.body;
        const category = await service.createCategory(data);
        res.status(201).json(category);
    } catch (e) {
        res.status(400).json({ error: e.message });
    }
}

const updateCategory = async (req, res) => {
    try {
        const data = req.body;
        const id = req.params.id;
        const category = await service.updateCategory(data, id);
        res.status(200).json(category);
    } catch (e) {
        res.status(400).json({ error: e.message });
    }
}

const deleteCategory = async (req, res) => {
    try {
        const id = req.params.id;
        const category = await service.deleteCategory(id);
        res.status(200).json(category);
    } catch (e) {
        res.status(400).json({ error: e.message });
    }
}

module.exports = {
    getCategories, getCategory, createCategory, updateCategory, deleteCategory
}