var React = require('react');
var ReactDOM = require('react-dom');
var createReactClass = require('create-react-class');

import { Flight, FlightNavButton } from './flight.js';
import { Hotel, HotelNavButton } from './hotel.js';
import { Car, CarNavButton } from './car.js';
import { Cruise, CruiseNavButton } from 'microfrontends-cruises';

var Index = createReactClass({
  render: function() {
    return (
        <div className="row">
        <div className="search-wrap">
            <div className="container">
                <ul className="nav nav-tabs">
                    <li className="active"><FlightNavButton></FlightNavButton></li>
                    <li><HotelNavButton></HotelNavButton></li>
                    <li><CarNavButton></CarNavButton></li>
                    <li><CruiseNavButton></CruiseNavButton></li>
                </ul>
            </div>
            <div className="tab-content">
                <div id="flight" className="tab-pane fade in active">
                    <Flight></Flight>
                </div>
                <div id="hotel" className="tab-pane fade">
                    <Hotel></Hotel>
                </div>
                <div id="car" className="tab-pane fade">
                    <Car></Car>
                </div>
                <div id="cruises" className="tab-pane fade">
                    <Cruise></Cruise>
                </div>
            </div>
        </div>
    </div>
    );
  }
});

ReactDOM.render(<Index />, document.getElementById('colorlib-reservation'));