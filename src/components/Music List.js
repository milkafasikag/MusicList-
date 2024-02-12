import React, { useState } from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import '../style.css';
const MusicList = () => {
    // State variables for managing songs and new song title
    const [songs, setSongs] = useState([]);
    const [newSongTitle, setNewSongTitle] = useState('');

    // Function to add a new song to the list
    const handleAddSong = () => {
        if (newSongTitle.trim() !== '') {
            const newSong = {
                id: Date.now(),
                title: newSongTitle
            };
            // Update songs array with the new song
            setSongs([...songs, newSong]);
            // Clear the input field after adding a song
            setNewSongTitle('');
        }
    };

    // Function to delete a song from the list
    const handleDeleteSong = (id) => {
        const updatedSongs = songs.filter(song => song.id !== id);
        setSongs(updatedSongs);
    };

    // Function to edit the title of a song
    const handleEditSong = (id, newTitle) => {
        const updatedSongs = songs.map(song =>
            song.id === id ? { ...song, title: newTitle } : song
        );
        setSongs(updatedSongs);
    };

    return (
        <section>
            <Container fluid className="music-list-container">
                
        
        <Container className="home-content">
                <h1>Song List</h1>
                <div className="input-container">
                    <input
                        type="text"
                      placeholder="Enter song title"
                        value={newSongTitle}
                        onChange={(e) => setNewSongTitle(e.target.value)}
                                />
                                {/* Button to add a new song */}
                                <button onClick={handleAddSong}>Add</button>
                            </div>
                          <ul>
                                {songs.map(song => (
                                    <li key={song.id} className="song-item">
                                    <span className="music-icon">🎵</span>
                                    <span>{song.title}</span>
                        <button onClick={() => handleEditSong(song.id, prompt('Enter new title:', song.title))}>
                                            Edit
                                        </button>
                        <button onClick={() => handleDeleteSong(song.id)}>Delete</button>
                                    </li>
                                ))}
                            </ul>
                </Container>
                </Container>
                </section>
    );
};

export default MusicList;
