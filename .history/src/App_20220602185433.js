import "./App.css";
import "./assets/css/app.scss";
import Container from "./components/Container";
import Navigation from "./components/Navigation";
function App() {
  const [store, setStore] = useState([]);

  useEffect(() => {
    fetch("http://localhost:5000/stores")
      .then((res) => {
        return res.json();
      })
      .then((data) => {
        setStore(data);
      });
  }, []);
  return (
    <div className="App">
      <Navigation></Navigation>
      <Container></Container>
    </div>
  );
}

export default App;
