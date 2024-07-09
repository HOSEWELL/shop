import React from "react";
import Navbar from "./Navbar";
import { useLocation } from "react-router-dom";
import { Link } from "react-router-dom";

const ProductProfile = () => {
    const location = useLocation()
    const product = location.state;
    console.log(location.state);

    return (
        <>
            <Navbar />
            <div className="position-absolute" style={{borderRadius:"30px",padding:"12px", justifyContent:"center",margin:"3em 10em", width:"60%",display:"flex", gap:"20px"}} >

                <div><img src={product.images[0]} className="card-img-top" alt="card img cap" style={{borderRadius:"30px", height:"40em", width:"40em"}}/></div>

                <div className="card-body">
                    <h5 className="card-title">{product.title}</h5>
                    <h5 className="card-title">$ {product.price}</h5>
                    <p className="card-text">{product.description} </p>

                    <Link to="/buy" className="btn btn-primary">Buy</Link>
                    <br />
                    <Link to="/" state={product} className="btn btn-primary" style={{marginRight:"10em"}}>Home</Link>
                   
                    
                </div>
            </div>


        </>
    )
}
export default ProductProfile;