import React from "react";
import Items from "./Items";

class PizzaTypes extends React.Component {
  render() {
    return (
      <div className="row">
        <h1 className="text-center">Pizza Types</h1>
        {/* <div className="col-md-3">
	<div className="card" style="width: 18rem;">
  <img src="cheese.jpg" height="200vh" className="card-img-top" alt="..."><h1>Cheezy Pizza</h1>
  <div className="card-body">
    <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
  </div>
</div>
</div>
<div className="col-md-3"><div className="card" style="width: 18rem;">
  <img src="veg.jpg" className="card-img-top" alt="..."><h1>Vegetable Pizza</h1>
  <div className="card-body">
    <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
  </div>
</div></div>
<div className="col-md-3"><div className="card" style="width: 18rem;">
  <img src="fam.jpg" className="card-img-top" alt="..."><h1>Family Pizza</h1>
  <div className="card-body">
    <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
  </div>
</div></div>
<div className="col-md-3"><div className="card" style="width: 18rem;">
  <img src="pep.webp" className="card-img-top" alt="..." height="240vh"><h1>Peperoni Pizza</h1>
  <div className="card-body">
    <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
  </div>
</div></div> */}
        <Items
          imgSrc="cheese.jpg"
          title="Cheezy Pizza"
          text="Some quick example text to build on the card title and make up the bulk of the card's content."
        />
        <Items
          imgSrc="veg.jpg"
          title="Vegetable Pizza"
          text="Some quick example text to build on the card title and make up the bulk of the card's content."
        />
        <Items
          imgSrc="fam.jpg"
          title="Family Pizza"
          text="Some quick example text to build on the card title and make up the bulk of the card's content."
        />
        <Items
          imgSrc="pep.webp"
          title="Peperoni Pizza"
          text="Some quick example text to build on the card title and make up the bulk of the card's content."
        />
      </div>
    );
  }
}

export default PizzaTypes;
