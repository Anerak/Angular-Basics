import { Component, OnInit } from '@angular/core';
import { IUser } from 'src/app/interfaces/user';
import { UsersService } from 'src/app/services/users/users.service';

@Component({
	selector: 'app-users',
	templateUrl: './users.component.html',
	styleUrls: ['./users.component.css'],
})
export class UsersComponent implements OnInit {
	users: Array<IUser> = [];
	constructor(private usersService: UsersService) {}

	ngOnInit(): void {
		//this.getUsers();
	}

	getUsers() {
		this.usersService
			.getUsers()
			.subscribe((users: Array<any>) => (this.users = users));
	}

	saveUser() {
		let user: IUser = {
			id: '56',
			createdAt: Date.now().toString(),
			name: 'Foo bar',
			address: 'Arr588',
			avatar: 'https://picsum.photos/200/200',
			comments: 'Hey there',
			description: 'War never changes',
			location: [137.05, 200.45],
		};

		this.usersService
			.saveUser(user)
			.subscribe((user: IUser) => this.users.push(user));
	}

	updateUser(id: string | undefined) {
		let user: IUser = {
			id: '57',
			createdAt: Date.now().toString(),
			name: 'Bar',
			address: 'Nooo',
			avatar: 'https://picsum.photos/300/150',
			comments: 'Bye',
			description: 'Never change dude',
			location: [137.05, 200.45],
		};
		this.usersService.updateUser(user, id).subscribe((user: IUser) => {
			console.log(user);
			let index = this.users.findIndex(
				(aUser: IUser) => aUser.id === user.id
			);
			this.users.splice(index, 1, user);
		});
	}
	deleteUser(id: string | undefined) {
		this.usersService.deleteUser(id).subscribe((user) => {
			let index = this.users.findIndex(
				(aUser: IUser) => aUser.id === user.id
			);
			this.users.splice(index, 1);
		});
	}
}
