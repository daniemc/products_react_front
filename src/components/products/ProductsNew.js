import React, { Component } from 'react';
import ProductForm from './ProductForm';
import { Row, Col } from 'reactstrap';
import axios from 'axios'
import { toast } from 'react-toastify';

class ProductsNew extends Component {
    constructor(props) {
        super(props);
        this.state = {  }
    }

    createProduct(data) {
        axios.post('http://localhost:5000/products', data)
            .then(resp => {
                console.log(resp);
                toast.success("Product created!");
            })
            .catch(err => {
                toast.error("Error creating product!");
            });
    }

    render() { 
        return ( 
            <div>
                <Row>
                    <Col sm="12" md={{ size: 6, offset: 3 }}>
                        <ProductForm
                            mode="create"
                            action={this.createProduct}
                        />
                    </Col>
                </Row>                            
            </div>
         );
    }
}
 
export default ProductsNew;