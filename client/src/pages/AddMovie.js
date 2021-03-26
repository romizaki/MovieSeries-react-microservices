import React, { useState } from 'react'
import { useMutation } from '@apollo/client'
import { ADD_MOVIE } from '../config/mutation'
import giphy from '../assets/giphy.gif'
import { useHistory } from 'react-router-dom'
import { getMoviesSeries } from '../config/query'

function AddMovie(params) {
  const history = useHistory()
  const [form, setForm] = useState({
    title: '',
    overview: '',
    poster_path: '',
    popularity: '',
    tags: ''
  })
  const [addMovie, { data }] = useMutation(ADD_MOVIE, {
    refetchQueries: [{ query: getMoviesSeries }]
  })
  const handleOnSubmit = (e) => {
    e.preventDefault()
    addMovie({
      variables: {
        newMovie: {
            title: form.title,
            overview: form.overview,
            poster_path: form.poster_path,
            popularity: +form.popularity,
            tags: form.tags
        }
      }
    })
    history.push('/')
  }
  const handleOnChange = (e) => {
    let { value, name } = e.target
    const newInput = { ...form, [name]: value }
    setForm(newInput)
  }
    return (
        <>
          <h1>Add New Movies</h1>
          <div className="row">
              <div className="col-lg mt-3">
                <img src={giphy}></img>
              </div>
              <div className="col-lg">
                  <h3>Add New Movie Form</h3>
                  <form onSubmit={handleOnSubmit}>
                      <div className="form-floating mb-3">
                          <input type="text" name="title" className="form-control" id="floatingInput" placeholder="Avengers: Infinity War" onChange={handleOnChange}/>
                          <label>Movie Title</label>
                      </div>
                      <div className="form-floating mb-3">
                          <input type="text" name="overview" className="form-control" id="floatingInput" placeholder="Overview" onChange={handleOnChange} required/>
                          <label>Overview</label>
                      </div>
                      <div className="form-floating mb-3">
                          <input type="text" name="poster_path" className="form-control" id="floatingInput" placeholder="Password" onChange={handleOnChange} required/>
                          <label>Poster URL</label>
                      </div>
                      <div className="form-floating mb-3">
                          <input type="number" name="popularity" className="form-control" id="floatingInput" placeholder="Password" onChange={handleOnChange} required/>
                          <label>Popularity</label>
                      </div>
                      <div className="form-floating mb-3">
                          <input type="text" name="tags" className="form-control" id="floatingInput" placeholder="Tags" onChange={handleOnChange} required/>
                          <label>Tags</label>
                      </div>
                      <div className="row">
                          <button type="submit" className="btn btn-success">Add New Movie</button>
                      </div>
                  </form>
              </div>
          </div>
        </>
    )
}

export default AddMovie