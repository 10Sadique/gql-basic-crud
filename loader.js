import { GraphQLFileLoader } from '@graphql-tools/graphql-file-loader';
import { loadSchema } from '@graphql-tools/load';
import { moivesResolvers } from './resolvers/movie.js';

export const typeDefs = await loadSchema('./schemas/**/*.graphql', {
    loaders: [new GraphQLFileLoader()],
});

export const resolvers = [moivesResolvers];
