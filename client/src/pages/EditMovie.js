import React, { useState,useEffect } from 'react'
import { useParams } from 'react-router-dom'
import { useMutation, useQuery } from '@apollo/client'
import { EDIT_MOVIE } from '../config/mutation'
import ExampleInput from '../components/ExampleInput'
import { useHistory } from 'react-router-dom'
import { getMoviesSeries, getMovieById } from '../config/query'
import loadingGif from '../assets/loadingGif.gif'

function EditMovie(props) {
  const history = useHistory()
  const { _id } = useParams()
  const { data, loading, error } = useQuery(getMovieById(_id))
  const [form, setForm] = useState({
    title: '',
    overview: '',
    poster_path: '',
    popularity: '',
    tags: ''
  })
	useEffect(() => {
		if (data) {
			setForm({
				title: data.getMovieById.title,
				overview: data.getMovieById.overview,
				poster_path: data.getMovieById.poster_path,
				popularity: data.getMovieById.popularity,
				tags: data.getMovieById.tags
			})
		}
	},[data])
  const [updateMovieById, {}] = useMutation(EDIT_MOVIE, {
    refetchQueries: [{ query: getMoviesSeries }]
  })
  const handleOnSubmit = (e) => {
    e.preventDefault()
    updateMovieById({
      variables: {
				id: _id,
        editMovie: {
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
    if (name === "tags") {
      value.split(",")
    }
    const newInput = { ...form, [name]: value }
    setForm(newInput)
  }
	if (loading) {
		return (
			<div>
					<h1>Please Wait</h1>
					<img src={loadingGif}></img>
			</div>
		)
	} else if (error) {
		return (
			<div>
					<h1>Error</h1>
					<img src={loadingGif}></img>
			</div>
		)
	} else {
		return (
			<>
				<h1>Edit Movies</h1>
				<div className="row">
          <div className="col-lg">
          <h3>Example Input</h3>
          <ExampleInput movieDetail={data.getMovieById}/>
          </div>
          <div className="col-lg">
            <h3>Edit Movie Form</h3>
            <form onSubmit={handleOnSubmit}>
              <div className="form-floating mb-3">
                <input type="text" name="title" className="form-control" id="floatingInput" placeholder="Avengers: Infinity War" onChange={handleOnChange} required value={form.title}/>
                <label>Movie Title</label>
              </div>
              <div className="form-floating mb-3">
                <input type="text" name="overview" className="form-control" id="floatingInput" placeholder="Overview" onChange={handleOnChange} required value={form.overview}></input>
                <label>Overview</label>
              </div>
              <div className="form-floating mb-3">
                <input type="text" name="poster_path" className="form-control" id="floatingInput" placeholder="Password" onChange={handleOnChange} required value={form.poster_path}/>
                <label>Poster URL</label>
              </div>
              <div className="form-floating mb-3">
                <input type="number" name="popularity" className="form-control" id="floatingInput" placeholder="Password" onChange={handleOnChange} required value={form.popularity}/>
                <label>Popularity</label>
              </div>
              <div className="form-floating mb-3">
                <input type="text" name="tags" className="form-control" id="floatingInput" placeholder="Tags" onChange={handleOnChange} required value={form.tags}/>
                <label>Tags</label>
              </div>
              <div className="row">
                <button type="submit" className="btn btn-success">Edit Movie</button>
              </div>
            </form>
          </div>
				</div>
			</>
		)
	}
}

export default EditMovie