//import logo from './logo.svg';
import './App.css';
import storeImage from "./book.webp"

function App() {
  console.log(storeImage)
  return (
<div className="App">
 <h1>Bookstore</h1>
 <p>this is my book store</p>

<img class="storeImage" src={storeImage}></img>

    </div>
  );
}

export default App;
