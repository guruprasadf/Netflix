const initialState = {
    data : []
}
const rootReducer = (state = initialState, action) => {
    switch(action.type){
        case "UPDATE_DATA" : 
                state = {...state};
                state.data=action.payload;
                return state;
                
        default:
            return state;
    }
    
};
export default rootReducer;