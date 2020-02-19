import express from "express";
import graphqlHTTP from "express-graphql";
import { buildSchema } from "graphql";
import bodyParser from "body-parser";

// The root provides a resolver function for each API endpoint
import { default as root } from "./resolvers";

// Construct a schema, using GraphQL schema language

import { default as schemaDef } from "./schemas";

let schema = buildSchema(schemaDef);

const app = express();
const PORT = process.env.PORT || 3030;
// middleware
app.use(bodyParser.json());
app.use(
    "/graphql",
    graphqlHTTP({
        schema: schema,
        rootValue: root,
        graphiql: true
    })
);

app.listen(PORT, re => {
    console.log(
        `Running a GraphQL API server at http://localhost:${PORT}/graphql`
    );
});
