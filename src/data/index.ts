import { AnyAction, applyMiddleware, combineReducers, createStore } from 'redux';
import ReduxThunk, { ThunkDispatch } from 'redux-thunk';
import examplesReducer from './example/reducer';

export const AppReducers = combineReducers({
	examples: examplesReducer,
});
export type TRootState = ReturnType<typeof AppReducers>;
export type TReducerFunction<T = {}, U = {}> = (state: T, action: U) => T;
export const store = createStore(AppReducers, applyMiddleware(ReduxThunk));

export type AppDispatcher = ThunkDispatch<TRootState, unknown, AnyAction>;
