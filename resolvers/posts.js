import { model } from "mongoose";
export default {
    // Queries
    getPost: async (args, context) => {
        const { models } = context;
        const body = { ...args.input };
        let post = await models.Post.findOne(body);
        return post;
    },
    // Mutations
    createPost: async (args, context) => {
        const { models } = context;
        const body = { ...args.input };
        let post = await models.Post.create(body);
        return post;
    }
};
