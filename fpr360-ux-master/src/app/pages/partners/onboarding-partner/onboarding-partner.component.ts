import { Component, OnInit, OnDestroy } from '@angular/core';
import { ISubscription, Subscription } from 'rxjs/Subscription';
import { IndicatorsService } from '../../../services/indicators.service';

@Component({
  selector: 'app-onboarding-partner',
  templateUrl: './onboarding-partner.component.html',
  styleUrls: ['./onboarding-partner.component.scss'],
  providers: [IndicatorsService],
  
})

export class OnboardingPartnerComponent implements OnInit, OnDestroy {
  subscription: Subscription;
  activateButton = true;
  activePage = false;
  newTitleName:String = 'Merchant(input)';
  partnerInnerMenu = [
    {
      path: 'details',
      name: 'Details',
      indicator: ''
    },
    {
      path: 'clients',
      name: 'Clients',
      indicator: ''
    },
    {
      path: 'reports',
      name: 'Reports',
      indicator: ''
    },
    {
      path: 'traders',
      name: this.newTitleName,
      indicator: ''
    }
  ];
  pageSettings = ['Inactive', 'Option 2', 'Option 3', 'Traders'];

  setString: string = "";

  indicators = {
    detailsIndicator: '',
    clientsIndicator: '',
    reportsIndicator: '',
    tradersIndicator: ''
  };

  constructor(private indicatorsService: IndicatorsService) 
  {
    indicatorsService.indicator$.subscribe(indicator => {
      this.indicators = indicator;
      this.partnerInnerMenu[0].indicator = this.indicators.detailsIndicator;
      this.partnerInnerMenu[1].indicator = this.indicators.clientsIndicator;
      this.partnerInnerMenu[2].indicator = this.indicators.reportsIndicator;
      this.partnerInnerMenu[3].indicator = this.indicators.tradersIndicator;
      this.activateButton = true;
    });
  }

  updateFromChild($event){
    this.setString = $event;
  }

  ngOnInit() {}

  ngOnDestroy() {
    if (this.subscription) {
      this.subscription.unsubscribe();
    }
  }

  titleVal = val => console.log(val);

  inactive = val => {
    this.activePage = val;
  };

  selectPageSettings = val => {
     switch (val) {
      case 'Inactive':
        this.activePage = false;
        break;
      default:
        break;
    }
  };
}
