export const Answer = `

extend type Mutation {
    createAnswer(text: String!): Answer
    deleteAnswer(id: ID!): Answer
}

type Answer {
    id: ID!
    
    text: String
    
    author: User
}
`;

export function schema() {
    return [Answer]
}

export const resolvers = {
    Query: {},
    Mutation: {}
};