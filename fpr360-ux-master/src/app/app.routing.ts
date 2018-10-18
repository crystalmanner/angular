import { NgModule }              from '@angular/core';
import { RouterModule, Routes }  from '@angular/router';
import { ProductComponent } from './pages/product/product.component';
import { NewProcessorDetailsComponent } from './pages/settings/settings-payment-processor/new-processor/new-processor-details/new-processor-details.component';
import { NewProcessorDisputeInfoComponent } from './pages/settings/settings-payment-processor/new-processor/new-processor-dispute-info/new-processor-dispute-info.component';
import { NewProcessorRiskRuleComponent } from './pages/settings/settings-payment-processor/new-processor/new-processor-risk-rule/new-processor-risk-rule.component';
import { ProcessorDetailsComponent } from './pages/settings/settings-payment-processor/processor/processor-details/processor-details.component';
import { ProcessorDisputeInfoComponent } from './pages/settings/settings-payment-processor/processor/processor-dispute-info/processor-dispute-info.component';
import { ProcessorRiskRuleComponent } from './pages/settings/settings-payment-processor/processor/processor-risk-rule/processor-risk-rule.component';
import { InvoiceSummaryComponent } from './pages/invoices/invoice/invoice-summary/invoice-summary.component';
import { InvoicePaymentHistoryComponent } from './pages/invoices/invoice/invoice-payment-history/invoice-payment-history.component';
import { InvoiceServiceComponent } from './pages/invoices/invoice/invoice-service/invoice-service.component';
import { InvoicePaymentMethodsComponent } from './pages/invoices/invoice/invoice-payment-methods/invoice-payment-methods.component';
import { BillingSummaryComponent } from './pages/billing-client/billing-summary/billing-summary.component';
import { BillingHistoryComponent } from './pages/billing-client/billing-history/billing-history.component';
import { BillingServicesComponent } from './pages/billing-client/billing-services/billing-services.component';
import { BillingMethodsComponent } from './pages/billing-client/billing-methods/billing-methods.component';
import { GurusComponent } from './pages/users/gurus/gurus.component';
import { UsersClientsComponent } from './pages/users/users-clients/users-clients.component';
import { UsersPartnersComponent } from './pages/users/users-partners/users-partners.component';
import { UserDetailsComponent } from './pages/users/user/user-details/user-details.component';
import { CanDeactivateGuard } from './services/can-deactivate-guard.service';
import { UserNotificationsComponent } from './pages/users/user/user-notifications/user-notifications.component';
import { UserActivityComponent } from './pages/users/user/user-activity/user-activity.component';
import { NewOnboardingMerchantDetailsComponent } from './pages/onboarding/onboarding-merchants/new-onboarding-merchant/new-onboarding-merchant-details/new-onboarding-merchant-details.component';
import { NewOnboardingMerchantProductsComponent } from './pages/onboarding/onboarding-merchants/new-onboarding-merchant/new-onboarding-merchant-products/new-onboarding-merchant-products.component';
import { NewOnboardingMerchantMidAccountsComponent } from './pages/onboarding/onboarding-merchants/new-onboarding-merchant/new-onboarding-merchant-mid-accounts/new-onboarding-merchant-mid-accounts.component';
import { OnboardingMerchantDetailsComponent } from './pages/onboarding/onboarding-merchants/onboarding-merchant/onboarding-merchant-details/onboarding-merchant-details.component';
import { OnboardingMerchantProductsComponent } from './pages/onboarding/onboarding-merchants/onboarding-merchant/onboarding-merchant-products/onboarding-merchant-products.component';
import { OnboardingMerchantMidAccountsComponent } from './pages/onboarding/onboarding-merchants/onboarding-merchant/onboarding-merchant-mid-accounts/onboarding-merchant-mid-accounts.component';
import { OnboardingDetailsComponent } from './pages/onboarding/onboarding-details/onboarding-details.component';
import { OnboardingBillingComponent } from './pages/onboarding/onboarding-billing/onboarding-billing.component';
import { OnboardingCrmComponent } from './pages/onboarding/onboarding-crm/onboarding-crm.component';
import { OnboardingMerchantsComponent } from './pages/onboarding/onboarding-merchants/onboarding-merchants.component';
import { OnboardingProductsComponent } from './pages/onboarding/onboarding-products/onboarding-products.component';
import { OnboardingRestrictionsComponent } from './pages/onboarding/onboarding-restrictions/onboarding-restrictions.component';
import { CompanyReportsComponent } from './pages/company/company-reports/company-reports.component';
import { OnboardingUsersComponent } from './pages/onboarding/onboarding-users/onboarding-users.component';
import { OnboardingGurusComponent } from './pages/onboarding/onboarding-gurus/onboarding-gurus.component';
import { ProfileDetailsComponent } from './pages/profile/profile-details/profile-details.component';
import { ProfileActivityComponent } from './pages/profile/profile-activity/profile-activity.component';
import { PartnerDetaisComponent } from './pages/partners/partner/partner-detais/partner-detais.component';
import { PartnerClientsComponent } from './pages/partners/partner/partner-clients/partner-clients.component';
import { PartnerReportsComponent } from './pages/partners/partner/partner-reports/partner-reports.component';
import { PartnerActivityComponent } from './pages/partners/partner/partner-activity/partner-activity.component';
import { OnboardingPartnerDetailsComponent } from './pages/partners/onboarding-partner/onboarding-partner-details/onboarding-partner-details.component';
import { OnboardingPartnerClientsComponent } from './pages/partners/onboarding-partner/onboarding-partner-clients/onboarding-partner-clients.component';
import { OnboardingPartnerReportsComponent } from './pages/partners/onboarding-partner/onboarding-partner-reports/onboarding-partner-reports.component';
import { CompanyDetailsComponent } from './pages/company/company-details/company-details.component';
import { CompanyBillingComponent } from './pages/company/company-billing/company-billing.component';
import { CompanyCrmComponent } from './pages/company/company-crm/company-crm.component';
import { CompanyMerchantsComponent } from './pages/company/company-merchants/company-merchants.component';
import { CompanyProductsComponent } from './pages/company/company-products/company-products.component';
import { RestrictionsComponent } from './pages/company/restrictions/restrictions.component';
import { CompanyUsersComponent } from './pages/company/company-users/company-users.component';
import { CompanyGurusComponent } from './pages/company/company-gurus/company-gurus.component';
import { CompanyActivityComponent } from './pages/company/company-activity/company-activity.component';
import { MerchantDetailsComponent } from './pages/merchant/merchant-details/merchant-details.component';
import { MerchantProductsComponent } from './pages/merchant/merchant-products/merchant-products.component';
import { MerchantMidAccountsComponent } from './pages/merchant/merchant-mid-accounts/merchant-mid-accounts.component';
import { MerchantActivityComponent } from './pages/merchant/merchant-activity/merchant-activity.component';
import { SettingsCargebackParametersComponent } from './pages/settings/settings-cargeback-parameters/settings-cargeback-parameters.component';
import { SettingsIndustriesComponent } from './pages/settings/settings-industries/settings-industries.component';
import { SettingsReasonCodesComponent } from './pages/settings/settings-reason-codes/settings-reason-codes.component';
import { SettingsCrmComponent } from './pages/settings/settings-crm/settings-crm.component';
import { SettingsPaymentProcessorComponent } from './pages/settings/settings-payment-processor/settings-payment-processor.component';
import { SettingsPaymentGatewayComponent } from './pages/settings/settings-payment-gateway/settings-payment-gateway.component';
import { LeadSourceComponent } from './pages/settings/lead-source/lead-source.component';
import { LoginComponent } from './pages/login/login.component';
import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { WidgetPageComponent } from './pages/dashboard/widget-page/widget-page.component';
import { ReportWidgetComponent } from './pages/dashboard/widget-page/report-widget/report-widget.component';
import { MidHealthReportComponent } from './pages/dashboard/mid-health-report/mid-health-report.component';
import { AlertsComponent } from './pages/alerts/alerts.component';
import { AlertComponent } from './pages/alerts/alert/alert.component';
import { AlertResolveComponent } from './pages/alerts/alert-resolve/alert-resolve.component';
import { AlertDuplicateComponent } from './pages/alerts/alert-duplicate/alert-duplicate.component';
import { AlertDescriptorComponent } from './pages/alerts/alert-descriptor/alert-descriptor.component';
import { ChargebacksComponent } from './pages/chargebacks/chargebacks.component';
import { ChargebackErrorComponent } from './pages/chargebacks/chargeback-error/chargeback-error.component';
import { ChargebackSummaryComponent } from './pages/chargebacks/chargeback-summary/chargeback-summary.component';
import { ChargebackDisputeComponent } from './pages/chargebacks/chargeback-dispute/chargeback-dispute.component';
import { ChargebackComponent } from './pages/chargeback/chargeback.component';
import { ClientsComponent } from './pages/clients/clients.component';
import { OnboardingComponent } from './pages/onboarding/onboarding.component';
import { MidAccountComponent } from './pages/mid-account/mid-account.component';
import { MidAccountErrorComponent } from './pages/mid-account-error/mid-account-error.component';
import { NewMidAccountComponent } from './pages/new-mid-account/new-mid-account.component';
import { CompanyComponent } from './pages/company/company.component';
import { MerchantComponent } from './pages/merchant/merchant.component';
import { UsersComponent } from './pages/users/users.component';
import { UserComponent } from './pages/users/user/user.component';
import { ClientUserResolver } from './pages/users/user/client.resolver';
import { UserType } from './models/user';
import { PartnerUserResolver } from './pages/users/user/partner.resolver';
import { NewUserComponent } from './pages/users/new-user/new-user.component';
import { UserNotificationComponent } from './pages/users/user-notification/user-notification.component';
import { NewUserNotificationComponent } from './pages/users/new-user-notification/new-user-notification.component';
import { PartnersComponent } from './pages/partners/partners.component';
import { PartnerComponent } from './pages/partners/partner/partner.component';
import { OnboardingPartnerComponent } from './pages/partners/onboarding-partner/onboarding-partner.component';
import { ActivityComponent } from './pages/activity/activity.component';
import { BillingComponent } from './pages/billing/billing.component';
import { BillingClientComponent } from './pages/billing-client/billing-client.component';
import { InvoicesComponent } from './pages/invoices/invoices.component';
import { InvoiceComponent } from './pages/invoices/invoice/invoice.component';
import { CoverLettersComponent } from './pages/cover-letters/cover-letters.component';
import { CoverLetterComponent } from './pages/cover-letters/cover-letter/cover-letter.component';
import { NewCoverLetterComponent } from './pages/cover-letters/new-cover-letter/new-cover-letter.component';
import { TicketsComponent } from './pages/tickets/tickets.component';
import { NewTicketComponent } from './pages/tickets/new-ticket/new-ticket.component';
import { TicketComponent } from './pages/tickets/ticket/ticket.component';
import { ClientTicketComponent } from './pages/tickets/client-ticket/client-ticket.component';
import { NewClientTicketComponent } from './pages/tickets/new-client-ticket/new-client-ticket.component';
import { SettingsComponent } from './pages/settings/settings.component';
import { ProcessorComponent } from './pages/settings/settings-payment-processor/processor/processor.component';
import { NewProcessorComponent } from './pages/settings/settings-payment-processor/new-processor/new-processor.component';
import { PaymentGatewayComponent } from './pages/settings/settings-payment-gateway/payment-gateway/payment-gateway.component';
import { NewPaymentGatewayComponent } from './pages/settings/settings-payment-gateway/new-payment-gateway/new-payment-gateway.component';
import { NewReasonCodesComponent } from './pages/settings/settings-reason-codes/new-reason-codes/new-reason-codes.component';
import { NewSettingsCrmComponent } from './pages/settings/settings-crm/new-settings-crm/new-settings-crm.component';
import { ProfileComponent } from './pages/profile/profile.component';
import { ProfileResolver } from './pages/profile/profile.resolver';
import { OnboardingMerchantComponent } from './pages/onboarding/onboarding-merchants/onboarding-merchant/onboarding-merchant.component';
import { NewOnboardingMerchantComponent } from './pages/onboarding/onboarding-merchants/new-onboarding-merchant/new-onboarding-merchant.component';
import { OnboardingProductInnerComponent } from './pages/onboarding/onboarding-products/onboarding-product-inner/onboarding-product-inner.component';
import { NewOnboardingProductComponent } from './pages/onboarding/onboarding-products/new-onboarding-product/new-onboarding-product.component';

// Routes
const newProcessorTabs: Routes = [
    { path: 'details', component: NewProcessorDetailsComponent },
    { path: 'dispute-info', component: NewProcessorDisputeInfoComponent },
    { path: 'risk-rule', component: NewProcessorRiskRuleComponent }
  ];
  const processorTabs: Routes = [
    { path: 'details', component: ProcessorDetailsComponent },
    { path: 'dispute-info', component: ProcessorDisputeInfoComponent },
    { path: 'risk-rule', component: ProcessorRiskRuleComponent }
  ];
  
  const invoiceTabs: Routes = [
    { path: 'summary', component: InvoiceSummaryComponent },
    { path: 'payment-history', component: InvoicePaymentHistoryComponent },
    { path: 'services', component: InvoiceServiceComponent },
    { path: 'payment-methods', component: InvoicePaymentMethodsComponent }
  ];
  
  const billingTabs: Routes = [
    { path: 'summary', component: BillingSummaryComponent },
    { path: 'payment-history', component: BillingHistoryComponent },
    { path: 'services', component: BillingServicesComponent },
    { path: 'payment-methods', component: BillingMethodsComponent }
  ];
  
  const usersTabs: Routes = [
    { path: 'gurus', component: GurusComponent },
    { path: 'users-clients', component: UsersClientsComponent },
    { path: 'users-partners', component: UsersPartnersComponent }
  ];
  
  const userTabs: Routes = [
    { path: 'details', component: UserDetailsComponent, canDeactivate: [CanDeactivateGuard]  },
    { path: 'notifications', component: UserNotificationsComponent },
    { path: 'activity', component: UserActivityComponent }
  ];
  
  const newOnboardingMerchantTabs: Routes = [
    { path: 'details', component: NewOnboardingMerchantDetailsComponent },
    { path: 'products', component: NewOnboardingMerchantProductsComponent },
    { path: 'mid-accounts', component: NewOnboardingMerchantMidAccountsComponent }
  ];
  
  const innerOnboardingMerchantTabs: Routes = [
    { path: 'details', component: OnboardingMerchantDetailsComponent },
    { path: 'products', component: OnboardingMerchantProductsComponent },
    { path: 'mid-accounts', component: OnboardingMerchantMidAccountsComponent }
  ];
  
  const innerOnboarding: Routes = [
    { path: 'details', component: OnboardingDetailsComponent },
    { path: 'billing', component: OnboardingBillingComponent },
    { path: 'crm', component: OnboardingCrmComponent },
    { path: 'merchants', component: OnboardingMerchantsComponent },
    { path: 'products', component: OnboardingProductsComponent },
    { path: 'restrictions', component: OnboardingRestrictionsComponent },
    { path: 'reports', component: CompanyReportsComponent },
    { path: 'users', component: OnboardingUsersComponent },
    { path: 'gurus', component: OnboardingGurusComponent }
  ];
  
  const innerProfile: Routes = [
    { path: 'details', component: ProfileDetailsComponent, canDeactivate: [CanDeactivateGuard] },
    { path: 'activity', component: ProfileActivityComponent }
  ];
  
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
  
  const innerCompany: Routes = [
    { path: 'details', component: CompanyDetailsComponent },
    { path: 'billing', component: CompanyBillingComponent },
    { path: 'crm', component: CompanyCrmComponent },
    { path: 'merchants', component: CompanyMerchantsComponent },
    { path: 'products', component: CompanyProductsComponent },
    { path: 'restrictions', component: RestrictionsComponent },
    { path: 'reports', component: CompanyReportsComponent },
    { path: 'users', component: CompanyUsersComponent },
    { path: 'gurus', component: CompanyGurusComponent },
    { path: 'activity', component: CompanyActivityComponent }
  ];
  
  const innerMerchant: Routes = [
    { path: 'details', component: MerchantDetailsComponent },
    { path: 'products', component: MerchantProductsComponent },
    { path: 'mid-accounts', component: MerchantMidAccountsComponent },
    { path: 'activity', component: MerchantActivityComponent }
  ];
  
  const innerSettings: Routes = [
    { path: 'chargeback-parameters', component: SettingsCargebackParametersComponent },
    { path: 'industries', component: SettingsIndustriesComponent },
    { path: 'reason-codes', component: SettingsReasonCodesComponent },
    { path: 'crm', component: SettingsCrmComponent },
    { path: 'payment-processor', component: SettingsPaymentProcessorComponent },
    { path: 'payment-gateway', component: SettingsPaymentGatewayComponent },
    { path: 'lead-source', component: LeadSourceComponent }
  ];
  
  const routers: Routes = [
    { path: 'login', component: LoginComponent },
    { path: '', component: DashboardComponent },
    { path: 'widget', component: WidgetPageComponent },
    { path: 'widget/report', component: ReportWidgetComponent },
    { path: 'mid-health-report', component: MidHealthReportComponent },
    { path: 'alerts', component: AlertsComponent },
    { path: 'alerts/alert', component: AlertComponent },
    { path: 'alerts/alert-resolve', component: AlertResolveComponent },
    { path: 'alerts/alert-duplicate', component: AlertDuplicateComponent },
    { path: 'alerts/alert-descriptor', component: AlertDescriptorComponent },
    { path: 'chargebacks', component: ChargebacksComponent },
    { path: 'chargeback-error', component: ChargebackErrorComponent },
    { path: 'chargeback-summary', component: ChargebackSummaryComponent },
    { path: 'chargeback-dispute', component: ChargebackDisputeComponent },
    { path: 'chargeback', component: ChargebackComponent },
    { path: 'clients', component: ClientsComponent },
    { path: 'onboarding', component: OnboardingComponent, children: innerOnboarding },
    { path: 'mid-account', component: MidAccountComponent },
    { path: 'mid-account-error', component: MidAccountErrorComponent },
    { path: 'new-mid-account', component: NewMidAccountComponent },
    { path: 'company', component: CompanyComponent, children: innerCompany },
    { path: 'merchant', component: MerchantComponent, children: innerMerchant },
    { path: 'users', component: UsersComponent, children: usersTabs },
    { path: 'user', component: UserComponent, children: userTabs },
    { 
      path: 'client/:id', 
      component: UserComponent, 
      children: userTabs,
      resolve: {user: ClientUserResolver},
      data: {
        breadcrumbs: {
          topLink: '/users/users-clients',
          topTitle: 'Users',
          title: ' / Client Users'
        },
        userType: UserType.CLIENT
      } 
    },
    { 
      path: 'partner/:id', 
      component: UserComponent, 
      children: userTabs,
      resolve: {user: PartnerUserResolver},
      data: {
        breadcrumbs: {
          topLink: '/users/users-partners',
          topTitle: 'Users',
          title: ' / Partner Users'
        },
        userType: UserType.PARTNER
      } 
    },
    { path: 'new-user', component: NewUserComponent, canDeactivate: [CanDeactivateGuard] },
    { path: 'users/user-notification', component: UserNotificationComponent },
    { path: 'users/new-user-notification', component: NewUserNotificationComponent },
    { path: 'partners', component: PartnersComponent },
    { path: 'partner', component: PartnerComponent, children: innerPartner },
    { path: 'onboarding-partner', component: OnboardingPartnerComponent, children: innerOnboardingPartner },
    { path: 'activity', component: ActivityComponent },
    { path: 'billing', component: BillingComponent },
    { path: 'billing-client', component: BillingClientComponent, children: billingTabs },
    { path: 'invoices', component: InvoicesComponent },
    { path: 'invoice', component: InvoiceComponent, children: invoiceTabs },
    { path: 'cover-letters', component: CoverLettersComponent },
    { path: 'cover-letter', component: CoverLetterComponent },
    { path: 'new-cover-letter', component: NewCoverLetterComponent },
    { path: 'tickets', component: TicketsComponent },
    { path: 'new-ticket', component: NewTicketComponent },
    { path: 'ticket', component: TicketComponent },
    { path: 'client-ticket', component: ClientTicketComponent },
    { path: 'new-client-ticket', component: NewClientTicketComponent },
    { path: 'settings', component: SettingsComponent, children: innerSettings },
    { path: 'settings/processor', component: ProcessorComponent, children: processorTabs },
    { path: 'settings/new-processor', component: NewProcessorComponent, children: newProcessorTabs },
    { path: 'settings/inner-payment-gateway', component: PaymentGatewayComponent },
    { path: 'settings/new-payment-gateway', component: NewPaymentGatewayComponent },
    { path: 'settings/new-reason-codes', component: NewReasonCodesComponent },
    { path: 'settings/new-settings-crm', component: NewSettingsCrmComponent },
    { 
      path: 'profile/:id', 
      component: ProfileComponent, 
      children: innerProfile, 
      resolve: {profile: ProfileResolver},
      data: {
        breadcrumbs: {
          topLink: '/users/gurus',
          topTitle: 'Users',
          title: ' / Guru'
        }
      }
    },
    { path: 'onboarding/merchants/merchant', component: OnboardingMerchantComponent, children: innerOnboardingMerchantTabs },
    { path: 'onboarding/merchants/new-merchant', component: NewOnboardingMerchantComponent, children: newOnboardingMerchantTabs },
    { path: 'product', component: ProductComponent },
    { path: 'onboarding/products/product', component: OnboardingProductInnerComponent },
    { path: 'onboarding/products/new-product', component: NewOnboardingProductComponent }
  ];

@NgModule({
  imports: [
    RouterModule.forRoot(
      routers,
      { enableTracing: true } // <-- debugging purposes only
    )
  ],
  exports: [
    RouterModule,
  ]
})
export class AppRoutingModule {}