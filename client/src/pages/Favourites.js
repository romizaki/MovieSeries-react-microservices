import { useQuery } from '@apollo/client'
import React from 'react'
import { GET_FAVOURITES } from '../config/query'
import Card from '../components/Card'
import loadingGif from '../assets/loadingGif.gif'
import nothing from '../assets/nothing.gif'

function Favourites() {
    let { data, loading, error } = useQuery(GET_FAVOURITES)
    if (error) {
        <div className="mt-5">
            <h1>Error...</h1>
            <img src={loadingGif}></img>
        </div>
    }
    if (loading) {
        <div className="mt-5">
            <h1>Please Wait</h1>
            <img src={loadingGif}></img>
        </div>
    }
    else if (data.favouritesList.length < 1) {
        return (
            <div className="mt-5">
                <h1>You don't have any Favourites item yet</h1>
                <img src={nothing}></img>
            </div>
        )
    } else {
        return (
            <>
                <div className="container">
                    <div className="row">
                        {
                            data.favouritesList.map((item, index) => {
                                return <Card data={item} key={index}></Card>
                            })
                        }
                    </div>
                </div>
            </>
        )
    }
}

export default Favourites