import "./App.scss";
import Login from "./components/login";
import HomeImage from "./components/homeImage";

function App() {
  return (
    <div className="App-container">
      <div className="App">
        <HomeImage />
        <Login />
      </div>
    </div>
  );
}

export default App;
