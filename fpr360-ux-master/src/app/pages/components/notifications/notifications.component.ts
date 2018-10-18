import { Component, OnInit, OnDestroy } from '@angular/core';
import { ISubscription, Subscription } from 'rxjs/Subscription';
import { DashboardService } from '../../../services/dashboard.service';

@Component({
  selector: 'app-notifications',
  templateUrl: './notifications.component.html',
  styleUrls: ['./notifications.component.scss']
})
export class NotificationsComponent implements OnInit, OnDestroy {
  subscription: Subscription;
  notificationsCount: any;
  count = 0;
  title = 'Notifications [Client]';
  notificationsSettings = ['Option 1', 'Option 2', 'divider', 'Option 3'];
  notifications = [
    {
      new: true,
      icon: 'warning',
      name: 'Overdue Invoice',
      date: '02 Sep 2016',
      content: 'The invoice <a>#2349234</a> for $34,987,89 is 2 weeks overdue.'
    },
    {
      new: true,
      icon: 'link',
      name: '[Gateway Name] Issue',
      date: '02 Sep 2016',
      content:
        'We can’t access your [<a>Gateway Name</a>] due to [<a>reason code</a>]'
    },
    {
      new: true,
      icon: 'warning',
      name: 'Overdue Invoice',
      date: '02 Sep 2016',
      content: 'The invoice <a>#2349234</a> for $34,987,89 is 2 weeks overdue.'
    },
    {
      new: true,
      icon: 'link',
      name: '[Gateway Name] Issue',
      date: '02 Sep 2016',
      content:
        'We can’t access your [<a>Gateway Name</a>] due to [<a>reason code</a>]'
    },
    {
      new: true,
      icon: 'warning',
      name: 'Overdue Invoice',
      date: '02 Sep 2016',
      content: 'The invoice <a>#2349234</a> for $34,987,89 is 2 weeks overdue.'
    },
    {
      new: true,
      icon: 'link',
      name: '[Gateway Name] Issue',
      date: '02 Sep 2016',
      content:
        'We can’t access your [<a>Gateway Name</a>] due to [<a>reason code</a>]'
    },
    {
      new: true,
      icon: 'warning',
      name: 'Overdue Invoice',
      date: '02 Sep 2016',
      content: 'The invoice <a>#2349234</a> for $34,987,89 is 2 weeks overdue.'
    },
    {
      new: true,
      icon: 'link',
      name: '[Gateway Name] Issue',
      date: '02 Sep 2016',
      content:
        'We can’t access your [<a>Gateway Name</a>] due to [<a>reason code</a>]'
    },
    {
      new: true,
      icon: 'warning',
      name: 'Overdue Invoice',
      date: '02 Sep 2016',
      content: 'The invoice <a>#2349234</a> for $34,987,89 is 2 weeks overdue.'
    },
    {
      new: true,
      icon: 'link',
      name: '[Gateway Name] Issue',
      date: '02 Sep 2016',
      content:
        'We can’t access your [<a>Gateway Name</a>] due to [<a>reason code</a>]'
    },
    {
      new: true,
      icon: 'warning',
      name: 'Overdue Invoice',
      date: '02 Sep 2016',
      content: 'The invoice <a>#2349234</a> for $34,987,89 is 2 weeks overdue.'
    }
  ];
  constructor(private dashboardService: DashboardService) {}

  ngOnInit() {
    for (let item of this.notifications) {
      item.new ? this.count++ : null;
    }
    this.count < 10
      ? (this.notificationsCount = this.count)
      : (this.notificationsCount = '9+');
    this.dashboardService.setNotifications(this.notificationsCount);
  }

  notificationsSettingsSelect = val => console.log(val);

  ngOnDestroy() {
    if (this.subscription) {
      this.subscription.unsubscribe();
    }
  }
}
