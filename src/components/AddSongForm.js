import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addSong } from '../redux/actions/songActions';

const AddSongForm = () => {
  const dispatch = useDispatch();
  const [title, setTitle] = useState('');

  const handleSubmit = e => {
    e.preventDefault();
    dispatch(addSong({ title }));
    setTitle('');
  };

  return (
    <div>
      <h2>Add New Song</h2>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Enter song title"
          value={title}
          onChange={e => setTitle(e.target.value)}
        />
        <button type="submit">Add Song</button>
      </form>
    </div>
  );
};

export default AddSongForm;
