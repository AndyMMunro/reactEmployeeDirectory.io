import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Home from "./pages/Home";
import Wrapper from "./components/Wrapper"


function App() {
  console.log("hope this works");
  return (
    <Router>
      <div>
          <Wrapper>
            <Route path="/" component={Home} />
          </Wrapper>
      </div>
    </Router>
  );
}

export default App;