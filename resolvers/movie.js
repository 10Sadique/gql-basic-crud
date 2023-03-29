import Movie from '../models/movie.js';

export const moivesResolvers = {
    Query: {
        async movies(root, {}, ctx) {
            return await Movie.find();
        },
        async getMovie(root, { _id }, ctx) {
            return await Movie.findOne({ _id });
        },
    },

    Mutation: {
        async addMovie(root, { title, director }, ctx) {
            return await Movie.create({
                title,
                director,
            });
        },
        async updateMovie(root, { _id, title, director }, ctx) {
            return await Movie.findOneAndUpdate({ _id }, { title, director });
        },
        async deleteMovie(root, { _id }, ctx) {
            return await Movie.findOneAndDelete({ _id });
        },
    },
};
