import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import {Movies} from "./data";
import { Route } from "react-router-dom";
import Home from "./Components/Home";
import MovieDesc from "./Components/MovieDesc"

function App() {
   
    return (
        <div>
             <Route
          exact
          path="/"
          render={() => (
            <Home  Movies={Movies} />
          )}
        />
         <Route
          exact
          path="/movieDesc/:title"
          render={(defaultProps) => (
            <MovieDesc {...defaultProps} Movies={Movies} />
          )}
        />
      </div>
    )
}

export default App
