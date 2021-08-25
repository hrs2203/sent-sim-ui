import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';

/** CSS Components */
import { Container } from "react-bootstrap";

/** JSX Components */
import { NavComponent } from "./components/NavBar.jsx";

function App() {

  return (
    <div>
      <NavComponent />
      <Container>
      </Container>
    </div>
  )
}

export default App;
