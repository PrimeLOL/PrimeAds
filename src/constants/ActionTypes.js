import { defineAction } from 'redux-define'
import {
    REQUEST,
    SUCCESS,
    FAILURE,
    CLEAR,
    CLEAR_ALL,
    ADD,
    ADD_SUCCESS,
    ADD_FAILURE,
    FETCH,
    REPLACE,
    OPEN,
    CLOSE,
} from './StateConstants.js'

const appNamespace = defineAction('PAds')

export const AUTH_LOGIN = defineAction(
    'AUTH_LOGIN',
    [REQUEST, SUCCESS, FAILURE],
    appNamespace
)

export const AUTH_LOGOUT = defineAction(
    'AUTH_LOGOUT',
    [SUCCESS],
    appNamespace
)

export const ERROR = defineAction(
    'ERROR',
    [ADD, CLEAR],
    appNamespace
)

export const NAV = defineAction(
    'NAV',
    [REPLACE],
    appNamespace
)

export const SEARCH = defineAction(
    'SEARCH',
    [REQUEST, SUCCESS, FAILURE, CLEAR, CLEAR_ALL],
    appNamespace
)

export const SEARCH_HISTORY = defineAction(
    'SEARCH_HISTORY',
    [ADD, REMOVE, CLEAR],
    appNamespace
)

export const BROWSING_HISTORY = defineAction(
    'BROWSING_HISTORY',
    [ADD, REMOVE, CLEAR],
    appNamespace
)

export const MODAL = defineAction(
    'MODAL',
    [OPEN, CLOSE],
    appNamespace
)