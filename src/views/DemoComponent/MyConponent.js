import React from "react";

class MyComponent extends React.Component {
  state = {
    name: "Thành",
    nameLove: "Nhung",
  };

  handleOnChangeName = (event) => {
    this.setState({
      name: event.target.value,
      // nameLove: "Tạ Thị Hồng Nhung",
    });
  };

  handleClickButton = () => {
    console.log("Thanhnvph20218");
    alert("Yêu Tạ Thị Hồng Nhung");
  };

  render() {
    console.log("==> call render:", this.state);
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
        <div className="button">
          <button onClick={() => this.handleClickButton()}> Click me</button>
        </div>
      </>
    );
  }
}

export default MyComponent;
