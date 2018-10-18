import { ActivatedRoute, Router, NavigationEnd } from '@angular/router';
import { Location } from '@angular/common';
import { Component, OnInit, OnDestroy } from '@angular/core';
import { ISubscription, Subscription } from 'rxjs/Subscription';
import { DashboardService } from './services/dashboard.service';
import { TableFilterService } from './services/table-filter.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  providers: [DashboardService, TableFilterService]
})
export class AppComponent implements OnInit, OnDestroy {
  subscription: Subscription;
  // ulr variables
  href: string;
  loginFlag: boolean;
  searchFlag: boolean;
  widgetsFlag: boolean;
  title: string;
  breadcrumbs = {
    topTitle: '',
    topLink: ''
  };
  headerClass: string;
  backFlag: boolean;
  backLink: string;
  //exstraSpaseClass: string;
  globalSearch: string;
  openAdvansedSearch = false;
  globalSearchAutocomplete = [
    {
      icon: 'people',
      iconColor: '',
      name: 'Item Name'
    },
    {
      icon: 'people',
      iconColor: '',
      name: 'Item Name'
    },
    {
      icon: 'domain',
      iconColor: '',
      name: 'Item Name'
    },
    {
      icon: 'people',
      iconColor: 'green-color',
      name: 'Item Name'
    },
    {
      icon: 'poll',
      iconColor: '',
      name: 'Item Name'
    },
    {
      icon: 'people',
      iconColor: '',
      name: 'Item Name'
    },
    {
      icon: 'business',
      iconColor: '',
      name: 'Item Name'
    }
  ];
  // main menu navigation
  menuLinks = [
    {
      path: '/',
      name: 'Dashboard',
      icon: 'dashboard'
    },
    {
      path: '/alerts',
      name: 'Alerts',
      icon: 'flag'
    },
    {
      path: '/chargebacks',
      name: 'Chargebacks',
      icon: 'security'
    },
    {
      path: '/activity',
      name: 'Activity',
      icon: 'assessment'
    },
    {
      path: '/clients',
      name: 'Clients',
      icon: 'business'
    },
    {
      path: '/partners',
      name: 'Partners',
      icon: ''
    },
    {
      path: '/users/gurus',
      name: 'Users',
      icon: 'supervisor_account'
    },
    {
      path: '/cover-letters',
      name: 'Cover Letters',
      icon: 'insert_drive_file'
    }
  ];
  secondaryMenuLinks = [
    {
      path: '/billing',
      name: 'Billing',
      icon: 'attach_money'
    },
    {
      path: '/invoices',
      name: 'Invoices',
      icon: 'receipt'
    }
  ];
  thirdMenuLinks = [
    {
      path: '/tickets',
      name: 'Tickets',
      icon: 'question_answer',
      badge: '9+'
    },
    {
      path: '/settings/chargeback-parameters',
      name: 'Settings',
      icon: 'settings'
    }
  ];

  // small logo box (main menu)
  smallLogo = {
    url: 'assets/images/small-logo.png'
  };

  // user (main menu)
  user = {
    avatar: 'assets/images/user.png',
    name: 'Erik Richards',
    position: 'Chargeback Analyst',
    guru: true
  };
  // Dashboard select
  dashboard = {
    value: 'Summary',
    options: [
      {
        name: 'Summary',
        included: true
      },
      {
        name: 'Client Performance',
        included: true
      },
      {
        name: 'MIDs Health',
        included: true
      },
      {
        name: 'Team Performance',
        included: true
      },
      {
        name: 'Growth and Trends',
        included: true
      }
    ],
    additionalOptions: [
      'divider',
      'Client Dashboard',
      'divider',
      'Update Current',
      'Save as New',
      'divider',
      'Manage Dashboards'
    ]
  };
  notificationsCount: any;

  clearFlag = () => {
    this.widgetsFlag = false;
    this.searchFlag = false;
    this.loginFlag = false;
    this.headerClass = '';
    this.backFlag = false;
    this.backLink = '';
    //this.exstraSpaseClass = '';
    this.breadcrumbs.topLink = '';
    this.breadcrumbs.topTitle = '';
  };

  constructor(
    location: Location,
    route: ActivatedRoute,
    router: Router,
    private dashboardService: DashboardService
  ) {
    // global routing
    router.events.subscribe(val => {
      if (!(val instanceof NavigationEnd)) {
        return;
      }
      window.scrollTo(0, 0);

      //
      // NEW IMPLEMENTATION: The route contains the breadcrumb information
      //
      let activeRoute = route,
          breadcrumbs = activeRoute.snapshot.data.breadcrumbs;
      while (activeRoute.firstChild) {
        activeRoute = activeRoute.firstChild;
        if (activeRoute.snapshot.data.breadcrumbs) {
          breadcrumbs = activeRoute.snapshot.data.breadcrumbs;
        }
      }
      if (breadcrumbs !== undefined) {
        this.clearFlag();
        this.title = breadcrumbs.title;
        this.breadcrumbs.topLink = breadcrumbs.topLink;
        this.breadcrumbs.topTitle = breadcrumbs.topTitle;
        this.backFlag = true;
        this.backLink = breadcrumbs.topLink;
        this.headerClass = 'sub-header-with-menu';      
        return;
      }

      //
      // OLD IMPLEMENTATION: Build breadcrumbs here
      //
      this.href = location.path();
      switch (this.href) {
        case '/login': {
          this.clearFlag();
          this.loginFlag = true;
          break;
        }
        //dashboard
        case '': {
          this.clearFlag();
          this.title = 'Dashboard';
          this.widgetsFlag = true;
          this.headerClass = 'sub-header mobile';
          break;
        }
        case '/widget': {
          this.clearFlag();
          this.title = 'Services Summary';
          this.backFlag = true;
          this.backLink = '/';
          this.headerClass = 'one-header';
          break;
        }
        case '/widget/report': {
          this.clearFlag();
          this.title = 'Report';
          this.backFlag = true;
          this.searchFlag = true;
          this.backLink = '/widget';
          this.headerClass = 'one-header';
          break;
        }

        case '/mid-health-report': {
          this.clearFlag();
          this.title = 'MID Health Report';
          this.searchFlag = true;
          this.backFlag = true;
          this.backLink = '/';
          this.headerClass = 'sub-header';
          break;
        }
        //
        // alerts
        case '/alerts': {
          this.clearFlag();
          this.title = 'Alerts';
          this.searchFlag = true;
          this.headerClass = 'one-header';
          break;
        }
        case '/alerts/alert': {
          this.clearFlag();
          this.title = 'Alert';
          this.backFlag = true;
          this.backLink = '/alerts';
          this.headerClass = 'sub-header';
          break;
        }
        case '/alerts/alert-resolve': {
          this.clearFlag();
          this.title = 'Alert';
          this.backFlag = true;
          this.backLink = '/alerts';
          this.headerClass = 'sub-header';
          break;
        }
        case '/alerts/alert-duplicate': {
          this.clearFlag();
          this.title = 'Alert';
          this.backFlag = true;
          this.backLink = '/alerts';
          this.headerClass = 'sub-header';
          break;
        }
        case '/alerts/alert-descriptor': {
          this.clearFlag();
          this.title = 'Alert';
          this.backFlag = true;
          this.backLink = '/alerts';
          this.headerClass = 'sub-header';
          break;
        }
        // chargebacks
        case '/chargebacks': {
          this.clearFlag();
          this.title = 'Chargebacks';
          this.searchFlag = true;
          this.headerClass = 'one-header';
          break;
        }
        case '/chargeback-error': {
          this.clearFlag();
          this.title = 'Chargebacks';
          this.backFlag = true;
          this.backLink = '/chargebacks';
          this.headerClass = 'sub-header-with-data error-line-message';
          break;
        }
        case '/chargeback-summary': {
          this.clearFlag();
          this.title = 'Chargebacks';
          this.backFlag = true;
          this.backLink = '/chargebacks';
          this.headerClass = 'sub-header-with-data';
          break;
        }
        case '/chargeback-dispute': {
          this.clearFlag();
          this.title = 'CB-2017304016784';
          this.backFlag = true;
          this.backLink = '/chargeback-summary';
          this.headerClass = 'sub-header-with-data';
          break;
        }
        case '/chargeback': {
          this.clearFlag();
          this.title = 'Chargebacks';
          this.backFlag = true;
          this.backLink = '/chargebacks';
          this.headerClass = 'sub-header-with-data';
          break;
        }

        case '/clients': {
          this.clearFlag();
          this.title = 'Clients';
          this.searchFlag = true;
          this.headerClass = 'one-header';
          break;
        }
        //onboarding
        case '/onboarding': {
          this.clearFlag();
          this.title = 'Onboarding / Company';
          this.backFlag = true;
          this.backLink = '/clients';
          this.headerClass = 'sub-header-with-menu';
          break;
        }
        case '/onboarding/details': {
          this.clearFlag();
          this.title = 'Onboarding / Company';
          this.backFlag = true;
          this.backLink = '/clients';
          this.headerClass = 'sub-header-with-menu';
          break;
        }
        case '/onboarding/billing': {
          this.clearFlag();
          this.title = 'Onboarding / Company';
          this.backFlag = true;
          this.backLink = '/clients';
          this.headerClass = 'sub-header-with-menu';
          break;
        }
        case '/onboarding/crm': {
          this.clearFlag();
          this.title = 'Onboarding / Company';
          this.backFlag = true;
          this.backLink = '/clients';
          this.headerClass = 'sub-header-with-menu';
          break;
        }
        case '/onboarding/merchants': {
          this.clearFlag();
          this.title = 'Onboarding / Company';
          this.backFlag = true;
          this.backLink = '/clients';
          this.headerClass = 'sub-header-with-menu';
          break;
        }
        //
        case '/onboarding/merchants/merchant': {
          this.clearFlag();
          this.title = 'Onboarding / Company';
          this.backFlag = true;
          this.backLink = '/onboarding/merchants';
          this.headerClass = 'sub-header-with-menu';
          break;
        }
        case '/onboarding/merchants/merchant/details': {
          this.clearFlag();
          this.title = ' / Merchant';
          this.breadcrumbs.topLink = '/onboarding/merchants';
          this.breadcrumbs.topTitle = 'Onboarding / Company';
          this.backFlag = true;
          this.backLink = '/onboarding/merchants';
          this.headerClass = 'sub-header-with-menu';
          break;
        }
        case '/onboarding/merchants/merchant/products': {
          this.clearFlag();
          this.title = ' / Merchant';
          this.breadcrumbs.topLink = '/onboarding/merchants';
          this.breadcrumbs.topTitle = 'Onboarding / Company';
          this.backFlag = true;
          this.backLink = '/onboarding/merchants';
          this.headerClass = 'sub-header-with-menu';
          break;
        }
        case '/product': {
          this.clearFlag();
          this.title = 'Products';
          this.backFlag = true;
          this.backLink = '/merchant/products/';
          this.headerClass = 'sub-header';
          break;
        }
        case '/onboarding/merchants/merchant/mid-accounts': {
          this.clearFlag();
          this.title = ' / Merchant';
          this.breadcrumbs.topLink = '/onboarding/merchants';
          this.breadcrumbs.topTitle = 'Onboarding / Company';
          this.backFlag = true;
          this.backLink = '/onboarding/merchants';
          this.headerClass = 'sub-header-with-menu';
          break;
        }
        //new merchant
        case '/onboarding/merchants/new-merchant': {
          this.clearFlag();
          this.title = 'New Merchant';
          this.backFlag = true;
          this.backLink = '/onboarding/merchants';
          this.headerClass = 'sub-header-with-menu';
          break;
        }
        case '/onboarding/merchants/new-merchant/details': {
          this.clearFlag();
          this.title = 'New Merchant';
          this.backFlag = true;
          this.backLink = '/onboarding/merchants';
          this.headerClass = 'sub-header-with-menu';
          break;
        }
        case '/onboarding/merchants/new-merchant/products': {
          this.clearFlag();
          this.title = 'New Merchant';
          this.backFlag = true;
          this.backLink = '/onboarding/merchants';
          this.headerClass = 'sub-header-with-menu';
          break;
        }
        case '/onboarding/merchants/new-merchant/mid-accounts': {
          this.clearFlag();
          this.title = 'New Merchant';
          this.backFlag = true;
          this.backLink = '/onboarding/merchants';
          this.headerClass = 'sub-header-with-menu';
          break;
        }
        //
        case '/mid-account': {
          this.clearFlag();
          this.title = ' / Merchant';
          this.breadcrumbs.topLink =
            '/onboarding/merchants/merchant/mid-accounts';
          this.breadcrumbs.topTitle = 'Onboarding / Company';
          this.backFlag = true;
          this.backLink = '/onboarding/merchants/merchant/mid-accounts';
          this.headerClass = 'sub-header';
          break;
        }
        case '/mid-account-error': {
          this.clearFlag();
          this.title = ' / Merchant';
          this.breadcrumbs.topLink =
            '/onboarding/merchants/merchant/mid-accounts';
          this.breadcrumbs.topTitle = 'Onboarding / Company';
          this.backFlag = true;
          this.backLink = '/onboarding/merchants/merchant/mid-accounts';
          this.headerClass = 'sub-header';
          break;
        }
        case '/new-mid-account': {
          this.clearFlag();
          this.title = ' / Merchant';
          this.breadcrumbs.topLink =
            '/onboarding/merchants/merchant/mid-accounts';
          this.breadcrumbs.topTitle = 'Onboarding / Company';
          this.backFlag = true;
          this.backLink = '/onboarding/merchants/merchant/mid-accounts';
          this.headerClass = 'sub-header';
          break;
        }
        //
        case '/onboarding/products': {
          this.clearFlag();
          this.title = 'Onboarding / Company';
          this.backFlag = true;
          this.backLink = '/clients';
          this.headerClass = 'sub-header-with-menu';
          break;
        }
        case '/onboarding/products/product': {
          this.clearFlag();
          this.title = 'Products';
          this.backFlag = true;
          this.backLink = '/onboarding/products';
          this.headerClass = 'sub-header';
          break;
        }
        case '/onboarding/products/new-product': {
          this.clearFlag();
          this.title = 'Products';
          this.backFlag = true;
          this.backLink = '/onboarding/products';
          this.headerClass = 'sub-header';
          break;
        }
        case '/onboarding/restrictions': {
          this.clearFlag();
          this.title = 'Onboarding / Company';
          this.backFlag = true;
          this.backLink = '/clients';
          this.headerClass = 'sub-header-with-menu';
          break;
        }
        case '/onboarding/reports': {
          this.clearFlag();
          this.title = 'Onboarding / Company';
          this.backFlag = true;
          this.backLink = '/clients';
          this.headerClass = 'sub-header-with-menu';
          break;
        }
        case '/onboarding/users': {
          this.clearFlag();
          this.title = 'Onboarding / Company';
          this.backFlag = true;
          this.backLink = '/clients';
          this.headerClass = 'sub-header-with-menu';
          break;
        }
        case '/onboarding/gurus': {
          this.clearFlag();
          this.title = 'Onboarding / Company';
          this.backFlag = true;
          this.backLink = '/clients';
          this.headerClass = 'sub-header-with-menu';
          break;
        }
        // company
        case '/company': {
          this.clearFlag();
          this.title = 'Company';
          this.backFlag = true;
          this.headerClass = 'sub-header-with-menu';
          this.backLink = '/clients';
          break;
        }
        case '/company/details': {
          this.clearFlag();
          this.title = 'Company';
          this.backFlag = true;
          this.headerClass = 'sub-header-with-menu';
          this.backLink = '/clients';
          break;
        }
        case '/company/billing': {
          this.clearFlag();
          this.title = 'Company';
          this.backFlag = true;
          this.headerClass = 'sub-header-with-menu';
          this.backLink = '/clients';
          break;
        }
        case '/company/crm': {
          this.clearFlag();
          this.title = 'Company';
          this.backFlag = true;
          this.headerClass = 'sub-header-with-menu';
          this.backLink = '/clients';
          break;
        }
        case '/company/merchants': {
          this.clearFlag();
          this.title = 'Company';
          this.backFlag = true;
          this.headerClass = 'sub-header-with-menu';
          this.backLink = '/clients';
          break;
        }
        case '/company/products': {
          this.clearFlag();
          this.title = 'Company';
          this.backFlag = true;
          this.headerClass = 'sub-header-with-menu';
          this.backLink = '/clients';
          break;
        }
        case '/company/restrictions': {
          this.clearFlag();
          this.title = 'Company';
          this.backFlag = true;
          this.headerClass = 'sub-header-with-menu';
          this.backLink = '/clients';
          break;
        }
        case '/company/reports': {
          this.clearFlag();
          this.title = 'Company';
          this.backFlag = true;
          this.headerClass = 'sub-header-with-menu';
          this.backLink = '/clients';
          break;
        }
        case '/company/users': {
          this.clearFlag();
          this.title = 'Company';
          this.backFlag = true;
          this.headerClass = 'sub-header-with-menu';
          this.backLink = '/clients';
          break;
        }
        case '/company/gurus': {
          this.clearFlag();
          this.title = 'Company';
          this.backFlag = true;
          this.headerClass = 'sub-header-with-menu';
          this.backLink = '/clients';
          break;
        }
        case '/company/activity': {
          this.clearFlag();
          this.title = 'Company';
          this.backFlag = true;
          this.headerClass = 'sub-header-with-menu';
          this.backLink = '/clients';
          break;
        }
        // merchant
        case '/merchant': {
          this.clearFlag();
          this.title = ' / Merchant';
          this.breadcrumbs.topLink = '/company/merchants';
          this.breadcrumbs.topTitle = 'Company';
          this.headerClass = 'sub-header-with-menu';
          this.backFlag = true;
          this.backLink = '/company/merchants';
          break;
        }
        case '/merchant/details': {
          this.clearFlag();
          this.title = ' / Merchant';
          this.breadcrumbs.topLink = '/company/merchants';
          this.breadcrumbs.topTitle = 'Company';
          this.headerClass = 'sub-header-with-menu';
          this.backFlag = true;
          this.backLink = '/company/merchants';
          break;
        }
        case '/merchant/products': {
          this.clearFlag();
          this.title = ' / Merchant';
          this.breadcrumbs.topLink = '/company/merchants';
          this.breadcrumbs.topTitle = 'Company';
          this.headerClass = 'sub-header-with-menu';
          this.backFlag = true;
          this.backLink = '/company/merchants';
          break;
        }
        case '/merchant/mid-accounts': {
          this.clearFlag();
          this.title = ' / Merchant';
          this.breadcrumbs.topLink = '/company/merchants';
          this.breadcrumbs.topTitle = 'Company';
          this.headerClass = 'sub-header-with-menu';
          this.backFlag = true;
          this.backLink = '/company/merchants';
          break;
        }
        case '/merchant/activity': {
          this.clearFlag();
          this.title = ' / Merchant';
          this.breadcrumbs.topLink = '/company/merchants';
          this.breadcrumbs.topTitle = 'Company';
          this.headerClass = 'sub-header-with-menu';
          this.backFlag = true;
          this.backLink = '/company/merchants';
          break;
        }
        // Partners
        case '/partners': {
          this.clearFlag();
          this.title = 'Partners';
          this.searchFlag = true;
          this.headerClass = 'one-header';
          break;
        }
        case '/partner': {
          this.clearFlag();
          this.title = 'Partners';
          this.backFlag = true;
          this.backLink = '/partners';
          this.headerClass = 'sub-header-with-menu';
          break;
        }
        case '/partner/details': {
          this.clearFlag();
          this.title = 'Partners';
          this.backFlag = true;
          this.backLink = '/partners';
          this.headerClass = 'sub-header-with-menu';
          break;
        }
        case '/partner/clients': {
          this.clearFlag();
          this.title = 'Partners';
          this.backFlag = true;
          this.backLink = '/partners';
          this.headerClass = 'sub-header-with-menu';
          break;
        }
        case '/partner/reports': {
          this.clearFlag();
          this.title = 'Partners';
          this.backFlag = true;
          this.backLink = '/partners';
          this.headerClass = 'sub-header-with-menu';
          break;
        }
        case '/partner/activity': {
          this.clearFlag();
          this.title = 'Partners';
          this.backFlag = true;
          this.backLink = '/partners';
          this.headerClass = 'sub-header-with-menu';
          break;
        }
        //
        case '/onboarding-partner': {
          this.clearFlag();
          this.title = '/ Partner';
          this.breadcrumbs.topLink = '/partners';
          this.breadcrumbs.topTitle = 'Onboarding ';
          this.backFlag = true;
          this.backLink = '/partners';
          this.headerClass = 'sub-header-with-menu';
          break;
        }
        case '/onboarding-partner/details': {
          this.clearFlag();
          this.title = '/ Partner';
          this.breadcrumbs.topLink = '/partners';
          this.breadcrumbs.topTitle = 'Onboarding ';
          this.backFlag = true;
          this.backLink = '/partners';
          this.headerClass = 'sub-header-with-menu';
          break;
        }
        case '/onboarding-partner/clients': {
          this.clearFlag();
          this.title = '/ Partner';
          this.breadcrumbs.topLink = '/partners';
          this.breadcrumbs.topTitle = 'Onboarding ';
          this.backFlag = true;
          this.backLink = '/partners';
          this.headerClass = 'sub-header-with-menu';
          break;
        }
        case '/onboarding-partner/reports': {
          this.clearFlag();
          this.title = '/ Partner';
          this.breadcrumbs.topLink = '/partners';
          this.breadcrumbs.topTitle = 'Onboarding ';
          this.backFlag = true;
          this.backLink = '/partners';
          this.headerClass = 'sub-header-with-menu';
          break;
        }

        case '/onboarding-partner/traders': {
          this.clearFlag();
          this.title = '/ Partner';
          this.breadcrumbs.topLink = '/partners';
          this.breadcrumbs.topTitle = 'Onboarding ';
          this.backFlag = true;
          this.backLink = '/partners';
          this.headerClass = 'sub-header-with-menu';
          break;
        }

        //users
        case '/users': {
          this.clearFlag();
          this.title = 'Users';
          this.searchFlag = true;
          this.headerClass = 'sub-menu';
          break;
        }
        case '/users/gurus': {
          this.clearFlag();
          this.title = 'Users';
          this.searchFlag = true;
          this.headerClass = 'sub-menu';
          break;
        }
        case '/users/users-clients': {
          this.clearFlag();
          this.title = 'Users';
          this.searchFlag = true;
          this.headerClass = 'sub-menu';
          break;
        }
        case '/users/users-partners': {
          this.clearFlag();
          this.title = 'Users';
          this.searchFlag = true;
          this.headerClass = 'sub-menu';
          break;
        }
        case '/new-user': {
          this.clearFlag();
          this.title = ' / New Guru';
          this.breadcrumbs.topLink = '/users/gurus';
          this.breadcrumbs.topTitle = 'Users';
          this.backFlag = true;
          this.backLink = '/users/gurus';
          this.headerClass = 'sub-header';
          break;
        }
        case '/user': {
          this.clearFlag();
          this.title = ' / Client Users';
          this.breadcrumbs.topLink = '/users/users-clients';
          this.breadcrumbs.topTitle = 'Users';
          this.backFlag = true;
          this.backLink = '/users/users-clients';
          this.headerClass = 'sub-header-with-menu';
          break;
        }
        case '/user/details': {
          this.clearFlag();
          this.title = ' / Client Users';
          this.breadcrumbs.topLink = '/users/users-clients';
          this.breadcrumbs.topTitle = 'Users';
          this.backFlag = true;
          this.backLink = '/users/users-clients';
          this.headerClass = 'sub-header-with-menu';
          break;
        }
        case '/user/notifications': {
          this.clearFlag();
          this.title = ' / Client Users';
          this.breadcrumbs.topLink = '/users/users-clients';
          this.breadcrumbs.topTitle = 'Users';
          this.backFlag = true;
          this.backLink = '/users/users-clients';
          this.headerClass = 'sub-header-with-menu';
          break;
        }
        case '/users/new-user-notification': {
          this.clearFlag();
          this.title = 'Jordan Downie';
          this.backFlag = true;
          this.backLink = '/user/notifications';
          this.headerClass = 'sub-header';
          break;
        }
        case '/users/user-notification': {
          this.clearFlag();
          this.title = 'Jordan Downie';
          this.backFlag = true;
          this.backLink = '/user/notifications';
          this.headerClass = 'sub-header';
          break;
        }
        case '/user/activity': {
          this.clearFlag();
          this.title = ' / Client Users';
          this.breadcrumbs.topLink = '/users/users-clients';
          this.breadcrumbs.topTitle = 'Users';
          this.backFlag = true;
          this.backLink = '/users/users-clients';
          this.headerClass = 'sub-header-with-menu';
          break;
        }
        // case '/profile': {
        //   this.clearFlag();
        //   this.title = ' / Guru';
        //   this.breadcrumbs.topLink = '/users/gurus';
        //   this.breadcrumbs.topTitle = 'Users';
        //   this.backFlag = true;
        //   this.backLink = '/users/gurus';
        //   this.headerClass = 'sub-header-with-menu';
        //   break;
        // }
        // case '/profile/details': {
        //   this.clearFlag();
        //   this.title = ' / Guru';
        //   this.breadcrumbs.topLink = '/users/gurus';
        //   this.breadcrumbs.topTitle = 'Users';
        //   this.backFlag = true;
        //   this.backLink = '/users/gurus';
        //   this.headerClass = 'sub-header-with-menu';
        //   break;
        // }
        // case '/profile/activity': {
        //   this.clearFlag();
        //   this.title = ' / Guru';
        //   this.breadcrumbs.topLink = '/users/gurus';
        //   this.breadcrumbs.topTitle = 'Users';
        //   this.backFlag = true;
        //   this.backLink = '/users/gurus';
        //   this.headerClass = 'sub-header-with-menu';
        //   break;
        // }
        //end users
        case '/activity': {
          this.clearFlag();
          this.title = 'Activity';
          this.searchFlag = true;
          this.headerClass = 'one-header';
          break;
        }
        //billing
        case '/billing': {
          this.clearFlag();
          this.title = 'Billing';
          this.searchFlag = true;
          this.headerClass = 'one-header';
          break;
        }
        case '/billing-client': {
          this.clearFlag();
          this.title = 'Billing';
          this.searchFlag = true;
          this.headerClass = 'sub-menu';
          break;
        }
        case '/billing-client/summary': {
          this.clearFlag();
          this.title = 'Billing';
          this.searchFlag = true;
          this.headerClass = 'sub-menu error-line-message';
          break;
        }
        case '/billing-client/payment-history': {
          this.clearFlag();
          this.title = 'Billing';
          this.searchFlag = true;
          this.headerClass = 'sub-menu';
          break;
        }
        case '/billing-client/services': {
          this.clearFlag();
          this.title = 'Billing';
          this.searchFlag = true;
          this.headerClass = 'sub-menu';
          break;
        }
        case '/billing-client/payment-methods': {
          this.clearFlag();
          this.title = 'Billing';
          this.searchFlag = true;
          this.headerClass = 'sub-menu';
          break;
        }
        // invoices
        case '/invoices': {
          this.clearFlag();
          this.title = 'Invoices';
          this.searchFlag = true;
          this.headerClass = 'one-header';
          break;
        }
        case '/invoice': {
          this.clearFlag();
          this.title = 'Invoices';
          this.backFlag = true;
          this.backLink = '/invoices';
          this.headerClass = 'sub-header-with-menu';
          break;
        }
        case '/invoice/summary': {
          this.clearFlag();
          this.title = 'Invoices';
          this.backFlag = true;
          this.backLink = '/invoices';
          this.headerClass = 'sub-header-with-menu error-line-message';
          break;
        }
        case '/invoice/payment-history': {
          this.clearFlag();
          this.title = 'Invoices';
          this.backFlag = true;
          this.backLink = '/invoices';
          this.headerClass = 'sub-header-with-menu';
          break;
        }
        case '/invoice/services': {
          this.clearFlag();
          this.title = 'Invoices';
          this.backFlag = true;
          this.backLink = '/invoices';
          this.headerClass = 'sub-header-with-menu';
          break;
        }
        case '/invoice/payment-methods': {
          this.clearFlag();
          this.title = 'Invoices';
          this.backFlag = true;
          this.backLink = '/invoices';
          this.headerClass = 'sub-header-with-menu';
          break;
        }
        // cover letters
        case '/cover-letters': {
          this.clearFlag();
          this.searchFlag = true;
          this.title = 'Cover Letters';
          this.headerClass = 'one-header';
          break;
        }
        case '/cover-letter': {
          this.clearFlag();
          this.title = 'Cover Letters';
          this.backFlag = true;
          this.backLink = '/cover-letters';
          this.headerClass = 'sub-header';
          break;
        }
        case '/new-cover-letter': {
          this.clearFlag();
          this.title = 'Cover Letters';
          this.backFlag = true;
          this.backLink = '/cover-letters';
          this.headerClass = 'sub-header';
          break;
        }
        // Tickets
        case '/tickets': {
          this.clearFlag();
          this.title = 'Tickets';
          this.searchFlag = true;
          this.headerClass = 'one-header';
          break;
        }
        case '/new-ticket': {
          this.clearFlag();
          this.title = 'Tickets';
          this.backFlag = true;
          this.backLink = '/tickets';
          this.headerClass = 'sub-header-with-data';
          break;
        }
        case '/ticket': {
          this.clearFlag();
          this.title = 'Tickets';
          this.backFlag = true;
          this.backLink = '/tickets';
          this.headerClass = 'sub-header-with-data';
          break;
        }
        case '/client-ticket': {
          this.clearFlag();
          this.title = 'Tickets';
          this.backFlag = true;
          this.backLink = '/tickets';
          this.headerClass = 'sub-header-with-data';
          break;
        }
        case '/new-client-ticket': {
          this.clearFlag();
          this.title = 'Tickets';
          this.backFlag = true;
          this.backLink = '/tickets';
          this.headerClass = 'sub-header-with-data';
          break;
        }

        // Settings
        case '/settings/chargeback-parameters': {
          this.clearFlag();
          this.title = 'Settings';
          this.headerClass = 'sub-menu';
          break;
        }
        case '/settings/industries': {
          this.clearFlag();
          this.title = 'Settings';
          this.headerClass = 'sub-menu';
          break;
        }
        case '/settings/reason-codes': {
          this.clearFlag();
          this.title = 'Settings';
          this.headerClass = 'sub-menu';
          break;
        }
        case '/settings/new-reason-codes': {
          this.clearFlag();
          this.title = 'Reason Codes';
          this.backFlag = true;
          this.backLink = '/settings/reason-codes';
          this.headerClass = 'sub-header';
          break;
        }
        case '/settings/crm': {
          this.clearFlag();
          this.title = 'Settings';
          this.headerClass = 'sub-menu';
          break;
        }
        case '/settings/new-settings-crm': {
          this.clearFlag();
          this.title = 'CRM';
          this.backFlag = true;
          this.backLink = '/settings/crm';
          this.headerClass = 'sub-header';
          break;
        }
        case '/settings/payment-processor': {
          this.clearFlag();
          this.title = 'Settings';
          this.headerClass = 'sub-menu';
          break;
        }
        case '/settings/processor': {
          this.clearFlag();
          this.title = 'Processors';
          this.backFlag = true;
          this.backLink = '/settings/payment-processor';
          this.headerClass = 'sub-header-with-menu';
          break;
        }
        case '/settings/processor/details': {
          this.clearFlag();
          this.title = 'Processors';
          this.backFlag = true;
          this.backLink = '/settings/payment-processor';
          this.headerClass = 'sub-header-with-menu';
          break;
        }
        case '/settings/processor/dispute-info': {
          this.clearFlag();
          this.title = 'Processors';
          this.backFlag = true;
          this.backLink = '/settings/payment-processor';
          this.headerClass = 'sub-header-with-menu';
          break;
        }
        case '/settings/processor/risk-rule': {
          this.clearFlag();
          this.title = 'Processors';
          this.backFlag = true;
          this.backLink = '/settings/payment-processor';
          this.headerClass = 'sub-header-with-menu';
          break;
        }
        case '/settings/new-processor': {
          this.clearFlag();
          this.title = 'Processors';
          this.backFlag = true;
          this.backLink = '/settings/payment-processor';
          this.headerClass = 'sub-header-with-menu';
          break;
        }
        case '/settings/new-processor/details': {
          this.clearFlag();
          this.title = 'Processors';
          this.backFlag = true;
          this.backLink = '/settings/payment-processor';
          this.headerClass = 'sub-header-with-menu';
          break;
        }
        case '/settings/new-processor/dispute-info': {
          this.clearFlag();
          this.title = 'Processors';
          this.backFlag = true;
          this.backLink = '/settings/payment-processor';
          this.headerClass = 'sub-header-with-menu';
          break;
        }
        case '/settings/new-processor/risk-rule': {
          this.clearFlag();
          this.title = 'Processors';
          this.backFlag = true;
          this.backLink = '/settings/payment-processor';
          this.headerClass = 'sub-header-with-menu';
          break;
        }
        case '/settings/payment-gateway': {
          this.clearFlag();
          this.title = 'Settings';
          this.headerClass = 'sub-menu';
          break;
        }
        case '/settings/inner-payment-gateway': {
          this.clearFlag();
          this.title = 'Payment Gateways';
          this.backFlag = true;
          this.backLink = '/settings/payment-gateway';
          this.headerClass = 'sub-header';
          break;
        }
        case '/settings/new-payment-gateway': {
          this.clearFlag();
          this.title = 'Payment Gateways';
          this.backFlag = true;
          this.backLink = '/settings/payment-gateway';
          this.headerClass = 'sub-header';
          break;
        }
        case '/settings/lead-source': {
          this.clearFlag();
          this.title = 'Settings';
          this.headerClass = 'sub-menu';
          break;
        }
        default: {
          this.clearFlag();
          break;
        }
      }
    });
    dashboardService.dashboardMenu$.subscribe(dashboardMenu => {
      this.dashboard.options = dashboardMenu.dashboards;
    });
    dashboardService.notificationsCount$.subscribe(count => {
      this.notificationsCount = count;
    });
  }

  ngOnInit() {
    this.dashboardService.setDashboardMenu(this.dashboard.options);
  }

  openGlobalSearch = () => {
    this.openAdvansedSearch = true;
  };

  closeFunction = val => (this.openAdvansedSearch = val);

  //dashboard function
  dashboardChange = val => {
    this.dashboardService.setDashboardMenuVal(val);
  };

  ngOnDestroy() {
    if (this.subscription) {
      this.subscription.unsubscribe();
    }
  }
}
