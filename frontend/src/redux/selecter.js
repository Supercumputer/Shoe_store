import { createSelector } from '@reduxjs/toolkit'

export const listProduct = state => state.pro.listProduct
export const count = state => state.pro.pageCount

export const lisFroductFilter = createSelector(listProduct, (list)=> {
    return list
})
