function ExampleInput(props) {
    const image = props.movieDetail.poster_path
    return (
        <>
        {/* {JSON.stringify(props)} */}
             <div className="card">
                <img src={image} className="card-img-top" alt="example"/>
                <div className="card-body">
                <p className="text-start fs-4"><b>Title:</b> Avengers</p>
                <p className="text-start fs-4"><b>Overview:</b> Good Movies</p>
                <p className="text-start fs-4"><b>Poster URL:</b> https://tes.com/image.png</p>
                <p className="text-start fs-4"><b>Popularity:</b> 10</p>
                <p className="text-start fs-4"><b>Tags:</b> Action, Sci-Fi</p>
                <p className="card-text"><small className="text-muted">Use "," comma to write more than one tags <br></br> 
                Input popularity by number value from 1 to 10
                </small></p>
                </div>
            </div>
        </>
    )
}

export default ExampleInput