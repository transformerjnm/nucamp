import React, { Component } from 'react';
import Main from './components/MainComponet';
import './App.css';
import { CAMPSITES } from  './shared/campsites';

class App extends Component {

    constructor( props ) {
        super( props );
        this.state = {

            campsites: CAMPSITES
        }
    }

    render() {
        return (
            <div className="App">
                <Main />
            </div>
        );
    }

}

export default App;