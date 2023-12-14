const model = require('../models');
const Category = model.Category;

const getCategories = async () => {
    try {
        const categories = await Category.findAll();
        return {
            message: 'success',
            data: categories
        };
    } catch (e) {
        throw Error('Internal server error!');
    }
}

const getCategory = async (id) => {
    try {
        const category = await Category.findByPk(id);
        return {
            message: 'success',
            data: category
        };
    } catch (e) {
        throw Error('Internal server error!');
    }
}

const createCategory = async (data) => {
    try {
        const category = await Category.create(data);
        return {
            message: 'success',
            data: category
        };
    } catch (e) {
        throw Error('Internal server error!');
    }
}

const updateCategory = async (data, id) => {
    try {
        const category = await Category.findByPk(id);
        const update   = await category.update(data);
        return {
            message: 'success',
            data: update
        };
    } catch (e) {
        throw Error('Internal server error!');
    }
}

const deleteCategory = async (id) => {
    try {
        const category = await Category.findByPk(id);
        await category.destroy();
        return {
            message: 'deleted'
        };
    } catch (e) {
        throw Error('Internal server error!');
    }
}

module.exports = {
    getCategories, getCategory, createCategory, updateCategory, deleteCategory
}