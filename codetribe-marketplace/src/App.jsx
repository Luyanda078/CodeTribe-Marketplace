// src/App.js

import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { useSelector } from 'react-redux';

import Navbar from './components/Navbar';
import Home from './pages/Home';
import ProductListing from './pages/ProductListing';
import Cart from './pages/Cart';
import AdminPanel from './pages/AdminPanel';
import OrderHistory from './pages/OrderHistory';
import UserProfile from './pages/UserProfile';
import Login from './pages/Login';
import Register from './pages/Register';
import PrivateRoute from './components/PrivateRoute';

function App() {
  const isAuthenticated = useSelector((state) => state.auth.isAuthenticated);

  return (
    <Router>
      <Navbar />
      <div className="container mx-auto px-4">
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/products" component={ProductListing} />
          <Route path="/cart" component={Cart} />
          <Route path="/login" component={Login} />
          <Route path="/register" component={Register} />
          <PrivateRoute path="/admin" component={AdminPanel} />
          <PrivateRoute path="/order-history" component={OrderHistory} />
          <PrivateRoute path="/profile" component={UserProfile} />
          <Route path="*">
            <h2 className="text-center text-red-500 mt-12">404 - Page Not Found</h2>
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;

