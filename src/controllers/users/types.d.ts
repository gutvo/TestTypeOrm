export type CreateUserDto = {
	name: string;
	email: string;
	password: string;
};

export type UpdateUserDto = {
	id: string;
	name: string;
	email: string;
	password: string;
};
