import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import { Role } from '../../models/role';

/**
 * Service for processing role-related Http requests.
 * 
 * @export
 * @class RoleService
 */
@Injectable()
export class RoleService {

  constructor(private http: HttpClient) { }

  /**
   * Returns a list of roles.
   * 
   * @returns {Observable<Role[]>} 
   * @memberof RoleService
   */
  list(): Observable<Role[]> {
    return this.http.get<Role[]>('assets/data/roleMasterList.json');
  }
}
