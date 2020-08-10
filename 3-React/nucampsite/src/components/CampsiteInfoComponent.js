import React, { Component, Fragment } from 'react';
import { Card, CardImg, CardText, CardBody, CardTitle } from 'reactstrap';

let RenderCampsite = ( campsite ) => {
    return(
        <div className="col-md-5 m-1">
            <Card>
                <CardImg top src={campsite.image} alt={campsite.name} />
                  <CardBody>
                    <CardTitle>{campsite.name}</CardTitle>
                    <CardText>{campsite.description}</CardText>
                </CardBody>
            </Card>
        </div>
    );
};

let RenderComments = (comments) => {
    if(comments){
        return(
            <div className="col-md-5 m-1">
                <h4>Comments</h4>
                { 
                    comments.map((comment) => {                        
                        return(
                            <Fragment key={comment.id}>
                                <p>{comment.text}</p>
                                <p>
                                    {
                                        comment.author},&nbsp;
                                        {new Intl.DateTimeFormat('en-US', { year: 'numeric', month: 'short', day: '2-digit'}).format(new Date(Date.parse(comment.date)))
                                    }
                                </p>
                            </Fragment>                           
                        );                      
                    })
                }
            </div>
        );
    }
};

function CampsiteInfo(props) {
    if(props.campsite){
        return(
            <div className="container">
                <div className="row">{RenderCampsite(props.campsite)} {RenderComments(props.campsite.comments) }</div>
            </div>               
        );
    } else {
        return (
            <div></div>
        );
    }
};

export default CampsiteInfo;