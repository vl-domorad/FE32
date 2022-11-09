import { RootState } from "../store"

export default {
    getTheme: (state: RootState) => state.themeReducer.theme
}