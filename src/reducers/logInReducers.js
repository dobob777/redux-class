const initialState = [];

const logInSaveData = (state = initialState, action) => {
    switch (action.type) {
        case 'LOGIN': {
            const abc = action.goData;
            state.push(abc);
            return state;
        }
        case 'ALLDATA': {
            return state;
        }
        default: return state;
    }
}

export default logInSaveData;