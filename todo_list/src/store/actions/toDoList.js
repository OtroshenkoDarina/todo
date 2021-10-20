import * as TODO_LIST from '../constants/toDoList'
import TodosApi from "../../utils/api/TodosApi";
import {localStorageGet} from "../../utils/localStorage";

export function getToDoListFromLS() {
    return function (dispatch) {
        return dispatch({
            type: TODO_LIST.GET_CARDS,
            data: localStorageGet('todoList', [])
        })
    }
}

export function getToDoList() {
    return function (dispatch) {
        new TodosApi()
            .get()
            .then(res => {
                    if (!res?.length) return
                    return dispatch({
                        type: TODO_LIST.GET_CARDS,
                        data: res
                    })
                }
            )
    }
}

export function addTodo(card) {
    return function (dispatch) {
        dispatch({
            type: TODO_LIST.ADD_CARD,
            data: card
        })
    }
}

export function deleteTodo(cardId) {
    return function (dispatch) {
        dispatch({
            type: TODO_LIST.DELETE_CARD,
            data: cardId
        })
    }
}

export function setCompletedTodo(cardID, status) {
    return function (dispatch) {
        dispatch({
            type: TODO_LIST.SET_COMPLETED_CARD,
            cardID, status,
        })
    }
}

export function editTodo(cardID, title) {
    return function (dispatch) {
        dispatch({
            type: TODO_LIST.EDIT_CARD,
            cardID, title
        })
    }
}