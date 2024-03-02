const defaultState = {
  items: [],
};

// dispatch({ type: 'ADD_TODO', payload: 'Learn React' })
export const todosReducer = (state = defaultState, action) => {
  switch (action.type) {
    case "ADD_TODO":
      // Добавление в массив
      // console.log(action)
      return {
        ...state,
        items: [...state.items, action.payload],
      };
    case "DELETE_TODO":
      // Удаление из массива
      return {
        ...state,
        items: state.items.filter((item) => item !== action.payload),
      };
    default:
      return state;
  }
};

// action creator
export const addTodo = (payload) => ({ 
    type: "ADD_TODO", 
    payload 
});

export const deleteTodo = (payload) => ({ 
    type: "DELETE_TODO", 
    payload 
})
