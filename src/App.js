import React from 'react';
import { Route } from 'react-router-dom';
import HomePage from './pages/homepage/homepage.component';
import './App.css';

const HatsPage = () => (
  <h1>Hat Page</h1>
)

function App() {
  return (
    <div>
       <Route exact path='/' component={HomePage} />
       <Route path='/hats' component={HatsPage} />
    </div>
  );
}

export default App;
 