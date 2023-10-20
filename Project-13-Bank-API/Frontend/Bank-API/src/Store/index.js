import {configureStore, combineReducers} from '@reduxjs/toolkit'
import AuthenticationState from './Authentication/slices'
import UserState from './User/slices'
import AuthenticationThunks from './Authentication/thunks'
import UserProfileThunks from './User/thunks'
import UserProfileMiddleware from './User/middleware'

const reducer = combineReducers({
	authentication: AuthenticationState.reducer,
	user: UserState.reducer
})

const store = configureStore({
	reducer,
	middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [
          AuthenticationThunks.login.fulfilled.type,
          AuthenticationThunks.login.rejected.type,
          UserProfileThunks.fetchProfile.fulfilled.type,
          UserProfileThunks.fetchProfile.rejected.type
        ],
        ignoredActionPaths: [ 'payload.stack' ]
      }
    })
      .prepend(UserProfileMiddleware.middleware)
})

export default store
