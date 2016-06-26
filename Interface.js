import React from 'react';
import LoginPage from './login';


export default class Interface extends React.Component {

    // static defaultProps = {
    //     title: 'Undefined Product',
    //     price: 100,
    //     initialQty: 0
    // };

    // state = {
    //     route: "this is ridiculous"
    // };

    constructor() {
        super();
    }
    //
    // componentWillMount(){
    //   this.callback = (function(){
    //    this.forceUpdate();
    //   }).bind(this);
    //   this.state.router.on('route', this.callback);
    // }
    // componentWillUnmount(){
    //   this.state.router.off('route', this.callback);
    //   // console.log(this.props.router);
    //   // var route_status = this.state.route;

    // if (route_status.current = 'signInPage'){
    //   _current = LoginPage;
    // }
    // }

    render() {
        return (
          <div>{LoginPage}</div>
        );
    }
}

// <article className="row large-4">
//     <figure className="text-center">
//         <p>
//             <img src={this.props.image}/>
//         </p>
//         <figcaption>
//             <h2>{this.props.title}</h2>
//         </figcaption>
//     </figure>
//     <p className="large-4 column"><strong>Quantity: {this.state.qty}</strong></p>
//
//     <p className="large-4 column">
//         <button onClick={this.increaseQty.bind(this)} className="button success">+</button>
//         <button onClick={this.decreaseQty.bind(this)} className="button alert">-</button>
//     </p>
//
//     <p className="large-4 column"><strong>Price per item:</strong> ${this.props.price}</p>
//
//     <h3 className="large-12 column text-center">
//         Total: ${this.state.total}
//     </h3>
//
// </article>;
