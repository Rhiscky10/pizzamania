import React from "react";

class Items extends React.Component {
  render() {
    console.log(this.props.imgSrc);
    return <div className="col-md-3">
	<div className="card" style="width: 18rem;">
  <imgSrc= {"cheese.jpg"} height="200vh" className="card-img-top" alt="..."><h1>{this.props.title}</h1>
  <div className="card-body">
    <p className="card-text">{this.props.text}</p>
  </div>
</div>
</div>
  }
}

export default Items;
