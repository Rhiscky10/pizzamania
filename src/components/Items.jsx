import React from "react";

class Items extends React.Component {
  render() {
    return <div className="col-md-3">
	<div className="card" style="width: 18rem;">
  <img src="cheese.jpg" height="200vh" className="card-img-top" alt="..."><h1>Cheezy Pizza</h1>
  <div className="card-body">
    <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
  </div>
</div>
</div>
  }
}

export default Items;
