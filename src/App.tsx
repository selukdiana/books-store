import React from 'react';
import { BrowserRouter as Router, Route, Link, Routes } from 'react-router-dom';
import { legacy_createStore as createStore } from 'redux';
import { Provider } from 'react-redux';
import { HomePage } from './pages/HomePage';
import { Header } from './layout/Header';
import { store } from './store';
import { BookPage } from './pages/BookPage';
import { AuthPage } from './pages/AuthPage';
import { SearchPage } from './pages/SearchPage';
import { OrderPage } from './pages/OrderPage';

const App = () => {
  return (
    <Provider store={store}>
      <Router>
        <div className="App">
          <Header />
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/app/:isbn13" element={<BookPage />} />
            <Route path="/auth" element={<AuthPage />} />
            <Route path="/:query/:page" element={<SearchPage />} />
            <Route path="/order" element={<OrderPage />} />
          </Routes>
        </div>
      </Router>
    </Provider>
  );
};

export default App;
