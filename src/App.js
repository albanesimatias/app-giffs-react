import React from 'react';
import { Route } from 'wouter';
import './App.css';
import Home from './pages/Home/Home';
import SearchResults from './pages/SearchResults/SearchResults';

export default function App() {
  return (
    <div className="App">
        <section className='App-content'>
          <Route component={Home} path="/" />
          <Route component={SearchResults} path="/search/:keyword" />
        </section>
    </div>
  )
}

