export default `
    type Post {
        _id:ID!
        by:UserShort
        description:String
        photo:String!
        likedBy:[UserShort]!
        comments:[UserShort]!
        createdAt:String!
    }
    input GetPostInput{
        _id:ID!
    }
    type Query {
        getPost(input:GetPostInput):Post!
    }
    input IBy{
        usrName:String!
        avatar:String
    }
    input CreatePostInput{
        by:IBy
        description:String
        photo:String
    }
    type Mutation{
        createPost(input:CreatePostInput!) : Post!
    }
`;
