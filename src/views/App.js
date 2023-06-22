import logo from "./logo.svg";
import "./App.scss";
import MyComponent from "./DemoComponent/MyComponent";
function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>Anh Thanh Ne</p>
        {/* <MyComponent /> */}
        <MyComponent></MyComponent>
      </header>
    </div>
  );
}

export default App;
