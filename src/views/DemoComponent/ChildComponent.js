import React from "react";

class ChildComponent extends React.Component {
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
    const { name, age } = this.props;
    // let age = this.props.age;
    console.log("call re render:", this.state);
    return (
      <>
        <div>
          Child Component: {name} - {age}
        </div>
      </>
    );
  }
}

export default ChildComponent;
