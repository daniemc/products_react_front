import React from 'react';
import { BrowserRouter as Router, Route} from 'react-router-dom'
import { Container } from 'reactstrap'
import NavBar from './components/NavBar'
import ProductsList from './components/products/ProductsList'
import ProductsNew from './components/products/ProductsNew'
import ProductsEdit from './components/products/ProductsEdit'
import { ToastContainer } from 'react-toastify';

function App() {
  return (
    <Router>
      <NavBar></NavBar>
      <Container>
        <Route path="/products" exact component={ProductsList}></Route>
        <Route path="/products/new" exact component={ProductsNew}></Route>
        <Route path="/products/edit/:id" exact component={ProductsEdit}></Route>
        <Route path="*" exact component={ProductsList}></Route>
      </Container>
      <ToastContainer position="bottom-right" autoClose={3000} />   
    </Router>
  );
}

export default App;
