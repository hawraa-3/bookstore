import React from 'react'
import javabook from "../book java.jpeg"

const ProductItem = () => {
  return (
  
        
    <div className="product" >
  <img className="javaimage" src={javabook}></img>
  <p> book </p>
  <h6>12kd</h6>
</div>
  )
   
}

export default ProductItem
