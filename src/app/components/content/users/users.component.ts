import { Component, OnInit } from '@angular/core';
import { UsersService } from 'src/app/services/users/users.service';

@Component({
	selector: 'app-users',
	templateUrl: './users.component.html',
	styleUrls: ['./users.component.css'],
})
export class UsersComponent implements OnInit {
	users: Array<any> = [];
	constructor(private usersService: UsersService) {}

	ngOnInit(): void {
		this.getUsers();
	}

	getUsers() {
		this.usersService
			.getUsers()
			.subscribe((users: Array<any>) => (this.users = users));
	}
}
