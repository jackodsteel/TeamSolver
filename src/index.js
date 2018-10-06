import {ApolloServer} from 'apollo-server';

import MongoClient from 'mongodb';
import {resolvers, typeDefs} from './schema';

const MONGO_URL = 'mongodb://localhost:27017/test';


// This is a (sample) collection of books we'll be able to query
// the GraphQL server for.  A more complete example might fetch
// from an existing data source like a REST API or database.
const topics = [
    {
        title: 'Harry Potter and the Chamber of Secrets',
        author: 'J.K. Rowling',
    },
    {
        title: 'Jurassic Park',
        author: 'Michael Crichton',
    },
];

// Resolvers define the technique for fetching the types in the
// schema.  We'll retrieve books from the "books" array above.
// const resolvers = {
//     Query: {
//         topics: () => topics,
//     },
// };


// In the most basic sense, the ApolloServer can be started
// by passing type definitions (typeDefs) and the resolvers
// responsible for fetching the data for those types.
const server = new ApolloServer({
    typeDefs,
    resolvers,
    context: async () => ({
        db: await MongoClient.connect(MONGO_URL)
    })
});
//
// const server = new ApolloServer(schema);

// This `listen` method launches a web-server.  Existing apps
// can utilize middleware options, which we'll discuss later.
server.listen().then(({url}) => {
    console.log(`🚀  Server ready at ${url}`);
});


