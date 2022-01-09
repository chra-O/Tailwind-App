import "./App.css";
import Hero from "./component/Hero";
import Nav from "./component/Nav";
import Step from "./component/Step";

function App() {
  return (
    <div>
      <Nav />
      <Hero />
      <Step />
      <div id="fotter"></div>
    </div>
  );
}

export default App;
