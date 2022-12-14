import "./App.css";
import UsersContainer from "./components/UsersContainer";
import UsersMediaContainer from "./components/UsersMediaContainer";
import Divider from "./components/ui/Divider";

function App() {
  return (
    <div className="App">
      <div className="heading">
        <h2>SUPER SDK Sample App</h2>
      </div>
      <UsersContainer />
      <Divider />
      <UsersMediaContainer />
    </div>
  );
}

export default App;
