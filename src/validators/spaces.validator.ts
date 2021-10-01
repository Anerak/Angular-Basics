import { AbstractControl } from '@angular/forms';

export function VerifySpaces(c: AbstractControl) {
	if (c.value == null) return null;
	if (new RegExp(/\s/).test(c.value))
		return { hasSpaces: "This field shouldn't have spaces" };
	return null;
}
