import React from 'react';
import logo from './logo.png';
import AddBook from './containers/AddBook';
import VisibleBookList from './containers/VisibleBookList';
import Footer from './components/Footer';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
      </header>
      <div id="main" role="main">
        <AddBook />
        <VisibleBookList />
        <Footer />
      </div>
    </div>
  );
}

export default App;
