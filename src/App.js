import React from 'react';
import { Route } from 'wouter';
import './App.css';
import { GifsContextProvider } from './contexts/GifsContext';
import Detail from './pages/Detail/Detail';
import Home from './pages/Home/Home';
import SearchResults from './pages/SearchResults/SearchResults';

export default function App() {
  return (
    <div className="App">
        <section className='App-content'>
          <GifsContextProvider>
            <Route component={Home} path="/" />
            <Route component={SearchResults} path="/search/:keyword" />
            <Route component={Detail} path="/gif/:id"/>
          </GifsContextProvider>
        </section>
    </div>
  )
}

