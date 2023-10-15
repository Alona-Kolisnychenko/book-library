import { v4 as uuidv4 } from 'uuid';

export const createBookWidthId = (book) => {
    return {
        ...book,
        isFavorite: false,
        id: uuidv4()
    }
}