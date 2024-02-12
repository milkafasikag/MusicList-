export const ADD_SONG = 'ADD_SONG';
export const DELETE_SONG = 'DELETE_SONG';
export const EDIT_SONG = 'EDIT_SONG';

export const addSong = (title) => ({
    type: ADD_SONG,
    payload: {
        title
    }
});

export const deleteSong = (id) => ({
    type: DELETE_SONG,
    payload: {
        id
    }
});

export const editSong = (id, title) => ({
    type: EDIT_SONG,
    payload: {
        id,
        title
    }
});
