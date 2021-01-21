import { Action } from '@ngrx/store';
import { Movie } from '../interfaces/movie';

export const ADD_MOVIE = '[Movie] Add movie';
export const DELETE_MOVIE = '[Movie] Delete movie';
export const CREATE_LIST = '[Movie] List movie';

export class AddAction implements Action {
    readonly type = ADD_MOVIE;
    constructor(public payload: Movie) { }
}

export class DeleteAction implements Action {
    readonly type = DELETE_MOVIE;
    constructor(public payload: Number) { }
}

export class CreateAction implements Action {
    readonly type = CREATE_LIST;
    constructor(public payload: Movie[]) { }
}