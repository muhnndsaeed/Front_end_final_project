import './App.css';
import Blogs from './component/Blogs';
import Create from './component/Create';
import Header from './component/Header';
import Login from './component/Login';
import Footer from './component/Footer';
import Home from './component/Home';
import About from './component/About';
import { BrowserRouter as Router,Routes, Route, } from 'react-router-dom'; 

function App() {
  return (
    <Router>
      <div className="App">
        <Header/>
        <div className="container">
          <Routes>
            <Route path="/" element={<Home/>}></Route>
            <Route path="/Blogs" element={<Blogs/>}></Route>
            <Route path="/create" element={<Create/>}></Route>
            <Route path="/Login" element = {<Login/>}></Route>
            <Route path="/About"  element = {<About/>}></Route>
            
            
          </Routes>
        </div>
        <Footer/>
      </div>
    </Router>
  );
}

export default App;