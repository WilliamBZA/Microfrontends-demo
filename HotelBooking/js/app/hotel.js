var React = require('react');

class HotelNavButton extends React.Component {
    render() {
        return <a data-toggle="tab" href="#hotel"><i class="flaticon-resort"></i> Hotel</a>;
    }
}

class Hotel extends React.Component {
    render() {
      return <form method="post" class="colorlib-form">
      <div class="row">
       <div class="col-md-2">
           <div class="booknow">
               <h2>Book Now</h2>
               <span>Best Price Online</span>
           </div>
       </div>
    <div class="col-md-3">
      <div class="form-group">
        <label for="date">Check-in:</label>
        <div class="form-field">
          <i class="icon icon-calendar2"></i>
          <input type="text" id="date" class="form-control date" placeholder="Check-in date" />
        </div>
      </div>
    </div>
    <div class="col-md-3">
      <div class="form-group">
        <label for="date">Check-out:</label>
        <div class="form-field">
          <i class="icon icon-calendar2"></i>
          <input type="text" id="date" class="form-control date" placeholder="Check-out date" />
        </div>
      </div>
    </div>
    <div class="col-md-2">
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
      <input type="submit" name="submit" id="submit" value="Find Hotel" class="btn btn-primary btn-block" />
    </div>
  </div>
</form>;
    }
  }

export { Hotel, HotelNavButton };