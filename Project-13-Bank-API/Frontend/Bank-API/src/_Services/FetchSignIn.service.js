import axios from 'axios';

async function SignInAPI(formData,setIsAuthenticated) {
	try {
		const loginResponse = await axios.post('http://localhost:3001/api/v1/user/login', {
			email: formData.username.email,
			password: formData.password
		});
		console.log('loginResponse',loginResponse);
		if (loginResponse.status === 200) {
			const token = loginResponse.data.body.token;
			const userProfileResponse = await axios.post('http://localhost:3001/api/v1/user/profile', null, {
			headers: {
				Authorization: `Bearer ${token}`
			}
		});
		console.log('userProfileResponse',userProfileResponse);
		setIsAuthenticated(true);
		} else {
			throw new Error('User data retrieving is impossible, please try later or contact an admin');
		}
	} catch (error) {
		throw new Error('Login failed, please check that the data provided are correct');
	}
}

export default SignInAPI;

