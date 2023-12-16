const slug = require('slug')
const model = require('../models');
const Post = model.Post;

const getPosts = async () => {
    try {
        const posts = await Post.findAll({
            include: 'category'
        });
        return {
            message: 'success',
            data: posts
        };
    } catch (e) {
        throw Error('Internal server error!');
    }
}

const getPost = async (id) => {
    try {
        const post = await Post.findByPk(id);
        return {
            message: 'success',
            data: post
        };
    } catch (e) {
        throw Error('Internal server error!');
    }
}

const createPost = async (data) => {
    try {
        const body = {
            category_id: data.category_id,
            slug: slug(data.title),
            title: data.title,
            content: data.content,
            image: 'image.png'
        }
        const post = await Post.create(body);
        return {
            message: 'success',
            data: post
        };
    } catch (e) {
        throw Error('Internal server error!');
    }
}

const updatePost = async (data, id) => {
    try {
        const body = {
            category_id: data.category_id,
            slug: slug(data.title),
            title: data.title,
            content: data.content,
            image: 'image.png'
        }
        console.log(body)
        const post   = await Post.findByPk(id);
        const update = await post.update(body);
        return {
            message: 'success',
            data: update
        };
    } catch (e) {
        throw Error('Internal server error!');
    }
}

const deletePost = async (id) => {
    try {
        const post = await Post.findByPk(id);
        await post.destroy();
        return {
            message: 'deleted'
        };
    } catch (e) {
        throw Error('Internal server error!');
    }
}

module.exports = {
    getPosts, getPost, createPost, updatePost, deletePost
}