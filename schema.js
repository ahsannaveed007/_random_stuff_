import { buildSchema } from 'graphql';

const schema = buildSchema(`
    type Friend {
        id: ID! @unique
        firstName: String
        lastName: String
        gender: String
        language: String
        email: String
    }
    type Query {
        friend: Friend
    }
`)

export default schema;
