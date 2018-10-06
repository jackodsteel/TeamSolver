import merge from 'lodash.merge';
//
import * as Answer from './entities/answer';
import * as Question from './entities/question';
import * as Topic from './entities/topic';
import * as User from './entities/user';
import Base from './Base';

/*

export const typeDefs = gql`

type Query {
    dummy: Boolean
}
type Mutation {
    dummy: Boolean
}
type Meta {
    count: Int
}
scalar Url
scalar Date





extend type Query {
    users: [User]
    user: User
}

extend type Mutation {
    createUser(username: String!): User
}
type User {
    id: ID!
    username: String
    first_name: String
    last_name: String
    full_name: String
    avatar_url: String
    answers: [Answer]!
}


type Question {
    id: ID!

    title: String

    description: String

    answers: [Answer]!
}



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


*/


// export default typeDefs;

// export default makeExecutableSchema({
//     typeDefs: typeDefs,
//     resolvers: resolvers,
//     logger: { log: e => console.log(e) }
// })

export const typeDefs = [
    Topic.schema,
    User.schema,
    Question.schema,
    Answer.schema,
    Base
];

export const resolvers = merge(Topic.resolvers, User.resolvers, Question.resolvers, Answer.resolvers);

// export default makeExecutableSchema({
//     typeDefs: [
//         Topic.schema,
//         User.schema,
//         Question.schema,
//         Answer.schema,
//         Base
//     ],
//     resolvers: merge(Topic.resolvers, User.resolvers, Question.resolvers, Answer.resolvers),
//     logger: { log: e => console.log(e) }
// })