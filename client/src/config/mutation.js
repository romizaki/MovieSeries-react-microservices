import { gql } from '@apollo/client'

export const ADD_MOVIE = gql`
  mutation addMovie($newMovie: MovieInput){
    addMovie(data: $newMovie){
      _id
      title
      overview
      poster_path
      popularity
      tags
    }
  }
`
export const deleteMovie = gql`
  mutation deleteMovieById($id: ID!){
    deleteMovieById(id: $id){
      message
    }
  }
`

export const EDIT_MOVIE = gql`
  mutation updateMovieById($id: String!, $editMovie: MovieInput){
    updateMovieById(id: $id, data: $editMovie)
    {
      message
    }
  }
`
