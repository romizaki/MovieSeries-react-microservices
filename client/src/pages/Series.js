import React from 'react'
import { gql, useQuery } from '@apollo/client'
import Card from '../components/Card'
import { GET_SERIES } from '../config/query'
import loadingGif from  '../assets/loadingGif.gif'

function Series(params) {
    const { data, loading, error } = useQuery(GET_SERIES)

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
                <h1>Error..</h1>
                <img src={loadingGif}></img>
            </>
        )
    }
    return (
        <>
        <div className="mb-3">
            <div className="d-flex justify-content-center">
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
        </>
    )
}

export default Series