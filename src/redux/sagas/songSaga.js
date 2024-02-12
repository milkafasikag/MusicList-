// songSaga.js
import { put, takeLatest } from 'redux-saga/effects';
import { ADD_SONG } from '../actions/songActions';
function* handleAddSong(action) {
    yield put({ type: ADD_SONG, payload: action.payload });
}
function* songSaga() {
    yield takeLatest(ADD_SONG, handleAddSong);
}
export default songSaga;
