export function setName(name) {
    return {
        type: 'SET_NAME',
        payload: name
    };
}

export function setRole(role) {
    return {
        type: 'SET_ROLE',
        payload: role
    };
}

export function signIn(user) {
    sessionStorage.setItem('user', JSON.stringify(user));
    return {
        type: 'SIGN_IN',
        payload: user
    };
}

export function signOut() {
    return {
        type: 'SIGN_OUT'
    };
}