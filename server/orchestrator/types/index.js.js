const { gql } = require('apollo-server')

const typeDefs = gql`
    type Movie {
        _id: String
        title: String
        overview: String
        poster_path: String
        popularity: Float
        tags: [String]
    }
    type Series {
        _id: String
        title: String
        overview: String
        poster_path: String
        popularity: Float
        tags: [String]
    }
    type Entertainme {
        movies: [Movie]
        tvSeries: [Series]
    }    
    input MovieInput {
        title: String!
        overview: String!
        poster_path: String
        popularity: Float
        tags: String!
    }
    input SeriesInput {
        title: String!
        overview: String!
        poster_path: String
        popularity: Float
        tags: String!
    }
    type Query {
        movies: [Movie]
        series: [Series]
        getMovieById(_id: String!): Movie
        getSeriesById(_id: String!): Series
    }
    type Message {
        message: String
    }
    type Mutation {
        addMovie(data: MovieInput): Movie
        addSeries(data: SeriesInput): Series
        updateMovieById(id: String!, data: MovieInput): Message
        deleteMovieById(id: ID!): Message
        updateSeriesById(id: String!, data: SeriesInput): Message
        deleteSeriesById(id: String!): Message
    }
`;

module.exports = typeDefs