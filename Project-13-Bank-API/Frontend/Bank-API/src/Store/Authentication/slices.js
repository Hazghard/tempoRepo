import AuthenticationActions from './actions'
import AuthenticationThunks from './thunks'
import {createSlice} from '@reduxjs/toolkit'

const initialState = {
    token: ''
}

const authenticationSlice = createSlice({
    name: 'authenticationSlice',
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder.addCase(AuthenticationActions.setToken, (state, action) => {
            state.token = action.payload
        })

        builder.addCase(AuthenticationThunks.login.pending, (state, action) => {
            state.token = ''
        })

        builder.addCase(AuthenticationThunks.login.fulfilled, (state, action) => {
            state.token = action.payload.data.body.token
        })

        builder.addCase(AuthenticationThunks.login.rejected, (state, action) => {
            console.error('Credentials incorrect')
        })
    }
})

export default authenticationSlice
