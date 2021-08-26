import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';

import store from './data/store.js';
import { Provider, useSelector } from 'react-redux';

/** CSS Components */
import { Container } from "react-bootstrap";

/** JSX Components */
import NavComponent from "./components/NavBar.jsx";

/** Static data points */
import { pageCounter } from './data/staticContent';

const BodyComponent = () => {
  const page = useSelector(state => state.page.value);
  return (
    <>
      <NavComponent />
      <Container>
        <hr />
        { pageCounter[page] }
      </Container>
    </>
  )
}

const App = () => (
  <div>
    <Provider store={store} >
      <BodyComponent />
    </Provider>
  </div>
)



export default App;
