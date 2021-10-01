import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
	providedIn: 'root',
})
export class UsersService {
	url: string = 'https://jsonplaceholder.typicode.com/users';

	constructor(private http: HttpClient) {}

	getUsers() {
		return this.http.get<Array<any>>(this.url);
	}

	saveUser(user: any) {}

	updateUser(user: any, id: number) {}

	deleteUser(id: number) {}
}
