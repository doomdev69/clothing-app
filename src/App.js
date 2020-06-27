import React from 'react';
import { Route } from 'react-router-dom';
import HomePage from './pages/homepage/homepage.component';
import ShopPage from './pages/shoppage/shoppage.component';
import Header  from './components/header/header.component';
import './App.css';

function App() {
  return (
    <div>
      <Header />
      <div>
        <Route exact path='/' component={HomePage} />
        <Route path='/shop' component={ShopPage} />
      </div>
    </div>
  )
}

export default App;
 