const APP_TOKEN_KEY = process.env.REACT_APP_TOKEN_KEY;

export function getToken() {
    return localStorage.getItem(APP_TOKEN_KEY)
}

export function setToken(token) {
    return localStorage.setItem(APP_TOKEN_KEY, token)
}

export function removeToken() {
    return localStorage.removeItem(APP_TOKEN_KEY)
}
