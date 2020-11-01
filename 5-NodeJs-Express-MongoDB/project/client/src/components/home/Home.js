import React, {Fragment, useEffect} from 'react';
import { Row, Container } from 'reactstrap';
import products from '../../shared/products';
import ProductCard from '../productCard/ProductCard';
import ContactForm from '../form/ContactForm';

const Home = (props) => {
    useEffect(() => {
        getData().then(res => console.log(res));
    }, []);
    let getData = async () => {
        const response = await fetch('/home', { method: 'GET',  headers: {
            "Content-Type": "application/json",
        }});
        console.log(response);
        const body = await response.json();
        return body;
    }
    
    let getFeaturedProducts = () => {
        let bestSellers = products.filter( product => product.bestSeller === true );
        let bestSellersCards = bestSellers.map( (product) => {
            return(
                <ProductCard addCartItem={props.addCartItem} key={product.id} id={product.id} price={product.price.toFixed(2)} description={product.description} title={product.title} imgSrc={product.imgSrc} imgAlt={product.imgAlt}/>
            );
        });
        return bestSellersCards;
    };

    return(
        <Fragment>
            <Container>
                <h2 className="text-center my-5 py-5">Best Sellers</h2>
                <Row>                 
                    { getFeaturedProducts() }                  
                </Row>
            </Container>
            <Container>
                <ContactForm />
            </Container>
        </Fragment>
    );
};

export default Home;