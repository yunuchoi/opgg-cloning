import React, { Component } from "react";
import { BrowserRouter, Route } from "react-router-dom";

// import { ThemeProvider } from "@material-ui/core/styles";
import Navigation from "./components/Navigation/Navigation";
import Main from "./containers/Main/Main";
import Champions from "./containers/Champions/Champions";

import "./App.css";

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <div className="App">
          <Navigation></Navigation>
          <Route path="/" exact component={Main} />
          <Route path="/statistics/" component={Champions} />
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
