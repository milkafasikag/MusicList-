import { ADD_SONG, DELETE_SONG, EDIT_SONG } from '../actions/songActions';
const initialState = {
    songs: []
};
const songReducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_SONG:
            return {
                ...state,
                songs: [
                    ...state.songs,
                    {
                        id: Date.now(),
                        title: action.payload.title
                    }
                ]
            };

        case DELETE_SONG:
            return {
                ...state,
                songs: state.songs.filter(song => song.id !== action.payload.id)
            };

        case EDIT_SONG:
            return {
                ...state,
                songs: state.songs.map(song =>
                    song.id === action.payload.id ? { ...song, title: action.payload.title } : song
                )
            };

        default:
            return state;
    }
};
export default songReducer;
