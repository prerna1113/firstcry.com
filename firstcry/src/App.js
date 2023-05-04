import logo from './logo.svg';
import './App.css';
import Navbar from './Component/Navbar';
import Slideshow from './Component/Slideshow';
import Cards from './Component/Home/Cards';


function App() {
  return (
    <div className="App">
      <Navbar />
      <Slideshow />
      <Cards />
      
      
    </div>
  );
}

export default App;
