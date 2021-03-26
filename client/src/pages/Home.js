import React from 'react'
import { gql, useQuery } from '@apollo/client'
import ImageCategories from '../components/ImageCategories'
import Card from '../components/Card' 
import loadingGif from '../assets/loadingGif.gif'
import {getMoviesSeries} from '../config/query'

const GET_MOVI_SERIES = gql`
    query{
        movies {
            _id
            title
            poster_path
            popularity
        }
        series {
            _id
            title
            poster_path
            popularity
        }
    }
`

function Home(params) {
    const { data, loading, error } = useQuery(getMoviesSeries)

    if (loading) {
        return (
            <>
                <h1>Loading</h1>
                <img src={loadingGif}></img>
            </>
        )
    }
    if (error) {
        return (
            <>
                <h1>Error...</h1>
                <img src={loadingGif}></img>
            </>
        )
    }
    return (
        <>
        <ImageCategories/>
        <div className="mb-5">
            <div className="container">
                <div className="row justify-content-center">
                <h1>Movies Collection</h1>
                    { data.movies &&
                        data.movies.map(el => {
                            return <Card key={el._id} data={ el }/>
                        })
                    }
                    <div className="row justify-content-center">
                    <h1>Series Collection</h1>
                    { data.series &&
                        data.series.map(el => {
                            return <Card key={el._id} data={ el }/>
                        })
                    }
                </div>
                </div>
            </div>
        </div>
        </>
    )
}

export default Home