const defaultState = {
    items: []
}


// dispatch({ type: 'ADD_TODO', payload: 'Learn React' })
export const todosReducer = (state = defaultState, action) => {
    switch (action.type) {
        case 'ADD_TODO':
            // console.log(action)
            return {
                ...state,
                items: [...state.items, action.payload]
            };
        default:
            return state;
    }
}