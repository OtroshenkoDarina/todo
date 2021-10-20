import * as TODO_LIST from '../constants/toDoList'

const initialState = {
    data: [],
    isLoading: true,
    error: null
}

export default function MakeToDoList(state = initialState, action) {
    switch (action.type) {
        case TODO_LIST.GET_CARDS: {
            return {
                ...state,
                data: action.data,
                isLoading: false
            }
        }

        case TODO_LIST.ADD_CARD: {
            return {
                ...state,
                data: [action.data, ...state.data],
                isLoading: false
            }
        }

        case TODO_LIST.DELETE_CARD: {
            return {
                ...state,
                data: state.data.filter(item => item.id !== action.data),
                isLoading: false
            }
        }

        case TODO_LIST.SET_COMPLETED_CARD: {
            return {
                ...state,
                data: state?.data?.map(item => item.id === action.cardID ? {...item, completed: action.status} : item),
                isLoading: false
            }
        }

        case TODO_LIST.EDIT_CARD: {
            return {
                ...state,
                data: state?.data?.map(item => item.id === action.cardID ? {...item, title: action.title} : item),
                isLoading: false
            }
        }

        default:
            return state
    }
}

