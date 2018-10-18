import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, Resolve } from '@angular/router';
import { Observable } from 'rxjs/Observable';
import { UserService } from '../../../services/data/user.service';
import { ClientUser } from '../../../models/user';

/**
 * Retrieves the ClientUser object for the id parameter specified
 * in the route.
 *
 * @export
 * @class ClientUserResolver
 * @implements {Resolve<Observable<ClientUser>>}
 */
@Injectable()
export class ClientUserResolver implements Resolve<Observable<ClientUser>> {
    constructor(private userService: UserService) {}

    resolve(route: ActivatedRouteSnapshot): Observable<ClientUser> {
        const id = route.paramMap.get('id');
        return this.userService.client(id);
    }
}