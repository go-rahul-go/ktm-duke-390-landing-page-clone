
import "./style.css";
import Hero from "./components/Hero";
import Intro from "./components/Intro";
import WinDuke from "./components/WinDuke";
import Clutch from "./components/Clutch";
import Article1 from "./components/Article1";
import Article2 from "./components/Article2";
import Launch from "./components/Launch";
import Article3 from "./components/Article3";
import Style from "./components/Style";
import Article4 from "./components/Article4";
import TechincalDetails from "./components/TechincalDetails";
function App() {
 
  return(
    <div className="container">
    <Hero/>
    <Intro/>
    <WinDuke/>
    <Article1/>
    <Clutch/>
    <Article2/>
    <Launch/>
    <Article3/>
    <Style/>
    <Article4/>
    <TechincalDetails/>
    </div>
  )
    
}

export default App;
