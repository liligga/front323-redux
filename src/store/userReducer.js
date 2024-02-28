const defaultState = {
    user: {
        name: '',
        email: '',
        phone: ''
    }
};

// { type: 'CHANGE_NAME', payload: 'Alex' }
// { type: 'CHANGE_EMAIL', payload: 'a@a.com' }
// { type: 'CHANGE_PHONE', payload: '+7 (999) 999-99-99' }
// { 
    // type: 'CHANGE_USER_DATA', 
    // payload: { 
    //     name: 'Alex', 
    //     email: 'a@a.com', 
    //     phone: '+7 (999) 999-99-99' 
    // }
// }
export const userReducer = (state = defaultState, action) => {
    // console.log(action)
    switch (action.type) {
        case 'CHANGE_NAME':
            return {...state, name: action.payload }
        case 'CHANGE_EMAIL':
            return {...state, email: action.payload }
        case 'CHANGE_PHONE':
            return {...state, phone: action.payload }
        case 'CHANGE_USER_DATA': 
            return {...state, ...action.payload}
        default:
            return state
    }
}