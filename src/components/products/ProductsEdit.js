import React, { Component } from 'react';
import ProductForm from './ProductForm';
import { Row, Col } from 'reactstrap';
import axios from 'axios';

class ProductsEdit extends Component {
    constructor(props) {
        super(props);
        this.state = { 
            id: props.match.params.id,
            product: {}
        }        

        this.onUpdateProduct = this.onUpdateProduct.bind(this);
    }

    componentDidMount() {
        const { id } = this.state;

        axios.get(`http://localhost:5000/products/${id}`)
            .then(resp => {
                if (resp.status === 200) {
                    this.setState({ product: resp.data });
                }
            })
            .catch(err => console.log(err));
    }

    onUpdateProduct(data) {
        const productToEdit = this.state.product
        productToEdit.name = data.name
        axios.put('http://localhost:5000/products/update', productToEdit)
            .then(resp => {
                if (resp.status === 200) {                    
                    this.props.history.push('/products')
                }
            })
            .catch(err => console.log(err));
    }

    render() { 
        return ( 
            <div>
                <Row>
                    <Col sm="12" md={{ size: 6, offset: 3 }}>
                        <ProductForm
                            mode="update"
                            product={this.state.product}
                            action={this.onUpdateProduct}
                        />
                    </Col>
                </Row>
            </div>
         );
    }
}
 
export default ProductsEdit;