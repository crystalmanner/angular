import { NgModule,CUSTOM_ELEMENTS_SCHEMA , NO_ERRORS_SCHEMA} from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule, Router } from '@angular/router';
import { PartnerDetaisComponent } from './partner/partner-detais/partner-detais.component';
import { PartnerClientsComponent } from './partner/partner-clients/partner-clients.component';
import { PartnerReportsComponent } from './partner/partner-reports/partner-reports.component';
import { PartnerActivityComponent } from './partner/partner-activity/partner-activity.component';
import { OnboardingPartnerDetailsComponent } from './onboarding-partner/onboarding-partner-details/onboarding-partner-details.component';
import { OnboardingPartnerClientsComponent } from './onboarding-partner/onboarding-partner-clients/onboarding-partner-clients.component';
import { OnboardingPartnerReportsComponent } from './onboarding-partner/onboarding-partner-reports/onboarding-partner-reports.component';
import { PartnersComponent } from './partners.component';
import { PartnerComponent } from './partner/partner.component';
import { OnboardingPartnerComponent } from './onboarding-partner/onboarding-partner.component';
import { FormsModule } from '@angular/forms';
import { SharedModule } from '../../shared/shared.module';

const innerPartner: Routes = [
  { path: 'details', component: PartnerDetaisComponent },
  { path: 'clients', component: PartnerClientsComponent },
  { path: 'reports', component: PartnerReportsComponent },
  { path: 'activity', component: PartnerActivityComponent }
];

const innerOnboardingPartner: Routes = [
  { path: 'details', component: OnboardingPartnerDetailsComponent },
  { path: 'clients', component: OnboardingPartnerClientsComponent },
  { path: 'reports', component: OnboardingPartnerReportsComponent }
];

const routes: Routes = [
  { path: 'partners', component: PartnersComponent },
  { path: 'partner', component: PartnerComponent, children: innerPartner },
  { path: 'onboarding-partner', component: OnboardingPartnerComponent, children: innerOnboardingPartner },
];

@NgModule({
  imports: [
    //FormsModule,
    SharedModule,
    routes
  ],
  declarations: [
    PartnersComponent,
    PartnerComponent,
    PartnerDetaisComponent,
    PartnerClientsComponent,
    PartnerReportsComponent,
    PartnerActivityComponent,
    OnboardingPartnerComponent,
    OnboardingPartnerDetailsComponent,
    OnboardingPartnerClientsComponent,
    OnboardingPartnerReportsComponent,
  ],
  bootstrap: [PartnersComponent],
  schemas: [
    CUSTOM_ELEMENTS_SCHEMA,
    NO_ERRORS_SCHEMA
],
  providers: []
})
export class PartnersModule { }
