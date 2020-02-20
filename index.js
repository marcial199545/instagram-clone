import { fileLoader, mergeTypes, mergeResolvers } from "merge-graphql-schemas";
import path from "path";
import express from "express";
import graphqlHTTP from "express-graphql";
import { buildSchema } from "graphql";
import bodyParser from "body-parser";
import connectDB from "./db/db";

import models from "./db/models/index";

const app = express();
const PORT = process.env.PORT || 3030;

// Construct a schema, using GraphQL schema language
const schemas = mergeTypes(fileLoader(path.join(__dirname, "./types")));

let schema = buildSchema(schemas);
// The root provides a resolver function for each API endpoint
const resolvers = mergeResolvers(
    fileLoader(path.join(__dirname, "./resolvers"))
);

// middleware
app.use(bodyParser.json());
app.use(
    "/graphql",
    graphqlHTTP({
        schema: schema,
        rootValue: resolvers,
        graphiql: true,
        context: { models }
    })
);
// DB connection
connectDB();
app.listen(PORT, () => {
    console.log(
        `Running a GraphQL API server at http://localhost:${PORT}/graphql`
    );
});
