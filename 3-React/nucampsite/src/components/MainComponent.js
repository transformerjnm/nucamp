import React, { Component, Fragment } from 'react';
import Home from './HomeComponent';
import { Switch, Route, Redirect, withRouter } from 'react-router-dom';
import Directory from './DirectoryComponent';
import Header from './HeaderComponent';
import Footer from './FooterComponent';
import Contact from './ContactComponent';
import CampsiteInfo from './CampsiteInfoComponent';
import About from './AboutComponent';
import { connect } from 'react-redux';
import { addComment } from '../redux/ActionCreators';

const mapStateToProps = state => {
    return {
        campsites: state.campsites,
        comments: state.comments,
        partners: state.partners,
        promotions: state.promotions
    };
};

const mapDispatchToProps = {
    addComment: (campsiteId, rating, author, text) => (addComment(campsiteId, rating, author, text))
};

class Main extends Component {

    render() {
        const HomePage = () => {
            return (
                <Home
                    campsite={this.props.campsites.filter(campsite => campsite.featured)[0]}
                    promotion={this.props.promotions.filter(promotion => promotion.featured)[0]}
                    partner={this.props.partners.filter(partner => partner.featured)[0]}
                />
            );
        };
        /*
            match came from route state. query params in the route are stored in match.params and passed to the campsiteWithId().we named one query param campsiteID in the Route.
        */
        const CampsiteWithId = ({ match }) => {
            return (
                <CampsiteInfo 
                    //+ in front of match changes string to array.
                    campsite={this.props.campsites.filter(campsite => campsite.id === +match.params.campsiteId)[0]}
                    comments={this.props.comments.filter(comment => comment.campsiteId === +match.params.campsiteId)}
                    addComment={this.props.addComment}
                />
            );
        };

        return (
            <Fragment>
                <Header />
                <Switch>
                    <Route path='/home' component={HomePage}/>
                    <Route exact path='/directory' render={() => <Directory campsites={this.props.campsites}/>} />
                    <Route  path='/contactus' component={Contact}/>
                    <Route path='/directory/:campsiteId' component={CampsiteWithId}/>
                    <Route path='/aboutus' render={() => <About partners={this.props.partners}/> }/>
                    <Redirect to='/home' />
                </Switch>              
                <Footer />
            </Fragment>
        );
    };
};

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Main));
