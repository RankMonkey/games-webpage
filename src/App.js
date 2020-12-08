//import all components and libraries
//import Shop component
import Shop from './components/Shop';
//import Profile component
import Profile from  './components/Profile';
//import Home component
import Home from  './components/Home';
//import landingPage component
import LandingPage from  './components/LandingPage';
//import aBrowserRouter, Route , Link component
import { BrowserRouter, Route , Link} from "react-router-dom";
import './App.css';

//functional component
function App() {

   return (
//is the router implementation for HTML5 browsers 
    <BrowserRouter>

<nav class="navbar navbar-expand-lg navbar-dark bg-dark">
    <span class="navbar-brand">    


    </span>
    <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>

    <div class="collapse navbar-collapse" id="navbarNav">
      <ul class="navbar-nav">
        <li class="nav-item active">
          <Link to="/Home">
          <a className={"nav-link"} href="#">
          Home
          </a>
          </Link>
        </li>

        <li class="nav-item">
          <Link to="/Shop">
          <a className={"nav-link"} href="#">
          Shop
          </a>
          </Link>
        </li>
  
        <li class="nav-item">
          <Link to="/Profile">
          <a className={"nav-link"} href="#">
          Profile
          </a>
          </Link>
        </li>
        
      </ul>
  </div>
</nav> 
  // Link is your replacement for anchor tags.
          //when the page starts up this is the age that will be first the others are suited for the navigation bar
       <Route exact={true} path="/" component={LandingPage} />  
          <Route path="/Home" component={Home} />       
          <Route path="/Shop" component={Shop} />
          <Route path="/Profile" component={Profile} />    
   
// Route is the conditionally shown component based on matching a path to a URL.
      </BrowserRouter>
 
  );
}


export default App;
