import { Observable } from 'rxjs/Observable';
import { Injectable } from '@angular/core';
import { Subject } from 'rxjs/Subject';

@Injectable()
export class DashboardService {
  notificationsCount: any;

  dashboardMenu = {
    dashboards: [],
    value: ''
  };

  private dashboardItems = new Subject<any>();
  private notifications = new Subject<any>();

  dashboardMenu$ = this.dashboardItems.asObservable();
  notificationsCount$ = this.notifications.asObservable();

  setDashboardMenuVal = val => {
    this.dashboardMenu.value = val;
    this.dashboardItems.next(this.dashboardMenu);
  };

  setDashboardMenu = menu => {
    this.dashboardMenu.dashboards = menu;
    this.dashboardItems.next(this.dashboardMenu);
  };

  getDashboardMenu = menu => {
    this.dashboardMenu.dashboards = menu;
    this.dashboardItems.next(this.dashboardMenu);
  };

  addWidget = () => {
    this.dashboardItems.next(true);
  };

  setNotifications = val => {
    this.notificationsCount = val;
    this.notifications.next(this.notificationsCount);
  };
}
