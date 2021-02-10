import React from 'react';
import './Orders.css';
function Orders() {
    return (

        <div className="jumbotron__hole">
            <h1 className="display__name">Thank You!</h1>
            <h1 className="display__name">Your Order Has Been Successfully Placed.</h1>
            <p className="lead__name"><strong>Please check your email</strong> and stay updated with delivery of your item</p>
            <div className="lead__name">
                <a className="btn__set" href="/" role="button">Continue Shopping</a>
            </div>
        </div>
    )
}

export default Orders
