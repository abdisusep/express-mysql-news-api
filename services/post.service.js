

const getPosts = async () => {
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

module.exports = {
    getPosts
}