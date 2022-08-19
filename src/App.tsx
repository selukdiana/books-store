import React from 'react';
import { BrowserRouter as Router, Route, Link, Routes } from 'react-router-dom';
import { legacy_createStore as createStore } from 'redux';
import { Provider } from 'react-redux';
import { HomePage } from './pages/home-page';
import { Header } from './components/header';
import { store } from './store';
import { BookPage } from './pages/book-page';
import { AuthPage } from './pages/auth-page';
import { SearchPage } from './pages/search-page';

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
          </Routes>
        </div>
      </Router>
    </Provider>
  );
};

export default App;
