import React from 'react';
import ReactDOM from 'react-dom';
import Interface from './interface.js';
import router from './router';
import Backbone from 'backbone';
import jquery from 'jquery';


jquery(function(){
  Backbone.history.start();
});


ReactDOM.render(
    React.createElement(Interface, {router: router}),
    document.querySelector('.root')
);
