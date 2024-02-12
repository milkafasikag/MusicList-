import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { updateSong } from '../redux/actions/songActions';

const UpdateSongForm = ({ song }) => {
  const dispatch = useDispatch();
  const [title, setTitle] = useState(song.title);

  const handleSubmit = e => {
    e.preventDefault();
    dispatch(updateSong({ ...song, title }));
  };

  return (
    <div>
      <h2>Update Song</h2>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          value={title}
          onChange={e => setTitle(e.target.value)}
        />
        <button type="submit">Update Song</button>
      </form>
    </div>
  );
};

export default UpdateSongForm;
