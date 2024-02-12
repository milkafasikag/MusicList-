// api.js
const BASE_URL = 'https://jsonplaceholder.typicode.com';

const api = {
    fetchSongs: async () => {
        const response = await fetch(`${BASE_URL}/posts`);
        if (!response.ok) {
            throw new Error('Failed to fetch songs');
        }
        return response.json();
    },

    addSong: async (title) => {
        const response = await fetch(`${BASE_URL}/posts`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                title,
                body: 'This is the body of the song' // JSONPlaceholder requires a 'body' field
            }),
        });
        if (!response.ok) {
            throw new Error('Failed to add song');
        }
        return response.json();
    },

    deleteSong: async (id) => {
        const response = await fetch(`${BASE_URL}/posts/${id}`, {
            method: 'DELETE',
        });
        if (!response.ok) {
            throw new Error('Failed to delete song');
        }
        return { success: true };
    },

    updateSong: async (id, title) => {
        const response = await fetch(`${BASE_URL}/posts/${id}`, {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                title,
                body: 'This is the updated body of the song'
            }),
        });
        if (!response.ok) {
            throw new Error('Failed to update song');
        }
        return response.json();
    }
};

export default api;
