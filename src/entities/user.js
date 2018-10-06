export const User = `
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
`;

export function schema() {
    return [User]
}

// Resolvers

let users = [];
let nextId = 0;


export const resolvers = {
    Query: {
        user: async (root, args, context, info) => {
            return await context.db.collection('user')
                .findOne(args['id']);
        },
        users: async (root, args, context, info) => {
            return users;
            // return await context.db.collection('user').all();
        },
    },
    Mutation: {
        createUser: (root, args, context, info) => {
            const newUser = {id: nextId++, username: args.username};
            // context.db.collection('user').add(newUser);
            users.push(newUser);
            return newUser;
        }
    }
};