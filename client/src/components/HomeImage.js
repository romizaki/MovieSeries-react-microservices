import carousel1 from '../assets/carousel1.jpg'
import carousel2 from '../assets/carousel2.jpg'
import carousel3 from '../assets/carousel3.jpg'

function HomeImage(params) {
    const carouselStyle = {
        width: "100% !important",
        height: "400px",
        "objectFit": "cover"
    }
    return (
        <>
            <div id="carouselExampleControls" className="carousel slide" data-bs-ride="carousel">
                <div className="carousel-inner">
                    <div className="carousel-item active">
                        <img src={carousel1} className="d-block w-100" alt="gambar" style={carouselStyle}/>
                    </div>
                    <div className="carousel-item">
                        <img src={carousel2} className="d-block w-100" alt="gambar" style={carouselStyle}/>
                    </div>
                    <div className="carousel-item">
                        <img src={carousel3} className="d-block w-100" alt="gambar" style={carouselStyle}/>
                    </div>
                </div>
                <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleControls"  data-bs-slide="prev">
                    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                    <span className="visually-hidden">Previous</span>
                </button>
                <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleControls"  data-bs-slide="next">
                    <span className="carousel-control-next-icon" aria-hidden="true"></span>
                    <span className="visually-hidden">Next</span>
                </button>
            </div>
        </>    
    )
}

export default HomeImage