import React from 'react'
import javabook from "../book java.jpeg"

const ProductItem = (props) => {
  return (
  
        
    <div className="product" >
  <img className="javaimage" src={props.myproduct.image}></img>
  <p> {props.myproduct.name} </p>
  <h6>{props.myproduct.price}</h6>
</div>
  )
   
}

export default ProductItem
