import { ApolloServer } from '@apollo/server';
import { startStandaloneServer } from '@apollo/server/standalone';
import mongoose from 'mongoose';
import { resolvers, typeDefs } from './loader.js';

mongoose.Promise = global.Promise;
mongoose.set('strictQuery', false);
mongoose.connect('mongodb://admin:10sadique@localhost:27017/?authSource=admin');

const server = new ApolloServer({
    typeDefs,
    resolvers,
});

const { url } = await startStandaloneServer(server, {
    listen: { port: 4000 },
});

console.log(`🚀 Server ready at: ${url}`);
