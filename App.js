
import './App.css';
import { BrowserRouter,Routes,Route } from 'react-router-dom';
import HeadHome from './Components/HeadHome';
import Header from './Components/Header';
import Home1 from './Components/Home1';
import About from './Components/About';
import Courses from './Components/Courses';
import Career from './Components/Career';
import Contact from './Components/Contact';
import Getstarted from './Components/GetStarted';
import Login from './Components/Login';
import SignUp from './Components/SignUp';
import Footer from './Components/Footer';


function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <HeadHome/>
      <Header/>
      <Routes>
        <Route path="/" element={<Home1/>}/>
        <Route path="/about" element={<About/>}/>
        <Route path="/courses" element={<Courses/>}/>
        <Route path="/career" element={<Career/>}/>
        <Route path="/contact" element={<Contact/>}/>
        <Route exact path="/getstarted" element={<Getstarted/>}/>
        
        <Route path="/getstarted/login" element={<Login/>}/>
        
        <Route path="/getstarted/signup" element={<SignUp/>}/>
        
        </Routes>
        <Footer/>
       {/* <Footer/>*/}
        {/* <Routes>
        <Route path="/getstarted/login" element={<Login/>}/>
        <Route path="/getstarted/signup" element={<SignUp/>}/>
        </Routes> */}
     
      
      </BrowserRouter>
      
    </div>
  );
}

export default App;
