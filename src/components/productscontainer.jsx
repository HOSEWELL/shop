import React, { useState, useEffect } from "react";
import ProductCard from "./productcard";
import Navbar from "./Navbar";

const ProductContainer = () => {

    const [products, setProducts] = useState([])
    // useEffect -> queries the data as we load
    useEffect(() => {
        fetch("https://api.escuelajs.co/api/v1/products")
            .then((response) => {
                response.json().then((resp) => {
                    console.log(resp)
                    setProducts(resp)
                })
            }).catch((err) => {
                console.err(err);
            })
    }, [])


    return (
        <>
        <Navbar/>
        <br />
        <br />
            <div className="container">
                <h1 style={{alignContent:"center"}} >Buy Now</h1>
                <div className="row justify-content-around">
                    {
                        products.map((prod, index) => {
                            return (
                                <div className="col-md-4 mb-3" key={index}>
                                    <ProductCard product={prod} />
                                </div>
                            )
                        })
                    }
                </div>

            </div>
        </>

    )
}
export default ProductContainer;