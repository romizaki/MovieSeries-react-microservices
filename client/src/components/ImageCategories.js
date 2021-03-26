function ImageCategories(params) {
    return (
        <>
            <div className="row mt-4">
                <div className="col-lg">
                    <div className="card mb-3 text-start" style={{maxWidth: "540px"}}>
                        <div className="row g-0">
                            <div className="col-md-4">
                                <img src="https://www.flaticon.com/svg/vstatic/svg/3163/3163478.svg?token=exp=1613450439~hmac=3cab823d431b5fc2e49dbc41b08f32ec" style={{ width: '108%', height:'auto', marginTop:'2rem' }} alt="popcorn"/>
                            </div>
                            <div className="col-md-8">
                            <div className="card-body">
                                <h5 className="card-title">Movie</h5>
                                <p className="card-text">A movie, motion picture or moving picture, is a work of visual art used to simulate experiences that communicate ideas, stories, etc</p>
                                <p className="card-text"><small className="text-muted">source: wikipedia</small></p>
                            </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="col-lg">
                    <div className="card mb-3 text-start" style={{maxWidth: "540px"}}>
                        <div className="row g-0">
                            <div className="col-md-4">
                                <img src="https://www.flaticon.com/svg/vstatic/svg/2933/2933498.svg?token=exp=1613450904~hmac=38de526fedad4fc49e99f85084fc8ec1" style={{ width: '108%', height:'auto', marginTop:'2rem' }} alt="popcorn"/>
                            </div>
                            <div className="col-md-8">
                            <div className="card-body">
                                <h5 className="card-title">TV Series</h5>
                                <p className="card-text">TV show – is any content produced for viewing on a television set which can be broadcast via over-the-air, satellite, cable</p>
                                <p className="card-text"><small className="text-muted">source: wikipedia</small></p>
                            </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default ImageCategories