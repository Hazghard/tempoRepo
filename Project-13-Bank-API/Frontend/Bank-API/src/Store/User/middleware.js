import { createListenerMiddleware, isAnyOf } from '@reduxjs/toolkit'
import UserProfileThunks from '@/Store/User/thunks.js'
import AuthenticationThunks from '@/Store/Authentication/thunks.js'

// Create the middleware instance and methods
const UserProfileMiddleware = createListenerMiddleware()

/**
 * listener which will re_fetch the statistics if any of the following actions are dispatched
 */
UserProfileMiddleware.startListening({
  matcher: isAnyOf(
    AuthenticationThunks.login.fulfilled,
  ),
  effect: async (action, listenerApi) => {
    listenerApi.dispatch(UserProfileThunks.fetchProfile())
  }
})

export default UserProfileMiddleware