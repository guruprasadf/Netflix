const initialState = {
    data : [],
    selectedVideo : {
        title : '',
        year : '',
        plot : '',
        rated :''

    },
    imdbRating : ''
}
const rootReducer = (state = initialState, action) => {
    switch(action.type){
        case "UPDATE_DATA" : 
                state = {...state};
                state.data=action.payload;
                return state;
        case "SET_DATA" : console.log(action.payload);
                state = {...state};
                state.selectedVideo=action.payload;console.log(state)
                return state;
        case "SET_IMDB_RATING" : 
                state = {...state};
                state.imdbRating=action.payload.imdbRating;
                return state;
                
        default:
            return state;
    }
    
};
export default rootReducer;