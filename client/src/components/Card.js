import { useQuery } from '@apollo/client';
import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import favouritesListVar from '../config/cachelist'
import { GET_FAVOURITES } from '../config/query'
import { FaEthereum, FaStar } from 'react-icons/fa'
import loadingGif from '../assets/loadingGif.gif'

function Card(props) {
    const [favourites, setFavourites] = useState(false)         //set tombol"
    const { data, loading, error } = useQuery(GET_FAVOURITES)   // ambil data kosong dulu
    const id = props.data._id
    const addToFavouriteList = (e, id) => {
        setFavourites(true)
        let newFavouritesList = favouritesListVar()
        favouritesListVar([...newFavouritesList, props.data])   // nambah data kosong sama data tambahan
    }
    useEffect(() => {
        let dataTemp = data.favouritesList.filter(el => el._id === props.data._id)    // ngecek data cached udah ada id yg di loop dari card apa belum
        if (dataTemp.length > 0) setFavourites(true)
    }, [data, props.data._id])

    if (loading) {
        return (
            <div>
                <h1>Please Wait</h1>
                <image src={loadingGif}></image>
            </div>
        )
    } else if (error) {
        return (
            <div>
                <h1>Error</h1>
                <image src={loadingGif}></image>
            </div>
        )
    }
    return (
        <>
            <div className="col-lg-3">
                <div className="card" style={{ width: '108%', height:'39rem', marginTop:'2rem' }}>
                <img src={props.data.poster_path} className="card-img-top" alt="cardImage" style={{ width: "100% !important", height: "70%", "objectFit": "cover" }}/>
                <div className="card-body">
                    <h5 className="card-title"> {props.data.title} </h5>
                    <p className="card-text">{props.data.overview}</p>
                    <div className="d-flex">
                        {
                            props.data.__typename === "Movie" ? <Link to={`/detail/${props.data._id}`} className="btn btn-primary me-1">Details</Link> : ""
                        }
                        {
                            props.data.__typename === "Movie" ? <Link to={`/edit/${props.data._id}`} className="btn btn-warning me-1">Edit</Link> : ""
                        }   
                        {
                            favourites ? <button disabled className="btn btn-success ml-2" onClick={addToFavouriteList}><FaStar/> </button> : <button className="btn btn-danger ml-2" onClick={addToFavouriteList}><FaStar/></button>
                        }
                    </div>
                </div>
                </div>
            </div>
        </>
    )   
}

export default Card