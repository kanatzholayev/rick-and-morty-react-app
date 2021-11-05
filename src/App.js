import React, { Component } from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Header from "./Components/layout/Header";
import EpisodePage from "./Components/pages/EpisodePage/";
import CharactersPage from "./Components/pages/CharactersPage/";
import LocationPage from "./Components/pages/LocationPage/";
import MyWatchlistPage from "./Components/pages/MyWatchlistPage/";
import "./App.scss";

class App extends Component {
  render() {
    return (
      <Router>
        <div className="App">
          <Header />
          <Route exact path="/" component={CharactersPage} />
          <Route path="/episode" component={EpisodePage} />
          <Route path="/location" component={LocationPage} />
          <Route path="/watchlist" component={MyWatchlistPage} />
        </div>
      </Router>
    );
  }
}

export default App;
