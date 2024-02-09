
import { CONSTANTS } from '@/static/assets/constants'
import { createSlice } from '@reduxjs/toolkit'

const initialCurrentLanguage =
  typeof window !== 'undefined' &&
  localStorage.getItem(CONSTANTS.ENV_SECRETS.APPLICATION_LANGUAGE as string) !== null
    ? localStorage.getItem(CONSTANTS.ENV_SECRETS.APPLICATION_LANGUAGE as string)
    : 'en'

console.log(
  typeof window !== 'undefined' &&
    localStorage.getItem(CONSTANTS.ENV_SECRETS.APPLICATION_LANGUAGE as string),
)

const languageSlice = createSlice({
  name: 'language',
  initialState: {
    currentLanguage: initialCurrentLanguage,
  },
  reducers: {
    setLanguage: (state, action) => {
      state.currentLanguage = action.payload
      localStorage.setItem(CONSTANTS.ENV_SECRETS.APPLICATION_LANGUAGE as string, action.payload)
    },
  },
})

export const { setLanguage } = languageSlice.actions
export default languageSlice.reducer
