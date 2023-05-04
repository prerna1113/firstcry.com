import logo from './logo.svg';
import './App.css';
import Navbar from './Component/Navbar';
import Slideshow from './Component/Slideshow';
import Cards from './Component/Home/Cards';
import Home from './Component/Home/Home';


function App() {
  return (
    <div className="App">
      <Navbar />
      <Slideshow />
      {/* <Cards /> */}
      <Home />
      
      
    </div>
  );
}

export default App;
