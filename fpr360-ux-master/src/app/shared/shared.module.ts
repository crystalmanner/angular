import * as core from '@angular/core';
import { CommonModule, LocationStrategy, HashLocationStrategy } from '@angular/common';
import { HttpModule } from '@angular/http';
import { PerfectScrollbarModule, PERFECT_SCROLLBAR_CONFIG, PerfectScrollbarConfigInterface } from 'ngx-perfect-scrollbar';
import { HttpClientModule } from '@angular/common/http';
import { AngularSvgIconModule } from 'angular-svg-icon';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { CdkTableModule } from '@angular/cdk/table';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CfDatepickerModule, CF_COMPONENTS, CF_DIRECTIVES } from '../cf-components';
import { SortablejsModule } from 'angular-sortablejs';
import { TextMaskModule } from 'angular2-text-mask';
import { NgxDatatableModule } from '@swimlane/ngx-datatable';
import { RouterModule } from '@angular/router';
import { AlertsService } from '../pages/alerts/alerts.service';
import { AlertReasonService } from '../pages/alerts/alert-resolve/alertsReason.service';
import { AlertDescriptorService } from '../pages/alerts/alert-descriptor/alert-descriptor-service';
import { DialogService, ConfirmationDialogComponent, MessageDialogComponent } from '../services/dialog.service';
import { CanDeactivateGuard } from '../services/can-deactivate-guard.service';
import { ClientUserResolver } from '../pages/users/user/client.resolver';
import { CompanyService } from '../services/data/company.service';
import { PartnerUserResolver } from '../pages/users/user/partner.resolver';
import { ProfileResolver } from '../pages/profile/profile.resolver';
import { RoleService } from '../services/data/role.service';
import { UserService } from '../services/data/user.service';
import { MatAutocompleteModule, MatButtonModule, MatButtonToggleModule, MatCardModule, MatCheckboxModule, MatDialogModule, MatInputModule, MatListModule, MatMenuModule, MatNativeDateModule, MatRadioModule, MatRippleModule, MatSelectModule, MatSidenavModule, MatSliderModule, MatSlideToggleModule, MatTabsModule, MatSnackBarModule } from '@angular/material';
import { DashboardComponent } from '../pages/dashboard/dashboard.component';
import { AlertsComponent } from '../pages/alerts/alerts.component';
import { ChargebacksComponent } from '../pages/chargebacks/chargebacks.component';
import { ClientsComponent } from '../pages/clients/clients.component';
import { UsersComponent } from '../pages/users/users.component';
import { PartnersComponent } from '../pages/partners/partners.component';
import { ActivityComponent } from '../pages/activity/activity.component';
import { BillingComponent } from '../pages/billing/billing.component';
import { CoverLettersComponent } from '../pages/cover-letters/cover-letters.component';
import { TicketsComponent } from '../pages/tickets/tickets.component';
import { SettingsComponent } from '../pages/settings/settings.component';
import { ProfileComponent } from '../pages/profile/profile.component';
import { LoginComponent } from '../pages/login/login.component';
import { ProfileDetailsComponent } from '../pages/profile/profile-details/profile-details.component';
import { ProfileActivityComponent } from '../pages/profile/profile-activity/profile-activity.component';
import { PartnerComponent } from '../pages/partners/partner/partner.component';
import { PartnerDetaisComponent } from '../pages/partners/partner/partner-detais/partner-detais.component';
import { PartnerClientsComponent } from '../pages/partners/partner/partner-clients/partner-clients.component';
import { PartnerReportsComponent } from '../pages/partners/partner/partner-reports/partner-reports.component';
import { CompanyComponent } from '../pages/company/company.component';
import { CompanyDetailsComponent } from '../pages/company/company-details/company-details.component';
import { CompanyBillingComponent } from '../pages/company/company-billing/company-billing.component';
import { CompanyCrmComponent } from '../pages/company/company-crm/company-crm.component';
import { CompanyMerchantsComponent } from '../pages/company/company-merchants/company-merchants.component';
import { CompanyProductsComponent } from '../pages/company/company-products/company-products.component';
import { CompanyUsersComponent } from '../pages/company/company-users/company-users.component';
import { CompanyGurusComponent } from '../pages/company/company-gurus/company-gurus.component';
import { CompanyActivityComponent } from '../pages/company/company-activity/company-activity.component';
import { MerchantComponent } from '../pages/merchant/merchant.component';
import { MerchantDetailsComponent } from '../pages/merchant/merchant-details/merchant-details.component';
import { MerchantProductsComponent } from '../pages/merchant/merchant-products/merchant-products.component';
import { MerchantMidAccountsComponent } from '../pages/merchant/merchant-mid-accounts/merchant-mid-accounts.component';
import { MerchantActivityComponent } from '../pages/merchant/merchant-activity/merchant-activity.component';
import { ChargebackComponent } from '../pages/chargeback/chargeback.component';
import { SettingsCargebackParametersComponent } from '../pages/settings/settings-cargeback-parameters/settings-cargeback-parameters.component';
import { SettingsIndustriesComponent } from '../pages/settings/settings-industries/settings-industries.component';
import { SettingsReasonCodesComponent } from '../pages/settings/settings-reason-codes/settings-reason-codes.component';
import { SettingsCrmComponent } from '../pages/settings/settings-crm/settings-crm.component';
import { SettingsPaymentProcessorComponent } from '../pages/settings/settings-payment-processor/settings-payment-processor.component';
import { SettingsPaymentGatewayComponent } from '../pages/settings/settings-payment-gateway/settings-payment-gateway.component';
import { OnboardingComponent } from '../pages/onboarding/onboarding.component';
import { OnboardingDetailsComponent } from '../pages/onboarding/onboarding-details/onboarding-details.component';
import { OnboardingBillingComponent } from '../pages/onboarding/onboarding-billing/onboarding-billing.component';
import { OnboardingCrmComponent } from '../pages/onboarding/onboarding-crm/onboarding-crm.component';
import { OnboardingMerchantsComponent } from '../pages/onboarding/onboarding-merchants/onboarding-merchants.component';
import { OnboardingProductsComponent } from '../pages/onboarding/onboarding-products/onboarding-products.component';
import { OnboardingUsersComponent } from '../pages/onboarding/onboarding-users/onboarding-users.component';
import { OnboardingGurusComponent } from '../pages/onboarding/onboarding-gurus/onboarding-gurus.component';
import { DialogListSearchPipe } from '../dialogs/pipe/dialog-list-search.pipe';
import { OnboardingMerchantComponent } from '../pages/onboarding/onboarding-merchants/onboarding-merchant/onboarding-merchant.component';
import { OnboardingMerchantDetailsComponent } from '../pages/onboarding/onboarding-merchants/onboarding-merchant/onboarding-merchant-details/onboarding-merchant-details.component';
import { OnboardingMerchantProductsComponent } from '../pages/onboarding/onboarding-merchants/onboarding-merchant/onboarding-merchant-products/onboarding-merchant-products.component';
import { OnboardingMerchantMidAccountsComponent } from '../pages/onboarding/onboarding-merchants/onboarding-merchant/onboarding-merchant-mid-accounts/onboarding-merchant-mid-accounts.component';
import { ProductComponent } from '../pages/product/product.component';
import { CheckListItemsComponent } from '../dialogs/check-list-items/check-list-items.component';
import { MidAccountComponent } from '../pages/mid-account/mid-account.component';
import { NewMidAccountComponent } from '../pages/new-mid-account/new-mid-account.component';
import { OnboardingProductInnerComponent } from '../pages/onboarding/onboarding-products/onboarding-product-inner/onboarding-product-inner.component';
import { NewOnboardingProductComponent } from '../pages/onboarding/onboarding-products/new-onboarding-product/new-onboarding-product.component';
import { UploadDialogComponent } from '../dialogs/upload-dialog/upload-dialog.component';
import { HeaderAnimationDirective } from '../directives/header-animation.directive';
import { NewOnboardingMerchantComponent } from '../pages/onboarding/onboarding-merchants/new-onboarding-merchant/new-onboarding-merchant.component';
import { NewOnboardingMerchantDetailsComponent } from '../pages/onboarding/onboarding-merchants/new-onboarding-merchant/new-onboarding-merchant-details/new-onboarding-merchant-details.component';
import { NewOnboardingMerchantProductsComponent } from '../pages/onboarding/onboarding-merchants/new-onboarding-merchant/new-onboarding-merchant-products/new-onboarding-merchant-products.component';
import { NewOnboardingMerchantMidAccountsComponent } from '../pages/onboarding/onboarding-merchants/new-onboarding-merchant/new-onboarding-merchant-mid-accounts/new-onboarding-merchant-mid-accounts.component';
import { TablePositionDirective } from '../directives/table-position.directive';
import { AutosizeDirective } from '../directives/autosize.directive';
import { CompanyDetailsPageComponent } from '../pages/components/company-details-page/company-details-page.component';
import { BillingFormComponent } from '../pages/components/billing-form/billing-form.component';
import { TableSettingsDialogComponent } from '../dialogs/table-settings-dialog/table-settings-dialog.component';
import { CrmFormComponent } from '../pages/components/crm-form/crm-form.component';
import { MerchantDetailsFormComponent } from '../pages/components/merchant-details-form/merchant-details-form.component';
import { TableComponent } from '../pages/components/table/table.component';
import { AlertResolveComponent } from '../pages/alerts/alert-resolve/alert-resolve.component';
import { AlertDuplicateComponent } from '../pages/alerts/alert-duplicate/alert-duplicate.component';
import { AlertDescriptorComponent } from '../pages/alerts/alert-descriptor/alert-descriptor.component';
import { CvvFieldComponent } from '../pages/components/cvv-field/cvv-field.component';
import { UserTitleComponent } from '../pages/components/user-title/user-title.component';
import { NewUserComponent } from '../pages/users/new-user/new-user.component';
import { UserComponent } from '../pages/users/user/user.component';
import { AssignCompanyComponent } from '../dialogs/assign-company/assign-company.component';
import { UserDetailsComponent } from '../pages/users/user/user-details/user-details.component';
import { UserActivityComponent } from '../pages/users/user/user-activity/user-activity.component';
import { MidAccountErrorComponent } from '../pages/mid-account-error/mid-account-error.component';
import { StatusComponent } from '../pages/components/status/status.component';
import { DateRangeComponent } from '../dialogs/date-range/date-range.component';
import { DateRangeFieldComponent } from '../pages/components/date-range-field/date-range-field.component';
import { ConfirmDialogComponent } from '../dialogs/confirm-dialog/confirm-dialog.component';
import { MiniWidgetComponent } from '../pages/components/mini-widget/mini-widget.component';
import { DashboardMenuComponent } from '../pages/components/dashboard-menu/dashboard-menu.component';
import { AddWidgetComponent } from '../dialogs/add-widget/add-widget.component';
import { NotificationsComponent } from '../pages/components/notifications/notifications.component';
import { ChargebackErrorComponent } from '../pages/chargebacks/chargeback-error/chargeback-error.component';
import { CoverLetterComponent } from '../pages/cover-letters/cover-letter/cover-letter.component';
import { NewCoverLetterComponent } from '../pages/cover-letters/new-cover-letter/new-cover-letter.component';
import { ChargebackSummaryComponent } from '../pages/chargebacks/chargeback-summary/chargeback-summary.component';
import { ChargebackDisputeComponent } from '../pages/chargebacks/chargeback-dispute/chargeback-dispute.component';
import { RadioListItemsComponent } from '../dialogs/radio-list-items/radio-list-items.component';
import { SaveDashboardComponent } from '../dialogs/save-dashboard/save-dashboard.component';
import { ManageDashboardComponent } from '../dialogs/manage-dashboard/manage-dashboard.component';
import { WidgetPageComponent } from '../pages/dashboard/widget-page/widget-page.component';
import { NewNoteComponent } from '../dialogs/new-note/new-note.component';
import { NotFoughtDialogComponent } from '../dialogs/not-fought-dialog/not-fought-dialog.component';
import { NotesDialogComponent } from '../dialogs/notes-dialog/notes-dialog.component';
import { ProductTemplateComponent } from '../pages/components/product-template/product-template.component';
import { UserDialogComponent } from '../dialogs/user-dialog/user-dialog.component';
import { GurusComponent } from '../pages/users/gurus/gurus.component';
import { UsersClientsComponent } from '../pages/users/users-clients/users-clients.component';
import { UsersPartnersComponent } from '../pages/users/users-partners/users-partners.component';
import { OnboardingPartnerComponent } from '../pages/partners/onboarding-partner/onboarding-partner.component';
import { OnboardingPartnerDetailsComponent } from '../pages/partners/onboarding-partner/onboarding-partner-details/onboarding-partner-details.component';
import { OnboardingPartnerClientsComponent } from '../pages/partners/onboarding-partner/onboarding-partner-clients/onboarding-partner-clients.component';
import { OnboardingPartnerReportsComponent } from '../pages/partners/onboarding-partner/onboarding-partner-reports/onboarding-partner-reports.component';
import { PartnerActivityComponent } from '../pages/partners/partner/partner-activity/partner-activity.component';
import { BillingClientComponent } from '../pages/billing-client/billing-client.component';
import { BillingSummaryComponent } from '../pages/billing-client/billing-summary/billing-summary.component';
import { BillingHistoryComponent } from '../pages/billing-client/billing-history/billing-history.component';
import { BillingServicesComponent } from '../pages/billing-client/billing-services/billing-services.component';
import { BillingMethodsComponent } from '../pages/billing-client/billing-methods/billing-methods.component';
import { InvoicesComponent } from '../pages/invoices/invoices.component';
import { InvoiceComponent } from '../pages/invoices/invoice/invoice.component';
import { InvoiceSummaryComponent } from '../pages/invoices/invoice/invoice-summary/invoice-summary.component';
import { InvoicePaymentHistoryComponent } from '../pages/invoices/invoice/invoice-payment-history/invoice-payment-history.component';
import { InvoiceServiceComponent } from '../pages/invoices/invoice/invoice-service/invoice-service.component';
import { InvoicePaymentMethodsComponent } from '../pages/invoices/invoice/invoice-payment-methods/invoice-payment-methods.component';
import { NewTicketComponent } from '../pages/tickets/new-ticket/new-ticket.component';
import { AssignUserDialogComponent } from '../dialogs/assign-user-dialog/assign-user-dialog.component';
import { TicketComponent } from '../pages/tickets/ticket/ticket.component';
import { ClientTicketComponent } from '../pages/tickets/client-ticket/client-ticket.component';
import { NewClientTicketComponent } from '../pages/tickets/new-client-ticket/new-client-ticket.component';
import { CompanyReportsComponent } from '../pages/company/company-reports/company-reports.component';
import { RestrictionsComponent } from '../pages/company/restrictions/restrictions.component';
import { PriceQualifierDialogComponent } from '../dialogs/price-qualifier-dialog/price-qualifier-dialog.component';
import { ReasonCodesDialogComponent } from '../dialogs/reason-codes-dialog/reason-codes-dialog.component';
import { SingleTableComponent } from '../pages/components/single-table/single-table.component';
import { MidHealthReportComponent } from '../pages/dashboard/mid-health-report/mid-health-report.component';
import { ProcessorComponent } from '../pages/settings/settings-payment-processor/processor/processor.component';
import { ProcessorDetailsComponent } from '../pages/settings/settings-payment-processor/processor/processor-details/processor-details.component';
import { ProcessorDisputeInfoComponent } from '../pages/settings/settings-payment-processor/processor/processor-dispute-info/processor-dispute-info.component';
import { ProcessorRiskRuleComponent } from '../pages/settings/settings-payment-processor/processor/processor-risk-rule/processor-risk-rule.component';
import { AddFieldDialogComponent } from '../dialogs/add-field-dialog/add-field-dialog.component';
import { AddValuesDialogComponent } from '../dialogs/add-values-dialog/add-values-dialog.component';
import { NewProcessorComponent } from '../pages/settings/settings-payment-processor/new-processor/new-processor.component';
import { NewProcessorDetailsComponent } from '../pages/settings/settings-payment-processor/new-processor/new-processor-details/new-processor-details.component';
import { NewProcessorDisputeInfoComponent } from '../pages/settings/settings-payment-processor/new-processor/new-processor-dispute-info/new-processor-dispute-info.component';
import { NewProcessorRiskRuleComponent } from '../pages/settings/settings-payment-processor/new-processor/new-processor-risk-rule/new-processor-risk-rule.component';
import { PaymentGatewayComponent } from '../pages/settings/settings-payment-gateway/payment-gateway/payment-gateway.component';
import { NewPaymentGatewayComponent } from '../pages/settings/settings-payment-gateway/new-payment-gateway/new-payment-gateway.component';
import { TextFieldDialogComponent } from '../dialogs/text-field-dialog/text-field-dialog.component';
import { LeadSourceComponent } from '../pages/settings/lead-source/lead-source.component';
import { NewReasonCodesComponent } from '../pages/settings/settings-reason-codes/new-reason-codes/new-reason-codes.component';
import { CardCodesDialogComponent } from '../dialogs/card-codes-dialog/card-codes-dialog.component';
import { SelectDialogComponent } from '../dialogs/select-dialog/select-dialog.component';
import { NewSettingsCrmComponent } from '../pages/settings/settings-crm/new-settings-crm/new-settings-crm.component';
import { UserNotificationsComponent } from '../pages/users/user/user-notifications/user-notifications.component';
import { NewUserNotificationComponent } from '../pages/users/new-user-notification/new-user-notification.component';
import { UserNotificationComponent } from '../pages/users/user-notification/user-notification.component';
import { AlertComponent } from '../pages/alerts/alert/alert.component';
import { RestrictionsTemplateComponent } from '../pages/components/restrictions-template/restrictions-template.component';
import { OnboardingRestrictionsComponent } from '../pages/onboarding/onboarding-restrictions/onboarding-restrictions.component';
import { ReportWidgetComponent } from '../pages/dashboard/widget-page/report-widget/report-widget.component';

const DEFAULT_PERFECT_SCROLLBAR_CONFIG: PerfectScrollbarConfigInterface = {};

const MAT_MODULES = [
  MatAutocompleteModule,
  MatButtonModule,
  MatButtonToggleModule,
  MatCardModule,
  MatCheckboxModule,
  MatDialogModule,
  MatInputModule,
  MatListModule,
  MatMenuModule,
  MatNativeDateModule,
  MatRadioModule,
  MatRippleModule,
  MatSelectModule,
  MatSidenavModule,
  MatSliderModule,
  MatSlideToggleModule,
  MatTabsModule,
  MatSnackBarModule
];

@core.NgModule({
  imports: [
    CommonModule,
    RouterModule,
    HttpClientModule,
    AngularSvgIconModule,
    BrowserAnimationsModule,
    CdkTableModule,
    FormsModule,
    ReactiveFormsModule,
    CfDatepickerModule,
    SortablejsModule,
    TextMaskModule,
    MAT_MODULES,
    NgxDatatableModule,
    PerfectScrollbarModule,
    HttpModule
  ],
  declarations: [
    DashboardComponent,
    AlertsComponent,
    ChargebacksComponent,
    ClientsComponent,
    UsersComponent,
    PartnersComponent,
    ActivityComponent,
    BillingComponent,
    CoverLettersComponent,
    TicketsComponent,
    SettingsComponent,
    ProfileComponent,
    CF_COMPONENTS,
    CF_DIRECTIVES,
    LoginComponent,
    ProfileDetailsComponent,
    ProfileActivityComponent,
    PartnerComponent,
    PartnerDetaisComponent,
    PartnerClientsComponent,
    PartnerReportsComponent,
    CompanyComponent,
    CompanyDetailsComponent,
    CompanyBillingComponent,
    CompanyCrmComponent,
    CompanyMerchantsComponent,
    CompanyProductsComponent,
    CompanyUsersComponent,
    CompanyGurusComponent,
    CompanyActivityComponent,
    MerchantComponent,
    MerchantDetailsComponent,
    MerchantProductsComponent,
    MerchantMidAccountsComponent,
    MerchantActivityComponent,
    ChargebackComponent,
    SettingsCargebackParametersComponent,
    SettingsIndustriesComponent,
    SettingsReasonCodesComponent,
    SettingsCrmComponent,
    SettingsPaymentProcessorComponent,
    SettingsPaymentGatewayComponent,
    OnboardingComponent,
    OnboardingDetailsComponent,
    OnboardingBillingComponent,
    OnboardingCrmComponent,
    OnboardingMerchantsComponent,
    OnboardingProductsComponent,
    OnboardingUsersComponent,
    OnboardingGurusComponent,
    DialogListSearchPipe,
    OnboardingMerchantComponent,
    OnboardingMerchantDetailsComponent,
    OnboardingMerchantProductsComponent,
    OnboardingMerchantMidAccountsComponent,
    ProductComponent,
    CheckListItemsComponent,
    MidAccountComponent,
    NewMidAccountComponent,
    OnboardingProductInnerComponent,
    NewOnboardingProductComponent,
    UploadDialogComponent,
    HeaderAnimationDirective,
    NewOnboardingMerchantComponent,
    NewOnboardingMerchantDetailsComponent,
    NewOnboardingMerchantProductsComponent,
    NewOnboardingMerchantMidAccountsComponent,
    TablePositionDirective,
    AutosizeDirective,
    CompanyDetailsPageComponent,
    BillingFormComponent,
    TableSettingsDialogComponent,
    CrmFormComponent,
    MerchantDetailsFormComponent,
    TableComponent,
    AlertResolveComponent,
    AlertDuplicateComponent,
    AlertDescriptorComponent,
    CvvFieldComponent,
    UserTitleComponent,
    NewUserComponent,
    UserComponent,
    AssignCompanyComponent,
    UserDetailsComponent,
    UserActivityComponent,
    MidAccountErrorComponent,
    StatusComponent,
    DateRangeComponent,
    DateRangeFieldComponent,
    ConfirmDialogComponent,
    MiniWidgetComponent,
    DashboardMenuComponent,
    AddWidgetComponent,
    NotificationsComponent,
    ChargebackErrorComponent,
    CoverLetterComponent,
    NewCoverLetterComponent,
    ChargebackSummaryComponent,
    ChargebackDisputeComponent,
    RadioListItemsComponent,
    SaveDashboardComponent,
    ManageDashboardComponent,
    WidgetPageComponent,
    NewNoteComponent,
    NotFoughtDialogComponent,
    NotesDialogComponent,
    ProductTemplateComponent,
    UserDialogComponent,
    GurusComponent,
    UsersClientsComponent,
    UsersPartnersComponent,
    OnboardingPartnerComponent,
    OnboardingPartnerDetailsComponent,
    OnboardingPartnerClientsComponent,
    OnboardingPartnerReportsComponent,
    //OnboardingPartnerTradersComponent,
    PartnerActivityComponent,
    BillingClientComponent,
    BillingSummaryComponent,
    BillingHistoryComponent,
    BillingServicesComponent,
    BillingMethodsComponent,
    InvoicesComponent,
    InvoiceComponent,
    InvoiceSummaryComponent,
    InvoicePaymentHistoryComponent,
    InvoiceServiceComponent,
    InvoicePaymentMethodsComponent,
    NewTicketComponent,
    AssignUserDialogComponent,
    TicketComponent,
    ClientTicketComponent,
    NewClientTicketComponent,
    CompanyReportsComponent,
    RestrictionsComponent,
    PriceQualifierDialogComponent,
    ReasonCodesDialogComponent,
    SingleTableComponent,
    MidHealthReportComponent,
    ProcessorComponent,
    ProcessorDetailsComponent,
    ProcessorDisputeInfoComponent,
    ProcessorRiskRuleComponent,
    AddFieldDialogComponent,
    AddValuesDialogComponent,
    NewProcessorComponent,
    NewProcessorDetailsComponent,
    NewProcessorDisputeInfoComponent,
    NewProcessorRiskRuleComponent,
    PaymentGatewayComponent,
    NewPaymentGatewayComponent,
    TextFieldDialogComponent,
    LeadSourceComponent,
    NewReasonCodesComponent,
    CardCodesDialogComponent,
    SelectDialogComponent,
    NewSettingsCrmComponent,
    UserNotificationsComponent,
    NewUserNotificationComponent,
    UserNotificationComponent,
    AlertComponent,
    RestrictionsTemplateComponent,
    OnboardingRestrictionsComponent,
    ReportWidgetComponent,
    ConfirmationDialogComponent,
    MessageDialogComponent  
  ],
  exports: [
    CfDatepickerModule,
    ReactiveFormsModule,
    HttpModule,
    RouterModule,
    HttpClientModule,
    AngularSvgIconModule,
    BrowserAnimationsModule,
    CdkTableModule,
    FormsModule,
    ReactiveFormsModule,
    CfDatepickerModule,
    SortablejsModule,
    TextMaskModule,
    MAT_MODULES,
    NgxDatatableModule,
    PerfectScrollbarModule,
    HttpModule,
    // ErrorMessagesComponent
  ],
  entryComponents: [
    CheckListItemsComponent,
    UploadDialogComponent,
    TableSettingsDialogComponent,
    AssignCompanyComponent,
    DateRangeComponent,
    ConfirmDialogComponent,
    AddWidgetComponent,
    RadioListItemsComponent,
    SaveDashboardComponent,
    ManageDashboardComponent,
    NewNoteComponent,
    NotFoughtDialogComponent,
    NotesDialogComponent,
    UserDialogComponent,
    AssignUserDialogComponent,
    PriceQualifierDialogComponent,
    ReasonCodesDialogComponent,
    AddFieldDialogComponent,
    AddValuesDialogComponent,
    TextFieldDialogComponent,
    CardCodesDialogComponent,
    SelectDialogComponent,
    ConfirmationDialogComponent,
    MessageDialogComponent
  ]
})
export class SharedModule {
  static forRoot(): core.ModuleWithProviders {
    return {
      ngModule: SharedModule,
      providers: [
        AlertsService,
        AlertReasonService,
        AlertDescriptorService,
        DialogService,
        CanDeactivateGuard,
        ClientUserResolver,
        CompanyService,
        PartnerUserResolver,
        ProfileResolver,
        RoleService,
        UserService,
        { provide: LocationStrategy, useClass: HashLocationStrategy },
        {
          provide: PERFECT_SCROLLBAR_CONFIG,
          useValue: DEFAULT_PERFECT_SCROLLBAR_CONFIG
        }
      ]
    };
  }
}
