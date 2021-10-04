export interface IUser {
	id?: string;
	createdAt?: string;
	name: string;
	avatar: string;
	address: string;
	description: string;
	comments: string;
	location: Array<number>;
	show?: boolean;
}
