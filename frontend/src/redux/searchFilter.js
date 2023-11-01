import { createSlice } from '@reduxjs/toolkit';

export const productSlice = createSlice({
    name: 'searchFilter',
    initialState: {
        listProduct: [],
        pageCount: 0,
        filter: {
            search: '',
            price: '',
            color: '',
        },
    },
    reducers: {
        setProduct: (state, action) => {
            state.listProduct = action.payload.data;
            state.pageCount = action.payload.totalPages
        },

        setFilterSearch: (state, action) => {
            state.filter.search = action.payload
        }
    },
});

export const { setProduct, setFilterSearch } = productSlice.actions;
export default productSlice.reducer;
