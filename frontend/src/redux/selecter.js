import { createSelector } from '@reduxjs/toolkit';

export const listProduct = (state) => state.pro.listProduct;
export const count = (state) => state.pro.pageCount;
export const size = (state) => state.pro.filter.size;
export const color = (state) => state.pro.filter.color;
export const price = (state) => state.pro.filter.price;
