const defaultState = {
  counter: 100
};

// фукция reducer - для изменения состояния в сторе
export const counterReducer = (state = defaultState, action) => {
  // action - действие, которое влияет на изменение состояния
  // action - объект, у которого обязательное поле type
  // { type: 'INCREMENT_COUNTER' }
  switch (action.type) {
    case "INCREMENT_COUNTER":
      // нужно формировать новое состояние на основе предыдущего
      console.log("@@ увеличиваем счетчик на 1");
      const new_counter = state.counter + 1;
      return { ...state, counter: new_counter };
    case "DECREMENT_COUNTER":
      return { ...state, counter: state.counter - 1 };
    default:
      return state;
  }
};

// action creator - для создания действия
export const incrementCounter = () => ({ type: 'INCREMENT_COUNTER' })

export const decrementCounter = () => ({ type: 'DECREMENT_COUNTER' })