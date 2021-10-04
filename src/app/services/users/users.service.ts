import {
	HttpClient,
	HttpErrorResponse,
	HttpHeaders,
} from '@angular/common/http';
import { Injectable } from '@angular/core';
import { IUser } from 'src/app/interfaces/user';
import { catchError } from 'rxjs/operators';
import { throwError } from 'rxjs';

@Injectable({
	providedIn: 'root',
})
export class UsersService {
	//url: string = 'https://jsonplaceholder.typicode.com/users';
	url: string = 'https://61566ed9e039a0001725a9ee.mockapi.io/users/';

	constructor(private http: HttpClient) {}

	private getHttpOptions() {
		return {
			headers: new HttpHeaders({
				'content-type': 'application/json',
			}),
		};
	}

	private handleError(error: HttpErrorResponse) {
		if (error.error instanceof ErrorEvent) {
			console.warn('Front End Error', error.error.message);
		} else {
			console.warn(`Back End Error ${error.status} | ${error.message}`);
		}
		return throwError('Http Error');
	}

	getUsers() {
		return this.http
			.get<Array<IUser>>(this.url)
			.pipe(catchError(this.handleError));
	}

	saveUser(user: IUser) {
		return this.http
			.post<IUser>(this.url, user, this.getHttpOptions())
			.pipe(catchError(this.handleError));
	}

	updateUser(user: IUser, id: string | undefined) {
		return this.http
			.put<IUser>(this.url + id, user, this.getHttpOptions())
			.pipe(catchError(this.handleError));
	}

	deleteUser(id: string | undefined) {
		return this.http
			.delete<IUser>(this.url + id)
			.pipe(catchError(this.handleError));
	}
}
