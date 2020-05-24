import { PostRequestBody } from '../typings';

export const Colors = {
	primary: '#000000',
	accent: '#FFFFFF',
};

export const isURL = (str: string): boolean => {
	const pattern = new RegExp(
		'^(https?:\\/\\/)?' + // protocol
		'((([a-z\\d]([a-z\\d-]*[a-z\\d])*)\\.?)+[a-z]{2,}|' + // domain name
		'((\\d{1,3}\\.){3}\\d{1,3}))' + // OR ip (v4) address
		'(\\:\\d+)?(\\/[-a-z\\d%_.~+]*)*' + // port and path
		'(\\?[;&a-z\\d%_.~+=-]*)?' + // query string
			'(\\#[-a-z\\d_]*)?$',
		'i',
	); // fragment locator
	return pattern.test(str);
};

export const postBody = <T>(arg0: T): PostRequestBody => ({
	method: 'POST',
	headers: { 'Content-Type': 'application/json' },
	body: JSON.stringify(arg0),
});

export const BASE_URL = 'https://example.com';

export default {
	Colors,
	isURL,
	postBody,
	BASE_URL,
};
