import { createSlice } from '@reduxjs/toolkit';

export const productSlice = createSlice({
    name: 'searchFilter',
    initialState: {
        listProduct: [],
        pageCount: 0,
        filter: {
            search: '',
            price: '',
            color: [],
            size: [],
        },
    },
    reducers: {
        setProduct: (state, action) => {
            state.listProduct = action.payload.data;
            state.pageCount = action.payload.totalPages;
        },

        setFilterSearch: (state, action) => {
            state.filter.search = action.payload;
        },

        setFilterPrice: (state, action) => {
            state.filter.price = action.payload;
        },

        setFilterColor: (state, action) => {
            state.filter.color = action.payload;
        },

        setFilterSize: (state, action) => {
            state.filter.size = action.payload;
        },
    },
});

export const { setProduct, setFilterSearch, setFilterPrice, setFilterColor, setFilterSize } = productSlice.actions;
export default productSlice.reducer;
