import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';

import { NavComponent } from "./components/NavBar.jsx";
import { Container } from "react-bootstrap";

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
