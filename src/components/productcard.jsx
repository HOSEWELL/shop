import React from "react";
import { Link } from "react-router-dom";


const ProductCard = ({ product }) => {

  return (
    <>
      <div className="card" >
        <img src={product.images[0]} className="card-img-top" alt="card img cap" />

        <div className="card-body">
          <h5 className="card-title">{product.title}</h5>
          <h5 className="card-title">${product.price}</h5>
          <p className="card-text">{product.description} </p>

          <Link to="/productprofile" state={product} className="btn btn-primary" style={{marginRight:"5px"}}>Detail</Link>

          <a href="#" className="btn btn-primary">Add to Cart</a>
        </div>
      </div>

    </>
  )
}
export default ProductCard;