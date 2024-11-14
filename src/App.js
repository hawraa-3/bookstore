//import logo from './logo.svg';
import './App.css';
import storeImage from "./book.webp"
import javabook from "./book java.jpeg"
import cssbook from "./css.jpeg"
import ProductItem from './Components/ProductItem';
import productsData from './data/products';


function App() {
  console.log(storeImage)




const productsList = productsData.map((product,index)=>{
  
  return <ProductItem  myproduct={product}/>;
});
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
