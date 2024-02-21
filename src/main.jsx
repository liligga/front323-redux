import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import { Provider } from "react-redux";
import { legacy_createStore as createStore } from "redux";

import "./index.css";
import App from "./App";

const defaultState = {
  counter: 100,
  todos: [],
};


// фукция reducer - для изменения состояния в сторе
const counterReducer = (state = defaultState, action) => {
  // action - действие, которое влияет на изменение состояния
  // action - объект, у которого обязательное поле type
  // { type: 'INCREMENT_COUNTER' }
  switch (action.type) {
    case "INCREMENT_COUNTER":
      return {...state, counter: state.counter + 1};
    case "DECREMENT_COUNTER":
      return {...state, counter: state.counter - 1};
    default:
      return state;
  }
};

const store = createStore(counterReducer);

ReactDOM.createRoot(document.getElementById("root")).render(
  <Provider store={store}>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </Provider>
);
