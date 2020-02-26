import React from 'react';
import { BrowserRouter as Router, Route} from 'react-router-dom'
import { Container } from 'reactstrap'
import NavBar from './components/NavBar'
import ProductsList from './components/products/ProductsList'
import ProductsNew from './components/products/ProductsNew'
import ProductsEdit from './components/products/ProductsEdit'

function App() {
  return (
    <Router>
      <NavBar></NavBar>
      <Container>
        <Route path="/products" exact component={ProductsList}></Route>
        <Route path="/products/new" exact component={ProductsNew}></Route>
        <Route path="/products/edit/:id" exact component={ProductsEdit}></Route>
      </Container>
    </Router>
  );
}

export default App;
