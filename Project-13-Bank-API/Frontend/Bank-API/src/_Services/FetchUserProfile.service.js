import axios from 'axios';

export async function fetchUserProfile(token) {
	return axios.post('http://localhost:3001/api/v1/user/profile', null, {
        headers: {
            Authorization: `Bearer ${token}`
        }
    });
}