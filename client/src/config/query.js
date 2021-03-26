import { gql } from '@apollo/client'

export const getMoviesSeries = gql`
    query{
        movies {
            _id
            title
            overview
            poster_path
            popularity
            tags
        }
        series {
            _id
            title
            overview
            poster_path
            popularity
            tags
        }
    }
`

export const GET_MOVIES = gql`
    query{
        movies {
            _id
            title
            overview
            poster_path
            popularity
            tags
        }
    }
`

export const GET_SERIES = gql`
    query{
        series {
            _id
            title
            overview
            poster_path
            popularity
            tags
        }
    }
`

export const getMovieById = (_id) => {
    return gql`
    query {
        getMovieById(_id: "${_id}"){
        _id,
        title,
        poster_path,
        overview,
        popularity,
        tags
        }
    }
`
}

export const GET_FAVOURITES = gql`
query getFavorites {
    favouritesList @client
}
`