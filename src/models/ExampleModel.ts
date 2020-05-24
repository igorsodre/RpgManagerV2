export class ExampleModel {
	constructor(public attr1: string, public attr2: string) {}
}

export const exampleMethodOnModel = (EM: ExampleModel): ExampleModel => {
	const exampleModification = 'example';
	return new ExampleModel(EM.attr1 + exampleModification, EM.attr2 + exampleModification);
};
