import {configureStore, createSlice} from '@reduxjs/toolkit'

const userTokenSlice = createSlice({
	name: 'Token',
	initialState: '',
	reducers:{
		setToken: (state, action) => {
			// action: {type: '', payload: ...}
			state.token = action.payload
		}
	}
})

const userProfileSlice = createSlice({
	name: 'Profile',
	initialState: {

	},
	reducers:{
		setProfile: (state, action) => {
			state.token = action.payload
		}
	}
})

export const userStore = configureStore({
	reducer: {
		Token: userTokenSlice.reducer,
		Profile : userProfileSlice.reducer
	}
})