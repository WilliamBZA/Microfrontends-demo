var React = require('react');

class FlightNavButton extends React.Component {
    render() {
        return <a data-toggle="tab" href="#flight"><i class="flaticon-plane"></i> Flights</a>;
    }
}

class Flight extends React.Component {
    render() {
      return <form method="post" class="colorlib-form">
      <div class="row">
       <div class="col-md-3">
           <div class="form-group">
        <label for="date">Where:</label>
        <div class="form-field">
          <input type="text" id="location" class="form-control" placeholder="Search Location" />
        </div>
      </div>
       </div>
    <div class="col-md-2">
      <div class="form-group">
        <label for="date">Check-in:</label>
        <div class="form-field">
          <i class="icon icon-calendar2"></i>
          <input type="text" id="date" class="form-control date" placeholder="Check-in date" />
        </div>
      </div>
    </div>
    <div class="col-md-2">
      <div class="form-group">
        <label for="date">Check-out:</label>
        <div class="form-field">
          <i class="icon icon-calendar2"></i>
          <input type="text" id="date" class="form-control date" placeholder="Check-out date" />
        </div>
      </div>
    </div>
    <div class="col-md-3">
      <div class="form-group">
        <label for="guests">Guest</label>
        <div class="form-field">
          <i class="icon icon-arrow-down3"></i>
          <select name="people" id="people" class="form-control">
            <option value="#">1</option>
            <option value="#">2</option>
            <option value="#">3</option>
            <option value="#">4</option>
            <option value="#">5+</option>
          </select>
        </div>
      </div>
    </div>
    <div class="col-md-2">
      <input type="submit" name="submit" id="submit" value="Find Flights" class="btn btn-primary btn-block" />
    </div>
  </div>
</form>;
    }
}

export { Flight, FlightNavButton };