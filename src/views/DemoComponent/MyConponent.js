import React from "react";

class MyComponent extends React.Component {
  // JSX => return block
  state = {
    firstName: "",
    lastName: "",
  };
  handleChangeFirstName = (event) => {
    this.setState({
      firstName: event.target.value,
      // lastName: event.target.value,
    });
  };
  handleChangeLastName = (event) => {
    this.setState({
      lastName: event.target.value,
    });
  };

  handleSubmit = (event) => {
    //ngăn chặn submit
    event.preventDefault();
    // alert("click me");
    console.log("==> check data input:", this.state);
  };
  render() {
    console.log("call re render:", this.state);
    return (
      <>
        <form>
          <label htmlFor="fname">First name:</label>
          <br></br>
          <input
            type="text"
            value={this.state.firstName}
            onChange={(event) => this.handleChangeFirstName(event)}
          />
          <br></br>
          <label htmlFor="lname">Last name:</label>
          <br></br>
          <input
            type="text"
            value={this.state.lastName}
            onChange={(event) => this.handleChangeLastName(event)}
          />
          <br></br>
          <input type="submit" onClick={(event) => this.handleSubmit(event)} />
        </form>
      </>
    );
  }
}

export default MyComponent;
