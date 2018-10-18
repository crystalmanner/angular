import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import { map } from 'rxjs/operators';
import { User, ClientUser, GuruUser, PartnerUser } from '../../models/user';

/**
 * Service for processing user-related Http requests.
 * 
 * @export
 * @class UserService
 */
@Injectable()
export class UserService {

  constructor(private http: HttpClient) { }

  /**
   * Creates the user
   * 
   * @param {User} user 
   * @returns {Observable<User>} 
   * @memberof UserService
   */
  create(user: User): Observable<User> {
    // TODO: Call REST API to create user. Temporarily, default user to active.  Note,
    // this should be done by REST API automatically on create and the active status
    // should be returned in the POST response.
    user.active = true;
    
    console.log('create user', user);
    return Observable.of(user);
  }

  /**
   * Updates the user
   * 
   * @param {User} user 
   * @returns {Observable<User>} 
   * @memberof UserService
   */
  update(user: User): Observable<User> {
    // TODO: Call REST API to update user.     
    console.log('update user', user);
    return Observable.of(user);
  }  

  /**
   * Returns the client with the specified id
   * 
   * @param {string} id 
   * @returns {Observable<ClientUser>} 
   * @memberof UserService
   */
  client(id: string): Observable<ClientUser> {
    return this.clients().pipe(
      map((res) => {
        return res.find((user) => user.id === id);
      })
    )
  }

  /**
   * Returns a list of clients.
   */
  clients(): Observable<ClientUser[]> {
    return this.http.get<ClientUser[]>('assets/data/clientMasterList.json');
  }

  /**
   * Returns the guru with the specified id
   * 
   * @param {string} id 
   * @returns {Observable<GuruUser>} 
   * @memberof UserService
   */
  guru(id: string): Observable<GuruUser> {
    return this.gurus().pipe(
      map((res) => {
        return res.find((user) => user.id === id);
      })
    )
  }
  
  /**
   * Returns a list of gurus.
   */
  gurus(): Observable<GuruUser[]> {
    return this.http.get<GuruUser[]>('assets/data/guruMasterList.json');
  }

  /**
   * Returns the partner with the specified id
   * 
   * @param {string} id 
   * @returns {Observable<PartnerUser>} 
   * @memberof UserService
   */
  partner(id: string): Observable<PartnerUser> {
    return this.partners().pipe(
      map((res) => {
        return res.find((user) => user.id === id);
      })
    )
  }

  /**
   * Returns a list of partners.
   */
  partners(): Observable<PartnerUser[]> {
    return this.http.get<PartnerUser[]>('assets/data/partnerMasterList.json');
  }
}
