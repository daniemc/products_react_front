import React, { Component } from 'react';
import { Row, Col, Table, Button } from 'reactstrap';
import { Link } from 'react-router-dom';
import axios from 'axios';

class ProductsList extends Component {
    constructor(props) {
        super(props);
        this.state = { 
            products: []
         }

        this.getData = this.getData.bind(this);
    }

    getData() {
        axios.get('http://localhost:5000/products')
            .then(resp => {
                if(resp.status === 200) {
                    this.setState({ products: resp.data });
                }
            })
            .catch(err => console.log(err));
    }

    componentDidMount() {
        this.getData();
    }

    onDeleteProduct(id) {
        axios.delete(`http://localhost:5000/products/${id}`)
            .then(() => {
                this.getData();
            })
            .catch(err => console.log(err));
    }

    render() { 
        return ( 
            <div>
                <Row>
                    <Col sm="12" md={{ size: 6, offset: 3 }}>
                        <Table striped>
                            <thead>
                                <tr>
                                    <th>#</th>
                                    <th>Product name</th>
                                    <th className="">Actions</th>
                                </tr>
                            </thead>
                            <tbody>
                                {this.state.products && this.state.products.map((product, i) => (
                                    <tr key={`product-list-${i}`}>    
                                        <td>{i + 1}</td>
                                        <td>{product.name}</td>
                                        <td>
                                            <Link to={`/products/edit/${product._id}`}>
                                                <Button color="warning">Edit</Button>
                                            </Link>{' '}
                                            <Button 
                                                color="danger"
                                                onClick={() => {this.onDeleteProduct(product._id)}}>Delete</Button>
                                        </td>
                                    </tr>
                                ))}
                            </tbody>
                        </Table>
                    </Col>
                </Row>  
            </div>
         );
    }
}
 
export default ProductsList;