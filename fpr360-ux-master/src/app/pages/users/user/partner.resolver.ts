import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, Resolve } from '@angular/router';
import { Observable } from 'rxjs/Observable';
import { UserService } from '../../../services/data/user.service';
import { PartnerUser } from '../../../models/user';

/**
 * Retrieves the PartnerUser object for the id parameter specified
 * in the route.
 *
 * @export
 * @class PartnerUserResolver
 * @implements {Resolve<Observable<PartnerUser>>}
 */
@Injectable()
export class PartnerUserResolver implements Resolve<Observable<PartnerUser>> {
    constructor(private userService: UserService) {}

    resolve(route: ActivatedRouteSnapshot): Observable<PartnerUser> {
        const id = route.paramMap.get('id');
        return this.userService.partner(id);
    }
}