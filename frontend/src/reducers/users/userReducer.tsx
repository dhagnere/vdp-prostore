import {
	USER_LOGIN_FAIL,
	USER_LOGIN_REQUEST,
	USER_LOGIN_SUCCESS,
	USER_LOGOUT,
	USER_LOGOUT_FAIL,
	USER_REGISTER_FAIL,
	USER_REGISTER_REQUEST,
	USER_REGISTER_SUCCESS,
	USER_UPDATE_FAIL,
	USER_UPDATE_REQUEST,
	USER_UPDATE_RESET,
	USER_UPDATE_SUCCESS,
} from '../../constants/userConstants'

const userReducer = (
	state = {
		userInfo: null,
		loading: false,
		error: null,
	},
	action
) => {
	switch (action.type) {
		// USER LOGIN
		case USER_LOGIN_REQUEST: {
			return {
				...state,
				loading: true,
			}
		}
		case USER_LOGIN_SUCCESS: {
			return {
				...state,
				loading: false,
				userInfo: action.payload,
			}
		}
		case USER_LOGIN_FAIL: {
			return {
				...state,
				loading: false,
				error: action.payload,
			}
		}
		// USER LOGOUT
		case USER_LOGOUT: {
			return {}
		}
		case USER_LOGOUT_FAIL: {
			return {
				...state,
				loading: false,
				error: action.payload,
			}
		}
		// USER REGISTER
		case USER_REGISTER_REQUEST: {
			return {
				...state,
				loading: true,
			}
		}
		case USER_REGISTER_SUCCESS: {
			return {
				...state,
				userInfo: action.payload,
				loading: false,
			}
		}
		case USER_REGISTER_FAIL: {
			return {
				...state,
				loading: false,
				error: action.payload,
			}
		}
		// USER UPDATE
		case USER_UPDATE_REQUEST: {
			return {
				...state,
				loading: true,
			}
		}
		case USER_UPDATE_SUCCESS: {
			return {
				...state,
				loading: false,
				userInfo: action.payload,
			}
		}
		case USER_UPDATE_FAIL: {
			return {
				...state,
				loading: false,
				error: action.payload,
			}
		}
		case USER_UPDATE_RESET: {
			return {
				userInfo: null,
				loading: false,
				error: null,
			}
		}
		default:
			return state
	}
}

export default userReducer
