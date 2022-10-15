import Navbar from "./components/Navbar";
import Home from "./components/Home";
import SocialLinks from "./components/socialinks";
import About from "./components/About";
import Portfolio from "./components/Portfolio";
import Experience from "./components/Experience";
function App() {
  return (
    <div>
       <Navbar/>
       <Home/>
       <SocialLinks/>
       <About/>
       <Portfolio/>
       <Experience/>
    </div>
  );
}

export default App;
