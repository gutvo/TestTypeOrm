import type ptBr from './modules/ptBr';

export type DictionaryProps = {
	id: keyof typeof ptBr;
	language?: 'ptBr';
};

export type Modules = Record<string, Record<string, string>>;
