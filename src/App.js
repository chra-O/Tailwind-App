import "./App.css";
import Nav from "./component/Nav";
import SignIn from "./component/SignIn";
import SignUp from "./component/SignUp";
import { Routes, Route } from "react-router-dom";
import Home from "./component/Home";
import Contact from "./component/Contact"
import Help from "./component/Help"

function App() {
  return (
    <div>
      <Nav />
      <Routes>
       
        <Route exact path="/" element={<Home />} />
        <Route exact path="/SignIn" element={<SignIn />} />
        <Route exact path="/signup" element={<SignUp />} />
        <Route exact path="/Contact" element={<Contact />} />
        <Route exact path="/Help" element={<Help />} />
      </Routes>
      {/* <div id="fotter"></div> */}
    </div>
  );
}

export default App;
