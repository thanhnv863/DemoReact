import React from "react";

class MyComponent extends React.Component {
  state = {
    name: "Thành",
    nameLove: "Nhung",
  };
  render() {
    return (
      <>
        <div className="Thanh">Xin Chào Anh {this.state.name} Hihi</div>
        <div className="Nhung">
          {this.state.name} love {this.state["nameLove"]}
        </div>
      </>
    );
  }
}

export default MyComponent;
