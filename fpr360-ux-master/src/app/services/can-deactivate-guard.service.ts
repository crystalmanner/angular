import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanDeactivate, RouterStateSnapshot } from '@angular/router';
import { Observable } from 'rxjs/Observable';

/**
 * Interface that should be implemented by components that want to add a canDeactivate
 * guard to prevent a component from being deactivated when user attention is required;
 * e.g., when data has not been saved.
 * 
 * @export
 * @interface CanComponentDeactivate
 */
export interface CanComponentDeactivate {
  /**
   * Return false to prevent the component from being deactivated.
   * 
   * @memberof CanComponentDeactivate
   */
  canDeactivate: () => Observable<boolean> | Promise<boolean> | boolean;
}

/**
 * Guard to prevent deactivation of a route. To use this guard, add
 *    canDeactivate: [CanDeactivateGuard] 
 * to the route declaration.
 * 
 * @export
 * @class CanDeactivateGuard
 * @implements {CanDeactivate<CanComponentDeactivate>}
 */
@Injectable()
export class CanDeactivateGuard implements CanDeactivate<CanComponentDeactivate> {

  constructor() { }

  /**
   * Return false to prevent a route from being dactivated.
   * 
   * @param {CanComonentDeactivate} component 
   * @param {ActivatedRouteSnapshot} route 
   * @param {RouterStateSnapshot} state 
   */
  canDeactivate(component: CanComponentDeactivate, 
    route: ActivatedRouteSnapshot, 
    state: RouterStateSnapshot) {

    return component.canDeactivate ? component.canDeactivate() : true;
  }
}
