export default `
    type UserShort{
        _id:ID!
        usrName:String!
        avatar:String!
    }
    type User {
        _id:ID!
        usrName:String!
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
        usrName:String!
        email:String!
        password:String!
    }
    type Mutation{
        createUser(input:CreateUserInput!) : User
    }
`;
