import React from "react";

class MyComponent extends React.Component {
  state = {
    name: "Thành",
    nameLove: "Nhung",
  };
  handleOnChangeName = (event) => {
    this.setState({
      name: event.target.value,
    });
  };
  render() {
    return (
      <>
        <div className="Thanh">
          <input
            value={this.state.name}
            type="text"
            onChange={(event) => this.handleOnChangeName(event)}
          />
          Xin Chào Anh {this.state.name} Hihi
        </div>
        <div className="Nhung">
          {this.state.name} love {this.state["nameLove"]}
        </div>
      </>
    );
  }
}

export default MyComponent;
