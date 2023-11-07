import instance from './axios';

export const apiLogin = (data) => {
    return instance.post('/login', data);
};

export const apiRegister = (data) => {
    return instance.post('/register', data);
};

export const apiGetAcount = () => {
    return instance.get('/user/getacount');
};

export const apiLogout = () => {
    return instance.get('/logout');
};

// export const apiGetProducs = (search, page, fill, order) => {
//     return instance.get(`/product/getallproduct?q=${search}&page=${page}&fill=${fill}&order=${order}`);
// };

export const apiGetProducs = (data) => {
    return instance.get(`/product/getallproduct?${data}`)
}

export const apiCreateProduct = () => {
    return instance.get(`/product/createproduct`);
};

export const apiGetProductId = (id) => {
    return instance.get(`/product/getproduct/${id}`)
}