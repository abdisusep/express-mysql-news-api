const model = require('../models');
const Category = model.Category;

const getCategories = async () => {
    try {
        const categories = await Category.findAll({
            limit: 10,
            offset: 0,
        });
        if (categories.length === 0) {
            return {
                status: 'error',
                code: 404,
                message: 'Data tidak ditemukan'
            }
        }

        return {
            message: 'Data',
            data: categories
        }
    } catch (err) {
        throw new Error(err);
    }
}

const getCategory = async (id) => {
    try {
        const category = await Category.findByPk(id);
        if (!category) {
            return {
                status: 'error',
                code: 404,
                message: 'Data tidak ditemukan'
            }
        }

        return {
            message: 'Detail',
            data: category
        }
    } catch (err) {
        throw new Error(err);
    }
}

const createCategory = async (data) => {
    try {
        const existingCategory = await Category.findOne({ name: data.name });

        if (existingCategory) {
            return {
                status: 'error',
                code: 409,
                message: 'Category with similar data already exists',
            };
        }

        const createdCategory = await Category.create(data);
        return {
            code: 201,
            message: 'Created',
            data: createdCategory
        }
    } catch (err) {
        throw new Error(err);
    }
}

const updateCategory = async (data, id) => {
    try {
        const category = await Category.findByPk(id);
        if (!category) {
            return {
                status: 'error',
                code: 404,
                message: 'Data tidak ditemukan'
            }
        }

        const updatedCategory = await category.update(data);
        return {
            message: 'Updated',
            data: updatedCategory
        }
    } catch (err) {
        throw new Error(err);
    }
}

const deleteCategory = async (id) => {
    try {
        const category = await Category.findByPk(id);
        if (!category) {
            return {
                status: 'error',
                code: 404,
                message: 'Data tidak ditemukan'
            }
        }

        await category.destroy();
        
        return {
            message: 'Deleted'
        }
    } catch (err) {
        throw new Error(err);
    }
}

module.exports = {
    getCategories, getCategory, createCategory, updateCategory, deleteCategory
}