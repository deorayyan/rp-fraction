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
        <div className="container-fluid">{props.children}</div>
    </main>
);
