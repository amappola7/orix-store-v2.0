import { Injectable } from "@angular/core";
import { AbstractControl, AsyncValidator, ValidationErrors } from "@angular/forms";
import { Observable, catchError, of, map, switchMap } from "rxjs";
import { UserService } from "src/app/services/user/user.service";

@Injectable({
  providedIn: 'root'
})
export class UniqueEmailValidator implements AsyncValidator {
  constructor(private userService: UserService) { }

  /**
   * An Angular custom validator for an email control in a form. It checks if the email already exists in the API or not.
   * @param control The input type email control
   * @returns null if the email doesn't exist, otherwise, a validation error
   */
  validate(control: AbstractControl): Observable<any> {
    return this.userService.isEmailUnique(control.value).pipe(
      map((isUnique) => (isUnique ? null : {uniqueEmail: true})),
      catchError((error) => {
        console.log('Error in the UniqueEmailValidator', error);
        return of(false);
      })
    );
  }
}