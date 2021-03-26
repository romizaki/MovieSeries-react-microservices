import { useMutation, useQuery } from '@apollo/client';
import { useParams } from 'react-router-dom'
import { getMovieById, GET_MOVIES } from '../config/query';
import { deleteMovie } from '../config/mutation'
import { useHistory } from 'react-router-dom'
import { getMoviesSeries } from '../config/query'
import { swal } from 'sweetalert2'
import { useEffect } from 'react';
import giphy from '../assets/giphy.gif'

function Detail(params) {
    const history = useHistory()
    const { _id } = useParams()
    const { data, loading, error } = useQuery(getMovieById(_id))
    const { data:moviesData } = useQuery(GET_MOVIES)
    const [deleteMovieById, { data:message }] = useMutation(deleteMovie, {
        refetchQueries: [{ query: getMoviesSeries }]        
    })
    const deleteDataMovie = () => {
        deleteMovieById({
            variables: {
                id: _id
            }
        })
        if (moviesData.movies.filter(el => el._id !== _id)) {
            history.push('/')
        }
    }
    useEffect(() => {

    })
    if (loading) {
        return (
            <div>
                <h1>Loading</h1>
                <img src={giphy}></img>
            </div>
        )
    }
    if (error) {
        return (
            <div>
                <h1>Error...</h1>
                <img src={giphy}></img>
            </div>
        )
    }
    return (
        <>
        <div className="container mt-5">
            <div className="row">
                <div className="col-4">
                    <div className="card bg-dark text-white" style={{width: "18rem"}}>
                        <img src={data.getMovieById.poster_path} className="card-img-top" alt="..."/>
                        <div className="card-body">
                            <p className="card-text">{data.getMovieById.title}</p>
                        </div>
                    </div>
                </div>
                <div className="col-8">
                    <div className="card text-white text-start bg-dark mb-3" style={{maxWidth: "100%"}}>
                      <div className="card-header"> <h1>{data.getMovieById.title}</h1> </div>
                        <div className="card-body">
                            <p className="cardTitle">{data.getMovieById.overview}</p>
                            <text> <b>{data.getMovieById.popularity}</b> /10 </text>
                            <div>
                                {
                                data.getMovieById.tags.map((el, index) => {
                                    return <span key={index}>#{el} </span>
                                    })
                                }
                            </div>
                            <br></br>
                            <button onClick={deleteDataMovie} className="btn btn-danger">Delete</button>
                    </div>
                    </div>
                </div>
            </div>
        </div>
        </>
    )
}

export default Detail