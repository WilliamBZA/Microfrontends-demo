var React = require('react');

class CarNavButton extends React.Component {
    render() {
        return <a data-toggle="tab" href="#car"><i className="flaticon-car"></i> Car Rental</a>;
    }
}

class Car extends React.Component {
    render() {
      return <form method="post" className="colorlib-form">
      <div className="row">
       <div className="col-md-4">
           <div className="form-group">
        <label htmlFor="date">Where:</label>
        <div className="form-field">
          <input type="text" id="location" className="form-control" placeholder="Search Location" />
        </div>
      </div>
       </div>
    <div className="col-md-3">
      <div className="form-group">
        <label htmlFor="date">Start Date:</label>
        <div className="form-field">
          <i className="icon icon-calendar2"></i>
          <input type="text" id="date" className="form-control date" placeholder="Check-in date" />
        </div>
      </div>
    </div>
    <div className="col-md-3">
      <div className="form-group">
        <label htmlFor="date">Return Date:</label>
        <div className="form-field">
          <i className="icon icon-calendar2"></i>
          <input type="text" id="date" className="form-control date" placeholder="Check-out date" />
        </div>
      </div>
    </div>
    <div className="col-md-2">
      <input type="submit" name="submit" id="submit" value="Find Car" className="btn btn-primary btn-block" />
    </div>
  </div>
</form>;
    }
  }

export { Car, CarNavButton };