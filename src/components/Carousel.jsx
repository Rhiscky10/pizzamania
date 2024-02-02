import React from "react";

class Carousel extends React.Component {
  render() {
    return <div id="carouselExampleControls" class="carousel slide" data-ride="carousel">
  <div className="carousel-inner">
    <div className="carousel-item active">
      <img src="piz.jpg" height="700vh" className="d-block w-100"   alt="..." >
    </div>
    <div className="carousel-item">
      <img src="pizz.jpg" height="700vh" className="d-block w-100" alt="..." >
    </div>
    <div className="carousel-item">
      <img src="pizza.jpg" height="700vh" className="d-block w-100" alt="...">
    </div>
  </div>
 <button className="carousel-control-prev" type="button" data-target="#carouselExampleControls" data-slide="prev">
    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
    <span className="sr-only">Previous</span>
  </button>
  <button className="carousel-control-next" type="button" data-target="#carouselExampleControls" data-slide="next">
    <span className="carousel-control-next-icon" aria-hidden="true"></span>
    <span className="sr-only">Next</span>
  </button>
</div>
  }
}

export default Carousel;
