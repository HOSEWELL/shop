import React from "react";

const Product= ({product})=>{
  
    return(
        <>
        <div class="card" >
        <img src={product.images[0]} class="card-img-top" alt="card img cap" />

        <div class="card-body">
          <h5 class="card-title">{product.title}</h5>
          <h5 class="card-title">${product.price}</h5>
          <p class="card-text">{product.description} </p>
          <a href="#" class="btn btn-primary">Add to Cart</a>
        </div>
      </div>

        </>
    )
}
export default Product;