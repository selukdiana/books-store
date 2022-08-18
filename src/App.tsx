import React from 'react';
import { BrowserRouter as Router, Route, Link, Routes } from 'react-router-dom';
import { legacy_createStore as createStore } from 'redux';
import { Provider } from 'react-redux';
import { HomePage } from './pages/home-page';
import { Header } from './components/header';
import { store } from './store';
import { BookPage } from './pages/book-page';

const App = () => {
  return (
    <Provider store={store}>
      <Router>
        <div className="App">
          <Header />
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/app/:title" element={<BookPage />} />
          </Routes>
        </div>
      </Router>
    </Provider>
  );
};

export default App;
