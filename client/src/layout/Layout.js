import React from 'react';
import { Route, Switch } from 'react-router-dom';
import News from '../components/News/News';
import Dashboard from '../components/Dashboard';
import Navbar from './Navbar';
import Footer from './Footer';
import Error from './Error';

const Layout = () => (
  <>
    <Navbar />
    <Switch>
      <Route path="/dashboard" component={Dashboard} />
      <Route path="/" component={News} exact />
      <Route component={Error} />
    </Switch>
    <Footer />
  </>
);

export default Layout;
