import React, { Component } from 'react';
import { Button, Form, FormGroup, Label, Input } from 'reactstrap';
class ProductForm extends Component {
    constructor(props) {
        super(props);        
        this.state = { 
            name: '',
            product: {}
         }
         this.onInputChange = this.onInputChange.bind(this)
         this.onCallAction = this.onCallAction.bind(this)
         this.onKeyDown = this.onKeyDown.bind(this)
    }

    static getDerivedStateFromProps(props, state) {
        if (props.mode === 'update') {            
            if (props.product._id !== state.product._id) {                
                return {
                    name: props.product.name,
                    product: props.product
                }
            }
        }
        return null;
    }

    onInputChange(e) {
        this.setState({
            [e.target.name]: e.target.value
        });
    }

    onCallAction() {
        this.props.action(this.state);
        this.setState({ name: '' });
    }

    onKeyDown(e) {        
        if (e.key === 'Enter') {
            e.preventDefault();
            this.onCallAction()
        }
    }

    render() { 
        const { name } = this.state
        return ( 
            <Form>
                <FormGroup>
                    <Label for="product_name">Name</Label>
                    <Input 
                        id="product_name" 
                        type="text" 
                        name="name" 
                        value={name} 
                        placeholder="Enter product name"
                        onKeyDown={this.onKeyDown}
                        onChange={this.onInputChange} />
                </FormGroup>   
                <Button color="primary" onClick={this.onCallAction}>
                    { this.props.mode === 'create' ? 'Save' : 'Update' }
                </Button>             
            </Form>
         );
    }
}
 
export default ProductForm;