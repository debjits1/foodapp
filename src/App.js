import './App.css';
import React from 'react';
import Home from './screens/Home/Home';
import Header from './components/Header/Header';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import Recipe from './screens/Recipe/Recipe';
import { useState } from 'react';
export const CartContext = React.createContext();

function App() {
  let [cart, setCart] = useState({count: 0});
  
  return (
    <CartContext.Provider value={{cart, setCart}}>
      <div className="App">
        <Header></Header>
        <Router>
          <Switch>
            <Route path={`/recipe/:id`}>
              <Recipe></Recipe>
            </Route>
            <Route path="/">
              <Home></Home>
            </Route>
          </Switch>
        </Router>
      </div>
    </CartContext.Provider>

  );
}

export default App;
