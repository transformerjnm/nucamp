import React, { Fragment } from 'react';
import products from '../../shared/products';
import {
    Row,
    Col,
    Button,
    Container,
} from 'reactstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTimes } from '@fortawesome/free-solid-svg-icons';
import styles from './cart.module.scss';
import CheckoutForm from '../form/CheckoutForm';

const Cart = (props) => {
    /*
        array returned by props.getCartItemsID is all the id of the products that the user has added to cart.
        This function gets and returns the product data for all the item ids as an array of objects.
    */
    let getProductsInfoById = () => {  
        let cartItemsId = props.getCartItemsId();
        let customerProductsInfo = cartItemsId.map( (singleId) => {
            let item = products.filter( product => product.id === singleId)
            return item[0];
        });
        return customerProductsInfo;
    };

    //creates and returns JSX that shows all the items in the cart
    let showCartProducts = () => {
        let cartProducts = getProductsInfoById();
        let total = 0.00;
        //calculate total and make each product jsx display
        let cartProductsDisplay = cartProducts.map( product => {
            total += product.price;
            return(
                <Row className={styles.borderBottom}>
                    <Col md="8"><p><FontAwesomeIcon icon={faTimes} className={styles.removeCartItem + " mr-3"} aria-hidden="true" onClick={() => props.removeCartItem(product.id)}/>{product.name}</p></Col>
                    <Col md="4" className={styles.price + "text-right"}><p> Price: ${product.price}</p></Col>
                </Row>
            );
        });
        let cartDisplay = <Row className="mt-5"><p>Looks like your cart is empty. Please add some awesome stuff to the cart to proceed. </p></Row>;
        if(cartProductsDisplay.length){
         cartDisplay = (
            <Fragment>
                <Button className="btn col-3 offset-9 mb-5" onClick={() => props.clearCart()}>Clear Cart</Button>
                {cartProductsDisplay}            
                <Row className="mt-5" ><Col className="text-right"><p> Total: ${total.toFixed(2)} </p></Col></Row>
                <Row className="mt-5" ><Col className="text-right"><p> Total After Tax(7%): ${( total * 1.07 ).toFixed( 2 )}</p></Col></Row>
                <CheckoutForm total={total}/>        
            </Fragment>
        );
        }
        return (
            <Fragment>
                {cartDisplay}
            </Fragment>
        ); 
    };
    
    return(
        <Container>
            {showCartProducts()}
        </Container>
    );
};

export default Cart;