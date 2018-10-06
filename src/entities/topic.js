export const Topic = `
extend type Query {
    topic(id: ID!): Topic
    topics(limit: Int, skip: Int): [Topic]
}
extend type Mutation {
    createTopic(name: String!): Topic
    deleteTopic(id: ID!): Topic
}

type Topic {
    id: ID!
    
    title: String
    
    description: String
    
    author: User
    
    questions: [Question]!
}
`;

export function schema() {
    return [Topic]
}

export const resolvers = {
    Query: {},
    Mutation: {}
};