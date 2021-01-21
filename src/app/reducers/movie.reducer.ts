import { ADD_MOVIE, DELETE_MOVIE, CREATE_LIST } from '../actions/movie.actions';
import { Movie } from '../interfaces/movie';

// Inicialización

const InitialState = [];

export function MovieReducer(state: Movie[] = InitialState, action) {

    switch( action.type ) {
        case ADD_MOVIE:
            return [...state, action.payload];
        break;

        case DELETE_MOVIE:
            return state.filter(m => m.id !== action.payload)
        break;
        
        case CREATE_LIST:
            return [...action.payload];
        break;
    }
}