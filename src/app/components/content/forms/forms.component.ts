import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { VerifySpaces } from 'src/validators/spaces.validator';

@Component({
	selector: 'app-forms',
	templateUrl: './forms.component.html',
	styleUrls: ['./forms.component.css'],
})
export class FormsComponent implements OnInit {
	fData = {
		name: '',
		lastName: '',
		age: '',
		email: '',
		password: '',
	};

	f: FormGroup;

	constructor(private fb: FormBuilder) {
		this.f = fb.group({
			name: [
				'',
				Validators.compose([
					Validators.required,
					Validators.minLength(3),
					Validators.maxLength(30),
					VerifySpaces,
				]),
			],
			lastName: ['', Validators.required],
			age: ['', Validators.required],
			contact: fb.group({
				email: '',
				phone: '',
			}),
			password: '',
		});
	}

	ngOnInit(): void {}

	send(registerForm: any) {
		console.log({ ...this.fData });
		registerForm.form.reset();
	}

	sendRF() {
		console.log(this.f.value);
	}
}
