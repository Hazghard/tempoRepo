import AuthenticationActions from './actions'
import { login } from '@/_Services/FetchSignIn.service'
import {createAsyncThunk} from '@reduxjs/toolkit'

const AuthenticationThunks = {
    login: createAsyncThunk(
      `${AuthenticationActions.prefix} login`,
      async (payload, { rejectWithValue }) => {
        try {
          return login(payload)
        } catch (e) {
          return rejectWithValue(e)
        }
      }
    )
}

export default AuthenticationThunks
