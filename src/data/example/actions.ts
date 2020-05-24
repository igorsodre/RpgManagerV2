import { ThunxDispatcher } from '../../typings';
import { TRootState } from '..';
export const ADD_EXAMPLE_ACTION = 'ADD_EXAMPLE_ACTION';
export interface IAddExampleAction {
	type: typeof ADD_EXAMPLE_ACTION;
	payload: string;
}
export type ExampleActionType = IAddExampleAction;

export const addOrder = (exampleArguments: string): ThunxDispatcher<IAddExampleAction, TRootState> => {
	return async (dispatch, getState): Promise<void> => {
		try {
			await setTimeout(() => {
				console.info(getState());
				dispatch({ type: ADD_EXAMPLE_ACTION, payload: exampleArguments });
			}, 1000);
		} catch (err) {
			console.log(err);
		}
	};
};
