import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';

import store from './data/store.js';
import { Provider, useDispatch, useSelector } from 'react-redux';
import { increment, decrement } from './data/counterSlice';
import { flipBit } from './data/boolpoint';

/** CSS Components */
import { Container } from "react-bootstrap";

/** JSX Components */
import { NavComponent } from "./components/NavBar.jsx";

const Counter = () => {
  const count = useSelector(state => state.counter.value);
  const dispatch = useDispatch();

  return (
    <div>
      <div>
        <button
          aria-label="Increment value"
          onClick={() => dispatch(increment())}
        >
          Increment
        </button>
        <span>{count}</span>
        <button
          aria-label="Decrement value"
          onClick={() => dispatch(decrement())}
        >
          Decrement
        </button>
      </div>
    </div>
  )
}

const BoolFlip = () => {
  const bt = useSelector(state => state.boolRed.value);
  const dispathcher = useDispatch();

  return (
    <div>
      <div> { bt ? "1" : "0" } : { bt ? "True" : "False" } </div>
      <button onClick={ () => dispathcher(flipBit()) }>Flip Point</button>
    </div>
  )

}

const pageCounter = {
  0: <Counter />,
  1: <BoolFlip />,
  2: <div> <Counter /> <hr /> <BoolFlip /> </div>
}

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
