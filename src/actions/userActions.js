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
    user.signed = true;
    localStorage.setItem('user', JSON.stringify(user));
    localStorage.setItem('JWT', JSON.stringify(user.jwt));
    return {
        type: 'SIGN_IN',
        payload: user
    };
}

export function signOut() {
    localStorage.removeItem('JWT');
    localStorage.removeItem('user');
    return {
        type: 'SIGN_OUT'
    };
}