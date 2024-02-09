import { AppDispatch } from '../store'
import { setLanguage } from './language.slice'

export type SupportedLanguages = 'en' | 'fr'

export const changeLanguage = (language: SupportedLanguages) => (dispatch: AppDispatch) => {
  dispatch(setLanguage(language))
}
