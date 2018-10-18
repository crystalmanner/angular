import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, Resolve } from '@angular/router';
import { Observable } from 'rxjs/Observable';
import { UserService } from '../../services/data/user.service';
import { GuruUser } from '../../models/user';

/**
 * Retrieves the Guru object for the id parameter specified
 * in the route.
 *
 * @export
 * @class ProfileResolver
 * @implements {Resolve<Observable<Guru>>}
 */
@Injectable()
export class ProfileResolver implements Resolve<Observable<GuruUser>> {
    constructor(private userService: UserService) {}

    resolve(route: ActivatedRouteSnapshot): Observable<GuruUser> {
        const id = route.paramMap.get('id');
        return this.userService.guru(id);
    }
}