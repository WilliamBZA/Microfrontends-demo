var React = require('react');
var ReactDOM = require('react-dom');
var createReactClass = require('create-react-class');

import { Flight, FlightNavButton } from './flight.js';
import { Hotel, HotelNavButton } from './hotel.js';
import { Car, CarNavButton } from './car.js';

var Index = createReactClass({
  render: function() {
    return (
        <div class="row">
        <div class="search-wrap">
            <div class="container">
                <ul class="nav nav-tabs">
                    <li class="active"><FlightNavButton></FlightNavButton></li>
                    <li><HotelNavButton></HotelNavButton></li>
                    <li><CarNavButton></CarNavButton></li>
                </ul>
            </div>
            <div class="tab-content">
                <div id="flight" class="tab-pane fade in active">
                    <Flight></Flight>
                </div>
                <div id="hotel" class="tab-pane fade">
                    <Hotel></Hotel>
                </div>
                <div id="car" class="tab-pane fade">
                    <Car></Car>
                </div>
            </div>
        </div>
    </div>
    );
  }
});

ReactDOM.render(<Index />, document.getElementById('colorlib-reservation'));