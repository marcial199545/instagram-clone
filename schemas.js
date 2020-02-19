export default `
    type User {
        _id:ID!
        name:String!
        email:String!
        password:String!
        avatar:String!
        date:String!
    }
    input GetUserInput{
        _id:ID!
    }
    type Query {
        getUser(input:GetUserInput):User!
        getUsers:[User]!
    }
    input CreateUserInput{
        name:String!
        email:String!
        password:String!
    }
    type Mutation{
        createUser(input:CreateUserInput!) : User
    }
`;
