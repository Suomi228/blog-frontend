import {configureStore} from '@reduxjs/toolkit'
import { articleReducer } from './slices/article.js';
const store = configureStore({
    reducer: {
        article: articleReducer
    },
});

export default store;