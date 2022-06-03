import "./App.css";
import "./assets/css/app.scss";
import Container from "./components/Container";
import Navigation from "./components/Navigation";
function App() {
  return (
    <div className="App">
      <div className="Content">
        <Container></Container>
        <Navigation></Navigation>
      </div>
    </div>
  );
}

export default App;
