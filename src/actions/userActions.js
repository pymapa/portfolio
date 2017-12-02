export function setName(name) {
    return {
        type: "SET_NAME",
        payload: name
    }
}

export function setRole(role) {
    return {
        type: "SET_ROLE",
        payload: role
    }
}

export function signIn(e) {
    return {
        type: "SIGN_IN",
        payload: e
    }
}