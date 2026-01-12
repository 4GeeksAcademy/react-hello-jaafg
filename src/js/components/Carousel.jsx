import React from "react";
import "../../styles/index.css"

const Carousel = () => {
    const carouselImages = [
        "https://picsum.photos/id/10/1200/400",
        "https://picsum.photos/id/11/1200/400",
        "https://picsum.photos/id/15/1200/400"
    ];
    return (
        <div id="myCarousel" className="carousel slide ">
            <div className="carousel-inner">
                {carouselImages.map((image, index) => (
                    <div className={`carousel-item ${index === 0 ? "active" : ""}`} key={index}>
                        <img src={image} className="d-block w-100 imgCarousel" alt="" />
                    </div>
                ))}
            </div>
            <button class="carousel-control-prev" type="button" data-bs-target="#myCarousel" data-bs-slide="prev">
                <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                <span class="visually-hidden">Previous</span>
            </button>
            <button class="carousel-control-next" type="button" data-bs-target="#myCarousel" data-bs-slide="next">
                <span class="carousel-control-next-icon" aria-hidden="true"></span>
                <span class="visually-hidden">Next</span>
            </button>
        </div>
    )
}

export default Carousel