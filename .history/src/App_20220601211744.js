import "./App.css";
import "./assets/css/app.scss";
import Container from "./components/Container";
import Navigation from "./components/Navigation";
function App() {
  return (
    <div className="App">
      <Navigation></Navigation>
      <Container></Container>
    </div>
  );
}

export default App;
