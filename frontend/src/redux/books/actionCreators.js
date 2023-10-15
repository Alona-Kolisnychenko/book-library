import * as actionTypes from './actionTypes';

export const addBook = (newBook)=>{
    return {
        type: actionTypes.ADD_BOOK,
        payload: newBook
    }
}

export const dellBook = (id)=>{
    return{
        type: actionTypes.DELL_BOOK,
        payload: id
    }
}
export const toggleFavorite = (id)=>{
    return{
        type: actionTypes.TOGGLE_FAVORITE,
        payload: id
    }
}