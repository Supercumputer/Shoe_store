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

export const apiGetProducs = (search, page) => {
    return instance.get(`/product/getallproduct?q=${search}&page=${page}`)
}

export const apiCreateProduct = () => {
    return instance.get(`/product/createproduct`)
}