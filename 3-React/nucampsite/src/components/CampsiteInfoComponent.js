import React, { Fragment, Component } from 'react';
import { Card, CardImg, CardText, CardBody, Breadcrumb, BreadcrumbItem, Button, Modal, ModalBody, ModalHeader, Label } from 'reactstrap';
import { Link } from 'react-router-dom';
import { Control, LocalForm, Errors } from 'react-redux-form';

const required = val => val && val.length;
const maxLength = len => val => !val || (val.length <= len);
const minLength = len => val => val && (val.length >= len);

let RenderCampsite = ( {campsite} ) => {
    return(
        <div className="col-md-5 m-1">
            <Card>
                <CardImg top src={campsite.image} alt={campsite.name} />
                  <CardBody>
                    <CardText>{campsite.description}</CardText>
                </CardBody>
            </Card>
        </div>
    );
};

let RenderComments = ({comments}) => {
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
                <CommentForm />
            </div>
        );
    }
};

class CommentForm extends Component {
    state = {
        isModalOpen: false,
    };

    toggleModal = () => {
        this.setState({
            isModalOpen: !this.state.isModalOpen
        });
    };

    handleSubmit = (values) => {
        console.log(JSON.stringify(values));
        alert( JSON.stringify(values));
    }

    render() {       
        return(
            <Fragment>
                <Modal isOpen={this.state.isModalOpen} toggle={this.toggleModal}>
                    <ModalHeader toggle={this.toggleModal}>Login</ModalHeader>
                    <ModalBody>
                        <LocalForm onSubmit={values => this.handleSubmit(values)}>                   
                            <div className="form-group">
                                <Label htmlFor="rating">Rating</Label>
                                <Control.select model=".rating" id="rating" name="rating" className="form-control">
                                    <option>1</option>
                                    <option>2</option>
                                    <option>3</option>
                                    <option>4</option>
                                    <option>5</option>
                                </Control.select>
                            </div>
                            <div className="form-group">
                                <Label htmlFor="author">Your Name</Label>
                                <Control.text 
                                    model=".author" 
                                    id="author" 
                                    name="author" 
                                    className="form-control"  
                                    validators={{
                                        required, 
                                        minLength: minLength(2),
                                        maxLength: maxLength(15),
                                    }}
                                />
                                <Errors
                                    className="text-danger"
                                    model=".author"
                                    show="touched"
                                    component="div"
                                    messages={{
                                        required: 'Required',
                                        minLength: 'Must be at least 2 characters',
                                        maxLength: 'Must be 15 characters or less',
                                    }}
                                />
                            </div>
                            <div className="form-group">
                                <Label>Comment</Label>
                                <Control.textarea row="6" model=".comment" id="comment" name="comment" className="form-control"/>
                            </div>
                            <div className="form-group">
                                <Button type="submit" color="primary">Submit</Button>
                            </div>                          
                        </LocalForm>
                    </ModalBody>
                </Modal>
                <Button outline onClick={this.toggleModal}>
                    <i class="fa fa-pencil fa-lg" aria-hidden="true"></i>Submit Comment               
                </Button>
            </Fragment>
        );
    };
};

function CampsiteInfo(props) {
    if(props.campsite){
        return(
            <div className="container">
                  <div className="row">
                    <div className="col">
                        <Breadcrumb>
                            <BreadcrumbItem><Link to="/directory">Directory</Link></BreadcrumbItem>
                            <BreadcrumbItem active>{props.campsite.name}</BreadcrumbItem>
                        </Breadcrumb>
                        <h2>{props.campsite.name}</h2>
                        <hr />
                    </div>
                </div>
                <div className="row">
                    <RenderCampsite campsite={props.campsite} /> <RenderComments comments={props.comments} />
                </div>
            </div>               
        );
    } else {
        return (
            <div></div>
        );
    }
};

export default CampsiteInfo;