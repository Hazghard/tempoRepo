import UserProfileThunks from './thunks'
import {createSlice} from '@reduxjs/toolkit'

const userProfileSlice = createSlice({
    name: 'userProfileSlice',
    initialState: {
        profile: undefined
    },
    reducers: {},
    extraReducers: (builder) => {
        builder.addCase(UserProfileThunks.fetchProfile.pending, (state, action) => {
            state.profile = null
        })

        builder.addCase(UserProfileThunks.fetchProfile.fulfilled, (state, action) => {
            state.profile = action.payload.data.body
        })

        builder.addCase(UserProfileThunks.fetchProfile.rejected, (state, action) => {
            console.error('Profile not found')
        })
    }
})

export default userProfileSlice
