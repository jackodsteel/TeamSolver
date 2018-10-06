export const Question = `
type Question {
    id: ID!
    
    title: String
    
    description: String
    
    answers: [Answer]!
}
`;

export function schema() {
    return [Question]
}

export const resolvers = {
    Query: {},
    Mutation: {}
};