import { createAction } from '@reduxjs/toolkit'

const ACTION_PREFIX = '[AUTHENTICATION]'

const setToken = createAction(`${ACTION_PREFIX} set token`)

const AuthenticationActions = {
    prefix: ACTION_PREFIX,
    setToken
}

export default AuthenticationActions
