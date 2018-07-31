import { SHOW_LOADER, HIDE_LOADER } from "../actions/loader"

export default function loader(state = { message: "", status: false }, action) {
    switch (action.type) {
        case SHOW_LOADER:
            return {
                message: action.message,
                status: true
            }
        case HIDE_LOADER:
            return {
                message: "",
                status: false
            }
        default:
            return state
    }
}