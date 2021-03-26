import React from 'react'
import { gql, useQuery } from '@apollo/client'
import ImageCategories from '../components/ImageCategories'
import Card from '../components/Card'
import { GET_MOVIES } from '../config/query'
import giphy from '../assets/giphy.gif'

function Movies(params) {
    const { data, loading, error } = useQuery(GET_MOVIES)

    if (loading) {
        return (
            <>
                <h1>Loading</h1>
                <img src={giphy}></img>
            </>
        )
    }
    if (error) {
        return (
            <>
                <h1>Error..</h1>
                <img src={giphy}></img>
            </>
        )
    }
    return (
        <>
        <div className="mb-5">
            <div className="d-flex justify-content-center mb-5">
                <div className="row justify-content-center mb-5">
                <h1>Movies Collection</h1>
                    { data.movies &&
                        data.movies.map(el => {
                            return <Card key={el._id} data={ el }/>
                        })
                    }
                </div>
            </div>
        </div>
        </>
    )
}

export default Movies