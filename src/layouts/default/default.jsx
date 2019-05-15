import React from 'react';

// Bootstrap init
import 'jquery/dist/jquery';
import 'popper.js/dist/popper';
import 'bootstrap/dist/js/bootstrap';

// Main style init
import '../../resources/scss/app.scss';

// Assets
// import Logo from './assets/images/logo.png';

// Components

export default props => (
    <main className="App">
        <div className="container">
            <div className="row pt-5 mt-5">
                <div className="col-12 text-center">
                    <img src="/assets/images/logo.png" alt=""/>
                </div>
            </div>
            {props.children}
        </div>
    </main>
);