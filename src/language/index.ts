import modules from './modules';
import {type DictionaryProps} from './types';

export default function translate({id, language = 'ptBr'}: DictionaryProps) {
	const message = modules[language][id];

	return message;
}
