import { DrawerNavigationOptions, DrawerNavigationProp } from '@react-navigation/drawer';
import { StackNavigationOptions, StackNavigationProp } from '@react-navigation/stack';

export type TNavigationController<T> = StackNavigationProp<Record<string, T>> & DrawerNavigationProp<Record<string, T>>;
export type TRouteController<U> = { key: string; name: string; params: U };
export interface INavigatorProp<T = {}, U = {}> {
	navigation: TNavigationController<T>;
	route: TRouteController<U>;
}

export type INavigationOptions = StackNavigationOptions & DrawerNavigationOptions;
export type PostRequestBody = {
	method: string;
	headers: { 'Content-Type': string };
	body: string;
};
export type ThunxDispatcher<T, U = {}> = (arg0: (arg1: T) => void, arg1: () => U) => Promise<void>;

export default {
	INavigatorProp,
	INavigationOptions,
	PostRequestBody,
	ThunxDispatcher,
};
