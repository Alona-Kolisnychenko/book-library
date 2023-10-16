import { v4 as uuidv4 } from 'uuid';

export const createBookWidthId = (book, source) => {
    return {
        ...book,
        source,
        isFavorite: false,
        id: uuidv4()
    }
}