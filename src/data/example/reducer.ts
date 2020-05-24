import R from 'ramda';
import { TReducerFunction } from '..';
import { ExampleModel } from '../../models/ExampleModel';
import { ExampleActionType, ADD_EXAMPLE_ACTION, IAddExampleAction } from './actions';

export interface IExampleState {
	examples: ExampleModel[];
}

const initialState: IExampleState = {
	examples: [],
};

export type ExampleReducer = TReducerFunction<IExampleState, ExampleActionType>;

const addExample: ExampleReducer = (state, action) => {
	const newState = R.clone(state);
	const data: string = (action as IAddExampleAction).payload;
	newState.examples.push(new ExampleModel(data, data));
	return newState;
};

const examplesReducer: ExampleReducer = (state = initialState, action) => {
	switch (action.type) {
		case ADD_EXAMPLE_ACTION:
			return addExample(state, action);
		default:
			return state;
	}
};

export default examplesReducer;
