import { Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { IUser } from '../../../interfaces/user';
import { UsersService } from 'src/app/services/users/users.service';

@Component({
	selector: 'app-users-material',
	templateUrl: './users-material.component.html',
	styleUrls: ['./users-material.component.css'],
})
export class UsersMaterialComponent implements OnInit {
	loading: boolean = false;

	displayedColumns: Array<String> = [
		'id',
		'name',
		'address',
		'location',
		'description',
		'comments',
		'avatar',
		'action',
	];

	users!: MatTableDataSource<IUser>;
	usersData: Array<IUser> = [];

	newUser: IUser = {
		id: '',
		createdAt: Date.now().toString(),
		name: '',
		address: '',
		location: [],
		description: '',
		comments: '',
		avatar: '',
	};

	@ViewChild(MatPaginator, { static: true }) paginator!: MatPaginator;
	@ViewChild(MatSort, { static: true }) sort!: MatSort;

	constructor(private usersService: UsersService) {}

	ngOnInit(): void {
		this.getUsers();
	}

	changeUrlPicture(url: string) {
		return url.replace('lorempixel', 'placeimg');
	}

	updateTable(users: Array<IUser>) {
		this.users = new MatTableDataSource<IUser>(users);
		this.users.sort = this.sort;
		this.users.paginator = this.paginator;
	}

	disableSend() {
		return (
			this.newUser.name == '' ||
			this.newUser.address == '' ||
			this.newUser.location == [] ||
			this.newUser.description == '' ||
			this.newUser.comments == ''
		);
	}

	editPicture(id: string, user: IUser) {
		user.show = !user.show;
		let index = this.usersData.findIndex((el) => el.id === id);
		this.usersData.splice(index, 1, user);
		this.updateTable(this.usersData);
	}

	getUsers() {
		this.usersService.getUsers().subscribe((users: Array<IUser>) => {
			users.map((user) => (user.show = true));
			this.usersData = users;
			this.updateTable(this.usersData);
			this.loading = false;
		});
	}

	saveUser() {
		this.usersService.saveUser(this.newUser).subscribe((user: IUser) => {
			user.show = true;

			this.newUser = {
				id: '',
				name: '',
				address: '',
				location: [],
				description: '',
				comments: '',
				avatar: '',
			};

			this.usersData.push(user);
			this.updateTable(this.usersData);
		});
	}

	updateUser(id: string, user: IUser) {
		this.usersService.updateUser(user, id).subscribe((user: IUser) => {
			user.show = true;

			let index = this.usersData.findIndex(
				(aUser) => aUser.id === user.id
			);
			this.usersData.splice(index, 1, user);
			this.updateTable(this.usersData);
		});
	}

	deleteUser(id: string) {
		this.usersService.deleteUser(id).subscribe((user: IUser) => {
			let index = this.usersData.findIndex(
				(aUser) => aUser.id === user.id
			);
			this.usersData.splice(index, 1);
			this.updateTable(this.usersData);
		});
	}
}
