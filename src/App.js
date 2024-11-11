//import logo from './logo.svg';
import './App.css';
import storeImage from "./book.webp"
import javabook from "./book java.jpeg"
import cssbook from "./css.jpeg"

function App() {
  console.log(storeImage)


  const products=[
  {
    name:"Beginning JavaScript",
    price:"10KD",

  },
  {
    name:"HTML and css book ",
    price:"10KD",

  }
  ];


const productsList = products.map((product,index)=>{
  return(
    <div className="product" key={index}>
  <img className="javaimage" src={javabook}></img>
  <p> {product.name} </p>
  <h6>{product.price}</h6>
</div>
  )
})
  return (

<div className="App">
<img class="storeImage" src={storeImage}></img>
 <h1>Bookstore</h1>
 <p>this is my book store</p>



<div className="Parent">


{productsList}

</div>

    </div>
  );
}

export default App;
