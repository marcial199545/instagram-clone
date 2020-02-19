import gravatar from "gravatar";
import { model } from "mongoose";
export default {
    // Queries
    hello: (parent, args, context, info) => {
        return "Hello world!";
    },
    getUser: async (args, context) => {
        const { models } = context;
        const body = { ...args.input };
        let user = await models.User.findOne(body);
        return user;
    },
    getUsers: async (args, context) => {
        const { models } = context;
        let users = await models.User.find();
        return users;
    },
    // Mutations
    createUser: async (args, context) => {
        const { models } = context;
        const body = { ...args.input };
        let user = await models.User.create(body);
        return user;
    }
};
