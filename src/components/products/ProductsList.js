import React, { Component } from 'react';
import { Row, Col, Table, Button } from 'reactstrap';
import axios from 'axios';

class ProductsList extends Component {
    constructor(props) {
        super(props);
        this.state = { 
            products: []
         }
    }

    componentDidMount() {
        axios.get('http://localhost:5000/products')
            .then(resp => {
                if(resp.status === 200) {
                    this.setState({ products: resp.data });
                }
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
                                {this.state.products && this.state.products.map((product, i) =>
                                    (<tr>    
                                        <td>{i + 1}</td>
                                        <td>{product.name}</td>
                                        <td>
                                            <Button color="warning">Edit</Button>{' '}
                                            <Button color="danger">Delete</Button>
                                        </td>
                                    </tr>)
                                )}
                            </tbody>
                        </Table>
                    </Col>
                </Row>  
            </div>
         );
    }
}
 
export default ProductsList;