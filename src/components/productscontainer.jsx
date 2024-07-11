import React, { useState, useEffect } from "react";
import ProductCard from "./productcard";
import Navbar from "./Navbar";

const ProductContainer = () => {

    const [products, setProducts] = useState([])
    const [searchTerm, setSearchTerm] = useState('')

    const handleSearchChange = (event) => {
        setSearchTerm(event.target.value)
    }

    useEffect(() => {
        fetch("https://api.escuelajs.co/api/v1/products")
            .then((response) => {
                response.json().then((resp) => {
                    console.log(resp)
                    setProducts(resp.filter((product) =>
                        product.title.toLowerCase().includes(searchTerm.toLowerCase())
                    ))
                })
            }).catch((err) => {
                console.err(err);
            })
    }, [searchTerm])

    return (
        <>
            <Navbar/>
            <br />
            <br />
            <div className="container">
                <h1 style={{alignContent:"center"}} >Buy Now</h1>
                
                <div className="col-md-4 mb-3">
                        <input type="text" className="form-control" placeholder="Search" value={searchTerm} onChange={handleSearchChange} />
                    </div>

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