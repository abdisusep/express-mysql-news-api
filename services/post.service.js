require('dotenv').config();
const slug = require('slug');
const fs = require('fs/promises');
const path = require('path');

const model = require('../models');
const Category = model.Category;
const Post = model.Post;

const getPosts = async () => {
    try {
        const posts = await Post.findAll({
            include: 'category',
        });

        if (posts.length === 0) {
            return {
                status: 'error',
                code: 404,
                message: 'Data tidak ditemukan',
            }
        }

        return {
            message: 'Data',
            data: posts
        }
    } catch (err) {
        throw new Error(err);
    }
}

const getPost = async (id) => {
    try {
        const post = await Post.findByPk(id, {
            include: 'category',
        });

        if (!post) {
            return {
                status: 'error',
                code: 404,
                message: 'Data tidak ditemukan',
            }
        }

        return {
            message: 'Detail',
            data: post
        }
    } catch (err) {
        throw new Error(err);
    }
}

const createPost = async (data, file) => {
    try {
        const uploadFolder = 'uploads/';
        let fileName = '';

        if (file) {
            const fileType = file.mimetype.split('/')[1];
            fileName = `${Date.now()}.${fileType}`;
            const filePath = `${uploadFolder}${fileName}`;
            await fs.writeFile(filePath, file.buffer);
        }

        const postBody = {
            categoryId: data.categoryId,
            slug: slug(data.title),
            title: data.title,
            content: data.content,
            image: file ? `${uploadFolder}${fileName}` : ''
        }

        const category = await Category.findByPk(data.categoryId);
        if (!category) {
            return {
                status: 'error',
                code: 404,
                message: 'Kategori tidak ditemukan'
            }
        }

        const createdPost = await Post.create(postBody);

        return {
            code: 201,
            message: 'Created',
            data: createdPost
        };
    } catch (err) {
        throw new Error(err);
    }
}

const updatePost = async (data, file, id) => {
    try {
        const uploadFolder = 'uploads/';
        let fileName = '';

        if (file) {
            const fileType = file.mimetype.split('/')[1];
            fileName = `${Date.now()}.${fileType}`;
            const filePath = `${uploadFolder}${fileName}`;
            await fs.writeFile(filePath, file.buffer);
        }

        const category = await Category.findByPk(data.categoryId);
        if (!category) {
            return {
                status: 'error',
                code: 404,
                message: 'Kategori tidak ditemukan'
            }
        }

        const post = await Post.findByPk(id);

        if (!post) {
            return {
                status: 'error',
                code: 404,
                message: 'Data tidak ditemukan'
            }
        }

        if (file) {
            await fs.unlink(`${post.image}`);
        }

        const postBody = {
            categoryId: data.categoryId,
            slug: slug(data.title),
            title: data.title,
            content: data.content,
            image: file ? `${uploadFolder}${fileName}` : post.image
        }

        const updatedPost = await post.update(postBody);

        return {
            message: 'Updated',
            data: updatedPost
        };
    } catch (err) {
        throw new Error(err);
    }
}

const deletePost = async (id) => {
    try {
        const post = await Post.findByPk(id);
        if (!post) {
            return {
                status: 'error',
                code: 404,
                message: 'Data tidak ditemukan'
            }
        }

        await post.destroy();
        
        return {
            message: 'Deleted'
        };
    } catch (err) {
        throw new Error(err);
    }
}

module.exports = {
    getPosts, getPost, createPost, updatePost, deletePost
}