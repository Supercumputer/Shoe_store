import instance from "./axios";

export const apiLogin = (data) => {
    return instance.post('/login', data)
}

export const apiRegister = (data) => {
    return instance.post('/register', data)
}

export const apiGetAcount = () => {
    return instance.get('/user/getacount')
}

export const apiLogout = () => {
    return instance.get('/logout')
}

