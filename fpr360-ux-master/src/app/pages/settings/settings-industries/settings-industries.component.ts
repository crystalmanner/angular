import { Component, OnInit } from '@angular/core';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';

import { AddValuesDialogComponent } from '../../../dialogs/add-values-dialog/add-values-dialog.component';
import { CheckListItemsComponent } from '../../../dialogs/check-list-items/check-list-items.component';
import { TextFieldDialogComponent } from '../../../dialogs/text-field-dialog/text-field-dialog.component';

@Component({
  selector: 'app-settings-industries',
  templateUrl: './settings-industries.component.html',
  styleUrls: ['./settings-industries.component.scss']
})
export class SettingsIndustriesComponent implements OnInit {
  industries = [
    {
      value: 'Healthcare',
      active: true,
      subIndustry: [
        {
          value: 'Cosmetics',
          active: true,
          chargebackFields: [
            {
              name: 'Currency',
              included: true
            },
            {
              name: 'Email Opt Out',
              included: false
            },
            {
              name: 'Country',
              included: false
            },
            {
              name: 'Arrival Date',
              included: true
            },
            {
              name: 'Company',
              included: false
            },
            {
              name: 'Departure Date',
              included: false
            },
            {
              name: 'City',
              included: false
            },
            {
              name: 'Description',
              included: false
            },
            {
              name: 'Favourite Colour',
              included: false
            },
            {
              name: 'Fax Numer',
              included: false
            },
            {
              name: 'Product Line',
              included: false
            },
            {
              name: 'Symptoms',
              included: false
            },
            {
              name: 'Calorie Count',
              included: false
            },
            {
              name: 'Nutrition Value',
              included: false
            }
          ]
        },
        {
          value: 'Skincare',
          active: false,
          chargebackFields: [
            {
              name: 'Currency',
              included: true
            },
            {
              name: 'Email Opt Out',
              included: false
            },
            {
              name: 'Decision Timeframe',
              included: false
            },
            {
              name: 'Country',
              included: false
            },
            {
              name: 'Arrival Date',
              included: true
            },
            {
              name: 'Company',
              included: false
            },
            {
              name: 'Departure Date',
              included: false
            },
            {
              name: 'City',
              included: false
            },
            {
              name: 'Description',
              included: false
            },
            {
              name: 'Favourite Colour',
              included: false
            },
            {
              name: 'Fax Numer',
              included: false
            },
            {
              name: 'Product Line',
              included: false
            },
            {
              name: 'Symptoms',
              included: false
            },
            {
              name: 'Calorie Count',
              included: false
            },
            {
              name: 'Nutrition Value',
              included: false
            }
          ]
        },
        {
          value: 'Oral Care',
          active: false,
          chargebackFields: [
            {
              name: 'Currency',
              included: false
            },
            {
              name: 'Email Opt Out',
              included: false
            },
            {
              name: 'Decision Timeframe',
              included: true
            },
            {
              name: 'Country',
              included: false
            },
            {
              name: 'Arrival Date',
              included: true
            },
            {
              name: 'Company',
              included: false
            },
            {
              name: 'Departure Date',
              included: false
            },
            {
              name: 'City',
              included: false
            },
            {
              name: 'Description',
              included: false
            },
            {
              name: 'Favourite Colour',
              included: false
            },
            {
              name: 'Fax Numer',
              included: false
            },
            {
              name: 'Product Line',
              included: false
            },
            {
              name: 'Symptoms',
              included: false
            },
            {
              name: 'Calorie Count',
              included: false
            },
            {
              name: 'Nutrition Value',
              included: false
            }
          ]
        },
        {
          value: 'Homeopathy',
          active: false,
          chargebackFields: [
            {
              name: 'Currency',
              included: true
            },
            {
              name: 'Email Opt Out',
              included: true
            },
            {
              name: 'Decision Timeframe',
              included: true
            },
            {
              name: 'Country',
              included: false
            },
            {
              name: 'Arrival Date',
              included: true
            },
            {
              name: 'Company',
              included: false
            },
            {
              name: 'Departure Date',
              included: false
            },
            {
              name: 'City',
              included: false
            },
            {
              name: 'Description',
              included: false
            },
            {
              name: 'Favourite Colour',
              included: false
            },
            {
              name: 'Fax Numer',
              included: false
            },
            {
              name: 'Product Line',
              included: false
            },
            {
              name: 'Symptoms',
              included: false
            },
            {
              name: 'Calorie Count',
              included: false
            },
            {
              name: 'Nutrition Value',
              included: false
            }
          ]
        },
        {
          value: 'Hair care',
          active: false,
          chargebackFields: [
            {
              name: 'Currency',
              included: true
            },
            {
              name: 'Email Opt Out',
              included: false
            },
            {
              name: 'Decision Timeframe',
              included: true
            },
            {
              name: 'Country',
              included: true
            },
            {
              name: 'Arrival Date',
              included: true
            },
            {
              name: 'Company',
              included: false
            },
            {
              name: 'Departure Date',
              included: false
            },
            {
              name: 'City',
              included: false
            },
            {
              name: 'Description',
              included: false
            },
            {
              name: 'Favourite Colour',
              included: false
            },
            {
              name: 'Fax Numer',
              included: false
            },
            {
              name: 'Product Line',
              included: false
            },
            {
              name: 'Symptoms',
              included: false
            },
            {
              name: 'Calorie Count',
              included: false
            },
            {
              name: 'Nutrition Value',
              included: false
            }
          ]
        },
        {
          value: 'Fitness',
          active: false,
          chargebackFields: [
            {
              name: 'Currency',
              included: true
            },
            {
              name: 'Email Opt Out',
              included: false
            },
            {
              name: 'Decision Timeframe',
              included: false
            },
            {
              name: 'Country',
              included: false
            },
            {
              name: 'Arrival Date',
              included: true
            },
            {
              name: 'Company',
              included: false
            },
            {
              name: 'Departure Date',
              included: false
            },
            {
              name: 'City',
              included: false
            },
            {
              name: 'Description',
              included: false
            },
            {
              name: 'Favourite Colour',
              included: false
            },
            {
              name: 'Fax Numer',
              included: false
            },
            {
              name: 'Product Line',
              included: false
            },
            {
              name: 'Symptoms',
              included: false
            },
            {
              name: 'Calorie Count',
              included: false
            },
            {
              name: 'Nutrition Value',
              included: false
            }
          ]
        },
        {
          value: 'Nutrition',
          active: false,
          chargebackFields: [
            {
              name: 'Currency',
              included: false
            },
            {
              name: 'Email Opt Out',
              included: false
            },
            {
              name: 'Decision Timeframe',
              included: false
            },
            {
              name: 'Country',
              included: false
            },
            {
              name: 'Arrival Date',
              included: true
            },
            {
              name: 'Company',
              included: false
            },
            {
              name: 'Departure Date',
              included: false
            },
            {
              name: 'City',
              included: false
            },
            {
              name: 'Description',
              included: false
            },
            {
              name: 'Favourite Colour',
              included: false
            },
            {
              name: 'Fax Numer',
              included: false
            },
            {
              name: 'Product Line',
              included: false
            },
            {
              name: 'Symptoms',
              included: false
            },
            {
              name: 'Calorie Count',
              included: false
            },
            {
              name: 'Nutrition Value',
              included: false
            }
          ]
        }
      ]
    },
    {
      value: 'Health & Beauty',
      active: false,
      subIndustry: [
        {
          value: 'Skincare',
          active: false,
          chargebackFields: [
            {
              name: 'Currency',
              included: false
            },
            {
              name: 'Email Opt Out',
              included: false
            },
            {
              name: 'Decision Timeframe',
              included: true
            },
            {
              name: 'Country',
              included: false
            },
            {
              name: 'Arrival Date',
              included: true
            },
            {
              name: 'Company',
              included: false
            },
            {
              name: 'Departure Date',
              included: false
            },
            {
              name: 'City',
              included: true
            },
            {
              name: 'Description',
              included: true
            },
            {
              name: 'Favourite Colour',
              included: false
            },
            {
              name: 'Fax Numer',
              included: false
            },
            {
              name: 'Product Line',
              included: false
            },
            {
              name: 'Symptoms',
              included: false
            },
            {
              name: 'Calorie Count',
              included: false
            },
            {
              name: 'Nutrition Value',
              included: false
            }
          ]
        },
        {
          value: 'Oral Care',
          active: false,
          chargebackFields: [
            {
              name: 'Currency',
              included: true
            },
            {
              name: 'Email Opt Out',
              included: false
            },
            {
              name: 'Decision Timeframe',
              included: true
            },
            {
              name: 'Country',
              included: false
            },
            {
              name: 'Arrival Date',
              included: true
            },
            {
              name: 'Company',
              included: false
            },
            {
              name: 'Departure Date',
              included: false
            },
            {
              name: 'City',
              included: true
            },
            {
              name: 'Description',
              included: true
            },
            {
              name: 'Favourite Colour',
              included: false
            },
            {
              name: 'Fax Numer',
              included: false
            },
            {
              name: 'Product Line',
              included: false
            },
            {
              name: 'Symptoms',
              included: false
            },
            {
              name: 'Calorie Count',
              included: false
            },
            {
              name: 'Nutrition Value',
              included: false
            }
          ]
        },
        {
          value: 'Homeopathy',
          active: false,
          chargebackFields: [
            {
              name: 'Currency',
              included: true
            },
            {
              name: 'Email Opt Out',
              included: true
            },
            {
              name: 'Decision Timeframe',
              included: true
            },
            {
              name: 'Country',
              included: false
            },
            {
              name: 'Arrival Date',
              included: true
            },
            {
              name: 'Company',
              included: false
            },
            {
              name: 'Departure Date',
              included: false
            },
            {
              name: 'City',
              included: true
            },
            {
              name: 'Description',
              included: true
            },
            {
              name: 'Favourite Colour',
              included: false
            },
            {
              name: 'Fax Numer',
              included: false
            },
            {
              name: 'Product Line',
              included: false
            },
            {
              name: 'Symptoms',
              included: false
            },
            {
              name: 'Calorie Count',
              included: false
            },
            {
              name: 'Nutrition Value',
              included: false
            }
          ]
        },
        {
          value: 'Hair care',
          active: false,
          chargebackFields: [
            {
              name: 'Currency',
              included: false
            },
            {
              name: 'Email Opt Out',
              included: false
            },
            {
              name: 'Decision Timeframe',
              included: false
            },
            {
              name: 'Country',
              included: false
            },
            {
              name: 'Arrival Date',
              included: true
            },
            {
              name: 'Company',
              included: false
            },
            {
              name: 'Departure Date',
              included: false
            },
            {
              name: 'City',
              included: true
            },
            {
              name: 'Description',
              included: true
            },
            {
              name: 'Favourite Colour',
              included: false
            },
            {
              name: 'Fax Numer',
              included: false
            },
            {
              name: 'Product Line',
              included: false
            },
            {
              name: 'Symptoms',
              included: false
            },
            {
              name: 'Calorie Count',
              included: false
            },
            {
              name: 'Nutrition Value',
              included: false
            }
          ]
        },
        {
          value: 'Fitness',
          active: false,
          chargebackFields: [
            {
              name: 'Currency',
              included: true
            },
            {
              name: 'Email Opt Out',
              included: true
            },
            {
              name: 'Decision Timeframe',
              included: true
            },
            {
              name: 'Country',
              included: true
            },
            {
              name: 'Arrival Date',
              included: true
            },
            {
              name: 'Company',
              included: false
            },
            {
              name: 'Departure Date',
              included: false
            },
            {
              name: 'City',
              included: true
            },
            {
              name: 'Description',
              included: true
            },
            {
              name: 'Favourite Colour',
              included: false
            },
            {
              name: 'Fax Numer',
              included: false
            },
            {
              name: 'Product Line',
              included: false
            },
            {
              name: 'Symptoms',
              included: false
            },
            {
              name: 'Calorie Count',
              included: false
            },
            {
              name: 'Nutrition Value',
              included: false
            }
          ]
        },
        {
          value: 'Nutrition',
          active: false,
          chargebackFields: [
            {
              name: 'Currency',
              included: true
            },
            {
              name: 'Email Opt Out',
              included: true
            },
            {
              name: 'Decision Timeframe',
              included: true
            },
            {
              name: 'Country',
              included: false
            },
            {
              name: 'Arrival Date',
              included: true
            },
            {
              name: 'Company',
              included: false
            },
            {
              name: 'Departure Date',
              included: false
            },
            {
              name: 'City',
              included: true
            },
            {
              name: 'Description',
              included: true
            },
            {
              name: 'Favourite Colour',
              included: false
            },
            {
              name: 'Fax Numer',
              included: false
            },
            {
              name: 'Product Line',
              included: false
            },
            {
              name: 'Symptoms',
              included: false
            },
            {
              name: 'Calorie Count',
              included: false
            },
            {
              name: 'Nutrition Value',
              included: false
            }
          ]
        }
      ]
    },
    {
      value: 'Automotive',
      active: false,
      subIndustry: [
        {
          value: 'Cosmetics',
          active: false,
          chargebackFields: [
            {
              name: 'Currency',
              included: false
            },
            {
              name: 'Email Opt Out',
              included: false
            },
            {
              name: 'Decision Timeframe',
              included: true
            },
            {
              name: 'Country',
              included: false
            },
            {
              name: 'Arrival Date',
              included: true
            },
            {
              name: 'Company',
              included: false
            },
            {
              name: 'Departure Date',
              included: false
            },
            {
              name: 'City',
              included: false
            },
            {
              name: 'Description',
              included: false
            },
            {
              name: 'Favourite Colour',
              included: false
            },
            {
              name: 'Fax Numer',
              included: false
            },
            {
              name: 'Product Line',
              included: false
            },
            {
              name: 'Symptoms',
              included: true
            },
            {
              name: 'Calorie Count',
              included: false
            },
            {
              name: 'Nutrition Value',
              included: false
            }
          ]
        },
        {
          value: 'Homeopathy',
          active: false,
          chargebackFields: [
            {
              name: 'Currency',
              included: false
            },
            {
              name: 'Email Opt Out',
              included: true
            },
            {
              name: 'Decision Timeframe',
              included: true
            },
            {
              name: 'Country',
              included: false
            },
            {
              name: 'Arrival Date',
              included: true
            },
            {
              name: 'Company',
              included: false
            },
            {
              name: 'Departure Date',
              included: false
            },
            {
              name: 'City',
              included: false
            },
            {
              name: 'Description',
              included: false
            },
            {
              name: 'Favourite Colour',
              included: false
            },
            {
              name: 'Fax Numer',
              included: false
            },
            {
              name: 'Product Line',
              included: false
            },
            {
              name: 'Symptoms',
              included: true
            },
            {
              name: 'Calorie Count',
              included: false
            },
            {
              name: 'Nutrition Value',
              included: false
            }
          ]
        },
        {
          value: 'Hair care',
          active: false,
          chargebackFields: [
            {
              name: 'Currency',
              included: true
            },
            {
              name: 'Email Opt Out',
              included: true
            },
            {
              name: 'Decision Timeframe',
              included: true
            },
            {
              name: 'Country',
              included: false
            },
            {
              name: 'Arrival Date',
              included: true
            },
            {
              name: 'Company',
              included: false
            },
            {
              name: 'Departure Date',
              included: false
            },
            {
              name: 'City',
              included: false
            },
            {
              name: 'Description',
              included: false
            },
            {
              name: 'Favourite Colour',
              included: false
            },
            {
              name: 'Fax Numer',
              included: false
            },
            {
              name: 'Product Line',
              included: false
            },
            {
              name: 'Symptoms',
              included: true
            },
            {
              name: 'Calorie Count',
              included: false
            },
            {
              name: 'Nutrition Value',
              included: false
            }
          ]
        },
        {
          value: 'Fitness',
          active: false,
          chargebackFields: [
            {
              name: 'Currency',
              included: false
            },
            {
              name: 'Email Opt Out',
              included: false
            },
            {
              name: 'Decision Timeframe',
              included: false
            },
            {
              name: 'Country',
              included: false
            },
            {
              name: 'Arrival Date',
              included: true
            },
            {
              name: 'Company',
              included: false
            },
            {
              name: 'Departure Date',
              included: false
            },
            {
              name: 'City',
              included: false
            },
            {
              name: 'Description',
              included: false
            },
            {
              name: 'Favourite Colour',
              included: false
            },
            {
              name: 'Fax Numer',
              included: false
            },
            {
              name: 'Product Line',
              included: false
            },
            {
              name: 'Symptoms',
              included: true
            },
            {
              name: 'Calorie Count',
              included: false
            },
            {
              name: 'Nutrition Value',
              included: false
            }
          ]
        },
        {
          value: 'Nutrition',
          active: false,
          chargebackFields: [
            {
              name: 'Currency',
              included: true
            },
            {
              name: 'Email Opt Out',
              included: true
            },
            {
              name: 'Decision Timeframe',
              included: true
            },
            {
              name: 'Country',
              included: true
            },
            {
              name: 'Arrival Date',
              included: false
            },
            {
              name: 'Company',
              included: false
            },
            {
              name: 'Departure Date',
              included: false
            },
            {
              name: 'City',
              included: false
            },
            {
              name: 'Description',
              included: false
            },
            {
              name: 'Favourite Colour',
              included: false
            },
            {
              name: 'Fax Numer',
              included: false
            },
            {
              name: 'Product Line',
              included: false
            },
            {
              name: 'Symptoms',
              included: true
            },
            {
              name: 'Calorie Count',
              included: false
            },
            {
              name: 'Nutrition Value',
              included: false
            }
          ]
        }
      ]
    },
    {
      value: 'Electrical Power',
      active: false,
      subIndustry: [
        {
          value: 'Cosmetics',
          active: false,
          chargebackFields: [
            {
              name: 'Currency',
              included: true
            },
            {
              name: 'Email Opt Out',
              included: true
            },
            {
              name: 'Decision Timeframe',
              included: true
            },
            {
              name: 'Country',
              included: false
            },
            {
              name: 'Arrival Date',
              included: true
            },
            {
              name: 'Company',
              included: false
            },
            {
              name: 'Departure Date',
              included: false
            },
            {
              name: 'City',
              included: true
            },
            {
              name: 'Description',
              included: false
            },
            {
              name: 'Favourite Colour',
              included: true
            },
            {
              name: 'Fax Numer',
              included: false
            },
            {
              name: 'Product Line',
              included: false
            },
            {
              name: 'Symptoms',
              included: false
            },
            {
              name: 'Calorie Count',
              included: false
            },
            {
              name: 'Nutrition Value',
              included: false
            }
          ]
        },
        {
          value: 'Skincare',
          active: false,
          chargebackFields: [
            {
              name: 'Email Opt Out',
              included: false
            },
            {
              name: 'Decision Timeframe',
              included: true
            },
            {
              name: 'Country',
              included: false
            },
            {
              name: 'Arrival Date',
              included: true
            },
            {
              name: 'Company',
              included: false
            },
            {
              name: 'Departure Date',
              included: false
            },
            {
              name: 'City',
              included: true
            },
            {
              name: 'Description',
              included: false
            },
            {
              name: 'Favourite Colour',
              included: true
            },
            {
              name: 'Fax Numer',
              included: false
            },
            {
              name: 'Product Line',
              included: false
            },
            {
              name: 'Symptoms',
              included: false
            },
            {
              name: 'Calorie Count',
              included: false
            },
            {
              name: 'Nutrition Value',
              included: false
            }
          ]
        },
        {
          value: 'Oral Care',
          active: false,
          chargebackFields: [
            {
              name: 'Currency',
              included: false
            },
            {
              name: 'Email Opt Out',
              included: false
            },
            {
              name: 'Decision Timeframe',
              included: false
            },
            {
              name: 'Country',
              included: false
            },
            {
              name: 'Arrival Date',
              included: true
            },
            {
              name: 'Company',
              included: false
            },
            {
              name: 'Departure Date',
              included: false
            },
            {
              name: 'City',
              included: true
            },
            {
              name: 'Description',
              included: false
            },
            {
              name: 'Favourite Colour',
              included: true
            },
            {
              name: 'Fax Numer',
              included: false
            },
            {
              name: 'Product Line',
              included: false
            },
            {
              name: 'Symptoms',
              included: false
            },
            {
              name: 'Calorie Count',
              included: false
            },
            {
              name: 'Nutrition Value',
              included: false
            }
          ]
        },
        {
          value: 'Nutrition',
          active: false,
          chargebackFields: [
            {
              name: 'Currency',
              included: false
            },
            {
              name: 'Email Opt Out',
              included: true
            },
            {
              name: 'Decision Timeframe',
              included: true
            },
            {
              name: 'Country',
              included: false
            },
            {
              name: 'Arrival Date',
              included: true
            },
            {
              name: 'Company',
              included: false
            },
            {
              name: 'Departure Date',
              included: false
            },
            {
              name: 'City',
              included: true
            },
            {
              name: 'Description',
              included: false
            },
            {
              name: 'Favourite Colour',
              included: true
            },
            {
              name: 'Fax Numer',
              included: false
            },
            {
              name: 'Product Line',
              included: false
            },
            {
              name: 'Symptoms',
              included: false
            },
            {
              name: 'Calorie Count',
              included: false
            },
            {
              name: 'Nutrition Value',
              included: false
            }
          ]
        }
      ]
    },
    {
      value: 'Insurance',
      active: false,
      subIndustry: [
        {
          value: 'Homeopathy',
          active: false,
          chargebackFields: [
            {
              name: 'Currency',
              included: true
            },
            {
              name: 'Email Opt Out',
              included: false
            },
            {
              name: 'Decision Timeframe',
              included: true
            },
            {
              name: 'Country',
              included: true
            },
            {
              name: 'Arrival Date',
              included: false
            },
            {
              name: 'Company',
              included: false
            },
            {
              name: 'Departure Date',
              included: false
            },
            {
              name: 'City',
              included: false
            },
            {
              name: 'Description',
              included: false
            },
            {
              name: 'Favourite Colour',
              included: false
            },
            {
              name: 'Fax Numer',
              included: false
            },
            {
              name: 'Product Line',
              included: false
            },
            {
              name: 'Symptoms',
              included: false
            },
            {
              name: 'Calorie Count',
              included: false
            },
            {
              name: 'Nutrition Value',
              included: false
            }
          ]
        },
        {
          value: 'Hair care',
          active: false,
          chargebackFields: [
            {
              name: 'Currency',
              included: true
            },
            {
              name: 'Email Opt Out',
              included: true
            },
            {
              name: 'Decision Timeframe',
              included: true
            },
            {
              name: 'Country',
              included: false
            },
            {
              name: 'Arrival Date',
              included: true
            },
            {
              name: 'Company',
              included: false
            },
            {
              name: 'Departure Date',
              included: false
            },
            {
              name: 'City',
              included: false
            },
            {
              name: 'Description',
              included: false
            },
            {
              name: 'Favourite Colour',
              included: false
            },
            {
              name: 'Fax Numer',
              included: false
            },
            {
              name: 'Product Line',
              included: false
            },
            {
              name: 'Symptoms',
              included: false
            },
            {
              name: 'Calorie Count',
              included: false
            },
            {
              name: 'Nutrition Value',
              included: false
            }
          ]
        },
        {
          value: 'Fitness',
          active: false,
          chargebackFields: [
            {
              name: 'Currency',
              included: false
            },
            {
              name: 'Email Opt Out',
              included: false
            },
            {
              name: 'Decision Timeframe',
              included: false
            },
            {
              name: 'Country',
              included: false
            },
            {
              name: 'Arrival Date',
              included: false
            },
            {
              name: 'Company',
              included: false
            },
            {
              name: 'Departure Date',
              included: false
            },
            {
              name: 'City',
              included: false
            },
            {
              name: 'Description',
              included: false
            },
            {
              name: 'Favourite Colour',
              included: false
            },
            {
              name: 'Fax Numer',
              included: false
            },
            {
              name: 'Product Line',
              included: false
            },
            {
              name: 'Symptoms',
              included: false
            },
            {
              name: 'Calorie Count',
              included: false
            },
            {
              name: 'Nutrition Value',
              included: false
            }
          ]
        },
        {
          value: 'Nutrition',
          active: false,
          chargebackFields: [
            {
              name: 'Currency',
              included: false
            },
            {
              name: 'Email Opt Out',
              included: true
            },
            {
              name: 'Decision Timeframe',
              included: true
            },
            {
              name: 'Country',
              included: false
            },
            {
              name: 'Arrival Date',
              included: false
            },
            {
              name: 'Company',
              included: false
            },
            {
              name: 'Departure Date',
              included: false
            },
            {
              name: 'City',
              included: false
            },
            {
              name: 'Description',
              included: false
            },
            {
              name: 'Favourite Colour',
              included: false
            },
            {
              name: 'Fax Numer',
              included: false
            },
            {
              name: 'Product Line',
              included: false
            },
            {
              name: 'Symptoms',
              included: false
            },
            {
              name: 'Calorie Count',
              included: false
            },
            {
              name: 'Nutrition Value',
              included: false
            }
          ]
        }
      ]
    },
    {
      value: 'Finance',
      active: false,
      subIndustry: [
        {
          value: 'Cosmetics',
          active: false,
          chargebackFields: [
            {
              name: 'Currency',
              included: true
            },
            {
              name: 'Email Opt Out',
              included: false
            },
            {
              name: 'Decision Timeframe',
              included: false
            },
            {
              name: 'Country',
              included: false
            },
            {
              name: 'Arrival Date',
              included: true
            },
            {
              name: 'Company',
              included: false
            },
            {
              name: 'Departure Date',
              included: false
            },
            {
              name: 'City',
              included: false
            },
            {
              name: 'Description',
              included: false
            },
            {
              name: 'Favourite Colour',
              included: false
            },
            {
              name: 'Fax Numer',
              included: true
            },
            {
              name: 'Product Line',
              included: false
            },
            {
              name: 'Symptoms',
              included: false
            },
            {
              name: 'Calorie Count',
              included: true
            },
            {
              name: 'Nutrition Value',
              included: false
            }
          ]
        },
        {
          value: 'Skincare',
          active: false,
          chargebackFields: [
            {
              name: 'Currency',
              included: true
            },
            {
              name: 'Email Opt Out',
              included: false
            },
            {
              name: 'Decision Timeframe',
              included: true
            },
            {
              name: 'Country',
              included: false
            },
            {
              name: 'Arrival Date',
              included: true
            },
            {
              name: 'Company',
              included: false
            },
            {
              name: 'Departure Date',
              included: false
            },
            {
              name: 'City',
              included: false
            },
            {
              name: 'Description',
              included: false
            },
            {
              name: 'Favourite Colour',
              included: false
            },
            {
              name: 'Fax Numer',
              included: true
            },
            {
              name: 'Product Line',
              included: false
            },
            {
              name: 'Symptoms',
              included: false
            },
            {
              name: 'Calorie Count',
              included: true
            },
            {
              name: 'Nutrition Value',
              included: false
            }
          ]
        },
        {
          value: 'Oral Care',
          active: false,
          chargebackFields: [
            {
              name: 'Currency',
              included: true
            },
            {
              name: 'Email Opt Out',
              included: true
            },
            {
              name: 'Decision Timeframe',
              included: true
            },
            {
              name: 'Country',
              included: false
            },
            {
              name: 'Arrival Date',
              included: true
            },
            {
              name: 'Company',
              included: false
            },
            {
              name: 'Departure Date',
              included: false
            },
            {
              name: 'City',
              included: false
            },
            {
              name: 'Description',
              included: false
            },
            {
              name: 'Favourite Colour',
              included: false
            },
            {
              name: 'Fax Numer',
              included: true
            },
            {
              name: 'Product Line',
              included: false
            },
            {
              name: 'Symptoms',
              included: false
            },
            {
              name: 'Calorie Count',
              included: true
            },
            {
              name: 'Nutrition Value',
              included: false
            }
          ]
        },
        {
          value: 'Homeopathy',
          active: false,
          chargebackFields: [
            {
              name: 'Currency',
              included: false
            },
            {
              name: 'Email Opt Out',
              included: false
            },
            {
              name: 'Decision Timeframe',
              included: false
            },
            {
              name: 'Country',
              included: false
            },
            {
              name: 'Arrival Date',
              included: true
            },
            {
              name: 'Company',
              included: false
            },
            {
              name: 'Departure Date',
              included: false
            },
            {
              name: 'City',
              included: false
            },
            {
              name: 'Description',
              included: false
            },
            {
              name: 'Favourite Colour',
              included: false
            },
            {
              name: 'Fax Numer',
              included: true
            },
            {
              name: 'Product Line',
              included: false
            },
            {
              name: 'Symptoms',
              included: false
            },
            {
              name: 'Calorie Count',
              included: true
            },
            {
              name: 'Nutrition Value',
              included: false
            }
          ]
        },
        {
          value: 'Hair care',
          active: false,
          chargebackFields: [
            {
              name: 'Currency',
              included: true
            },
            {
              name: 'Email Opt Out',
              included: true
            },
            {
              name: 'Decision Timeframe',
              included: true
            },
            {
              name: 'Country',
              included: true
            },
            {
              name: 'Arrival Date',
              included: true
            },
            {
              name: 'Company',
              included: false
            },
            {
              name: 'Departure Date',
              included: false
            },
            {
              name: 'City',
              included: false
            },
            {
              name: 'Description',
              included: false
            },
            {
              name: 'Favourite Colour',
              included: false
            },
            {
              name: 'Fax Numer',
              included: true
            },
            {
              name: 'Product Line',
              included: false
            },
            {
              name: 'Symptoms',
              included: false
            },
            {
              name: 'Calorie Count',
              included: true
            },
            {
              name: 'Nutrition Value',
              included: false
            }
          ]
        },
        {
          value: 'Fitness',
          active: false,
          chargebackFields: [
            {
              name: 'Currency',
              included: true
            },
            {
              name: 'Email Opt Out',
              included: true
            },
            {
              name: 'Decision Timeframe',
              included: false
            },
            {
              name: 'Country',
              included: true
            },
            {
              name: 'Arrival Date',
              included: true
            },
            {
              name: 'Company',
              included: false
            },
            {
              name: 'Departure Date',
              included: false
            },
            {
              name: 'City',
              included: false
            },
            {
              name: 'Description',
              included: false
            },
            {
              name: 'Favourite Colour',
              included: false
            },
            {
              name: 'Fax Numer',
              included: true
            },
            {
              name: 'Product Line',
              included: false
            },
            {
              name: 'Symptoms',
              included: false
            },
            {
              name: 'Calorie Count',
              included: true
            },
            {
              name: 'Nutrition Value',
              included: false
            }
          ]
        },
        {
          value: 'Nutrition',
          active: false,
          chargebackFields: [
            {
              name: 'Currency',
              included: false
            },
            {
              name: 'Email Opt Out',
              included: false
            },
            {
              name: 'Decision Timeframe',
              included: false
            },
            {
              name: 'Country',
              included: false
            },
            {
              name: 'Arrival Date',
              included: false
            },
            {
              name: 'Company',
              included: true
            },
            {
              name: 'Departure Date',
              included: false
            },
            {
              name: 'City',
              included: false
            },
            {
              name: 'Description',
              included: false
            },
            {
              name: 'Favourite Colour',
              included: false
            },
            {
              name: 'Fax Numer',
              included: true
            },
            {
              name: 'Product Line',
              included: false
            },
            {
              name: 'Symptoms',
              included: false
            },
            {
              name: 'Calorie Count',
              included: true
            },
            {
              name: 'Nutrition Value',
              included: false
            }
          ]
        }
      ]
    },
    {
      value: 'Broadcasting',
      active: false,
      subIndustry: [
        {
          value: 'Cosmetics',
          active: false,
          chargebackFields: [
            {
              name: 'Currency',
              included: true
            },
            {
              name: 'Email Opt Out',
              included: false
            },
            {
              name: 'Decision Timeframe',
              included: true
            },
            {
              name: 'Country',
              included: false
            },
            {
              name: 'Arrival Date',
              included: true
            },
            {
              name: 'Company',
              included: false
            },
            {
              name: 'Departure Date',
              included: true
            },
            {
              name: 'City',
              included: false
            },
            {
              name: 'Description',
              included: false
            },
            {
              name: 'Favourite Colour',
              included: false
            },
            {
              name: 'Fax Numer',
              included: false
            },
            {
              name: 'Product Line',
              included: false
            },
            {
              name: 'Symptoms',
              included: false
            },
            {
              name: 'Calorie Count',
              included: false
            },
            {
              name: 'Nutrition Value',
              included: false
            }
          ]
        },
        {
          value: 'Skincare',
          active: false,
          chargebackFields: [
            {
              name: 'Currency',
              included: true
            },
            {
              name: 'Email Opt Out',
              included: false
            },
            {
              name: 'Decision Timeframe',
              included: true
            },
            {
              name: 'Country',
              included: false
            },
            {
              name: 'Arrival Date',
              included: true
            },
            {
              name: 'Company',
              included: false
            },
            {
              name: 'Departure Date',
              included: true
            },
            {
              name: 'City',
              included: false
            },
            {
              name: 'Description',
              included: false
            },
            {
              name: 'Favourite Colour',
              included: false
            },
            {
              name: 'Fax Numer',
              included: false
            },
            {
              name: 'Product Line',
              included: false
            },
            {
              name: 'Symptoms',
              included: false
            },
            {
              name: 'Calorie Count',
              included: false
            },
            {
              name: 'Nutrition Value',
              included: false
            }
          ]
        },
        {
          value: 'Oral Care',
          active: false,
          chargebackFields: [
            {
              name: 'Currency',
              included: true
            },
            {
              name: 'Email Opt Out',
              included: false
            },
            {
              name: 'Decision Timeframe',
              included: true
            },
            {
              name: 'Country',
              included: false
            },
            {
              name: 'Arrival Date',
              included: true
            },
            {
              name: 'Company',
              included: false
            },
            {
              name: 'Departure Date',
              included: true
            },
            {
              name: 'City',
              included: false
            },
            {
              name: 'Description',
              included: false
            },
            {
              name: 'Favourite Colour',
              included: false
            },
            {
              name: 'Fax Numer',
              included: false
            },
            {
              name: 'Product Line',
              included: false
            },
            {
              name: 'Symptoms',
              included: false
            },
            {
              name: 'Calorie Count',
              included: false
            },
            {
              name: 'Nutrition Value',
              included: false
            }
          ]
        },
        {
          value: 'Homeopathy',
          active: false,
          chargebackFields: [
            {
              name: 'Currency',
              included: true
            },
            {
              name: 'Email Opt Out',
              included: false
            },
            {
              name: 'Decision Timeframe',
              included: true
            },
            {
              name: 'Country',
              included: false
            },
            {
              name: 'Arrival Date',
              included: true
            },
            {
              name: 'Company',
              included: false
            },
            {
              name: 'Departure Date',
              included: true
            },
            {
              name: 'City',
              included: false
            },
            {
              name: 'Description',
              included: false
            },
            {
              name: 'Favourite Colour',
              included: false
            },
            {
              name: 'Fax Numer',
              included: false
            },
            {
              name: 'Product Line',
              included: false
            },
            {
              name: 'Symptoms',
              included: false
            },
            {
              name: 'Calorie Count',
              included: false
            },
            {
              name: 'Nutrition Value',
              included: false
            }
          ]
        },
        {
          value: 'Hair care',
          active: false,
          chargebackFields: [
            {
              name: 'Currency',
              included: true
            },
            {
              name: 'Email Opt Out',
              included: false
            },
            {
              name: 'Decision Timeframe',
              included: true
            },
            {
              name: 'Country',
              included: false
            },
            {
              name: 'Arrival Date',
              included: true
            },
            {
              name: 'Company',
              included: false
            },
            {
              name: 'Departure Date',
              included: true
            },
            {
              name: 'City',
              included: false
            },
            {
              name: 'Description',
              included: false
            },
            {
              name: 'Favourite Colour',
              included: false
            },
            {
              name: 'Fax Numer',
              included: false
            },
            {
              name: 'Product Line',
              included: false
            },
            {
              name: 'Symptoms',
              included: false
            },
            {
              name: 'Calorie Count',
              included: false
            },
            {
              name: 'Nutrition Value',
              included: false
            }
          ]
        },
        {
          value: 'Fitness',
          active: false,
          chargebackFields: [
            {
              name: 'Currency',
              included: true
            },
            {
              name: 'Email Opt Out',
              included: false
            },
            {
              name: 'Decision Timeframe',
              included: true
            },
            {
              name: 'Country',
              included: false
            },
            {
              name: 'Arrival Date',
              included: true
            },
            {
              name: 'Company',
              included: false
            },
            {
              name: 'Departure Date',
              included: true
            },
            {
              name: 'City',
              included: false
            },
            {
              name: 'Description',
              included: false
            },
            {
              name: 'Favourite Colour',
              included: false
            },
            {
              name: 'Fax Numer',
              included: false
            },
            {
              name: 'Product Line',
              included: false
            },
            {
              name: 'Symptoms',
              included: false
            },
            {
              name: 'Calorie Count',
              included: false
            },
            {
              name: 'Nutrition Value',
              included: false
            }
          ]
        },
        {
          value: 'Nutrition',
          active: false,
          chargebackFields: [
            {
              name: 'Currency',
              included: true
            },
            {
              name: 'Email Opt Out',
              included: false
            },
            {
              name: 'Decision Timeframe',
              included: true
            },
            {
              name: 'Country',
              included: false
            },
            {
              name: 'Arrival Date',
              included: true
            },
            {
              name: 'Company',
              included: false
            },
            {
              name: 'Departure Date',
              included: true
            },
            {
              name: 'City',
              included: false
            },
            {
              name: 'Description',
              included: false
            },
            {
              name: 'Favourite Colour',
              included: false
            },
            {
              name: 'Fax Numer',
              included: false
            },
            {
              name: 'Product Line',
              included: false
            },
            {
              name: 'Symptoms',
              included: false
            },
            {
              name: 'Calorie Count',
              included: false
            },
            {
              name: 'Nutrition Value',
              included: false
            }
          ]
        }
      ]
    },
    {
      value: 'Education',
      active: false,
      subIndustry: [
        {
          value: 'Cosmetics',
          active: false,
          chargebackFields: [
            {
              name: 'Currency',
              included: true
            },
            {
              name: 'Email Opt Out',
              included: false
            },
            {
              name: 'Decision Timeframe',
              included: true
            },
            {
              name: 'Country',
              included: false
            },
            {
              name: 'Arrival Date',
              included: true
            },
            {
              name: 'Company',
              included: false
            },
            {
              name: 'Departure Date',
              included: false
            },
            {
              name: 'City',
              included: false
            },
            {
              name: 'Description',
              included: false
            },
            {
              name: 'Favourite Colour',
              included: true
            },
            {
              name: 'Fax Numer',
              included: false
            },
            {
              name: 'Product Line',
              included: false
            },
            {
              name: 'Symptoms',
              included: false
            },
            {
              name: 'Calorie Count',
              included: false
            },
            {
              name: 'Nutrition Value',
              included: false
            }
          ]
        },
        {
          value: 'Skincare',
          active: false,
          chargebackFields: [
            {
              name: 'Currency',
              included: true
            },
            {
              name: 'Email Opt Out',
              included: false
            },
            {
              name: 'Decision Timeframe',
              included: true
            },
            {
              name: 'Country',
              included: false
            },
            {
              name: 'Arrival Date',
              included: true
            },
            {
              name: 'Company',
              included: false
            },
            {
              name: 'Departure Date',
              included: false
            },
            {
              name: 'City',
              included: false
            },
            {
              name: 'Description',
              included: false
            },
            {
              name: 'Favourite Colour',
              included: true
            },
            {
              name: 'Fax Numer',
              included: false
            },
            {
              name: 'Product Line',
              included: false
            },
            {
              name: 'Symptoms',
              included: false
            },
            {
              name: 'Calorie Count',
              included: false
            },
            {
              name: 'Nutrition Value',
              included: false
            }
          ]
        },
        {
          value: 'Oral Care',
          active: false,
          chargebackFields: [
            {
              name: 'Currency',
              included: true
            },
            {
              name: 'Email Opt Out',
              included: false
            },
            {
              name: 'Decision Timeframe',
              included: true
            },
            {
              name: 'Country',
              included: false
            },
            {
              name: 'Arrival Date',
              included: true
            },
            {
              name: 'Company',
              included: false
            },
            {
              name: 'Departure Date',
              included: false
            },
            {
              name: 'City',
              included: false
            },
            {
              name: 'Description',
              included: false
            },
            {
              name: 'Favourite Colour',
              included: true
            },
            {
              name: 'Fax Numer',
              included: false
            },
            {
              name: 'Product Line',
              included: false
            },
            {
              name: 'Symptoms',
              included: false
            },
            {
              name: 'Calorie Count',
              included: false
            },
            {
              name: 'Nutrition Value',
              included: false
            }
          ]
        },
        {
          value: 'Homeopathy',
          active: false,
          chargebackFields: [
            {
              name: 'Currency',
              included: true
            },
            {
              name: 'Email Opt Out',
              included: false
            },
            {
              name: 'Decision Timeframe',
              included: true
            },
            {
              name: 'Country',
              included: false
            },
            {
              name: 'Arrival Date',
              included: true
            },
            {
              name: 'Company',
              included: false
            },
            {
              name: 'Departure Date',
              included: false
            },
            {
              name: 'City',
              included: false
            },
            {
              name: 'Description',
              included: false
            },
            {
              name: 'Favourite Colour',
              included: true
            },
            {
              name: 'Fax Numer',
              included: false
            },
            {
              name: 'Product Line',
              included: false
            },
            {
              name: 'Symptoms',
              included: false
            },
            {
              name: 'Calorie Count',
              included: false
            },
            {
              name: 'Nutrition Value',
              included: false
            }
          ]
        },
        {
          value: 'Hair care',
          active: false,
          chargebackFields: [
            {
              name: 'Currency',
              included: true
            },
            {
              name: 'Email Opt Out',
              included: false
            },
            {
              name: 'Decision Timeframe',
              included: true
            },
            {
              name: 'Country',
              included: false
            },
            {
              name: 'Arrival Date',
              included: true
            },
            {
              name: 'Company',
              included: false
            },
            {
              name: 'Departure Date',
              included: false
            },
            {
              name: 'City',
              included: false
            },
            {
              name: 'Description',
              included: false
            },
            {
              name: 'Favourite Colour',
              included: true
            },
            {
              name: 'Fax Numer',
              included: false
            },
            {
              name: 'Product Line',
              included: false
            },
            {
              name: 'Symptoms',
              included: false
            },
            {
              name: 'Calorie Count',
              included: false
            },
            {
              name: 'Nutrition Value',
              included: false
            }
          ]
        },
        {
          value: 'Fitness',
          active: false,
          chargebackFields: [
            {
              name: 'Currency',
              included: true
            },
            {
              name: 'Email Opt Out',
              included: false
            },
            {
              name: 'Decision Timeframe',
              included: true
            },
            {
              name: 'Country',
              included: false
            },
            {
              name: 'Arrival Date',
              included: true
            },
            {
              name: 'Company',
              included: false
            },
            {
              name: 'Departure Date',
              included: false
            },
            {
              name: 'City',
              included: false
            },
            {
              name: 'Description',
              included: false
            },
            {
              name: 'Favourite Colour',
              included: true
            },
            {
              name: 'Fax Numer',
              included: false
            },
            {
              name: 'Product Line',
              included: false
            },
            {
              name: 'Symptoms',
              included: false
            },
            {
              name: 'Calorie Count',
              included: false
            },
            {
              name: 'Nutrition Value',
              included: false
            }
          ]
        },
        {
          value: 'Nutrition',
          active: false,
          chargebackFields: [
            {
              name: 'Currency',
              included: true
            },
            {
              name: 'Email Opt Out',
              included: false
            },
            {
              name: 'Decision Timeframe',
              included: true
            },
            {
              name: 'Country',
              included: false
            },
            {
              name: 'Arrival Date',
              included: true
            },
            {
              name: 'Company',
              included: false
            },
            {
              name: 'Departure Date',
              included: false
            },
            {
              name: 'City',
              included: false
            },
            {
              name: 'Description',
              included: false
            },
            {
              name: 'Favourite Colour',
              included: true
            },
            {
              name: 'Fax Numer',
              included: false
            },
            {
              name: 'Product Line',
              included: false
            },
            {
              name: 'Symptoms',
              included: false
            },
            {
              name: 'Calorie Count',
              included: false
            },
            {
              name: 'Nutrition Value',
              included: false
            }
          ]
        }
      ]
    },
    {
      value: 'Internet',
      active: false,
      subIndustry: [
        {
          value: 'Cosmetics',
          active: false,
          chargebackFields: [
            {
              name: 'Currency',
              included: true
            },
            {
              name: 'Email Opt Out',
              included: false
            },
            {
              name: 'Decision Timeframe',
              included: true
            },
            {
              name: 'Country',
              included: false
            },
            {
              name: 'Arrival Date',
              included: true
            },
            {
              name: 'Company',
              included: false
            },
            {
              name: 'Departure Date',
              included: true
            },
            {
              name: 'City',
              included: false
            },
            {
              name: 'Description',
              included: true
            },
            {
              name: 'Favourite Colour',
              included: false
            },
            {
              name: 'Fax Numer',
              included: false
            },
            {
              name: 'Product Line',
              included: true
            },
            {
              name: 'Symptoms',
              included: false
            },
            {
              name: 'Calorie Count',
              included: false
            },
            {
              name: 'Nutrition Value',
              included: false
            }
          ]
        },
        {
          value: 'Skincare',
          active: false,
          chargebackFields: [
            {
              name: 'Currency',
              included: true
            },
            {
              name: 'Email Opt Out',
              included: false
            },
            {
              name: 'Decision Timeframe',
              included: true
            },
            {
              name: 'Country',
              included: false
            },
            {
              name: 'Arrival Date',
              included: true
            },
            {
              name: 'Company',
              included: false
            },
            {
              name: 'Departure Date',
              included: true
            },
            {
              name: 'City',
              included: false
            },
            {
              name: 'Description',
              included: true
            },
            {
              name: 'Favourite Colour',
              included: false
            },
            {
              name: 'Fax Numer',
              included: false
            },
            {
              name: 'Product Line',
              included: true
            },
            {
              name: 'Symptoms',
              included: false
            },
            {
              name: 'Calorie Count',
              included: false
            },
            {
              name: 'Nutrition Value',
              included: false
            }
          ]
        },
        {
          value: 'Oral Care',
          active: false,
          chargebackFields: [
            {
              name: 'Currency',
              included: true
            },
            {
              name: 'Email Opt Out',
              included: false
            },
            {
              name: 'Decision Timeframe',
              included: true
            },
            {
              name: 'Country',
              included: false
            },
            {
              name: 'Arrival Date',
              included: true
            },
            {
              name: 'Company',
              included: false
            },
            {
              name: 'Departure Date',
              included: true
            },
            {
              name: 'City',
              included: false
            },
            {
              name: 'Description',
              included: true
            },
            {
              name: 'Favourite Colour',
              included: false
            },
            {
              name: 'Fax Numer',
              included: false
            },
            {
              name: 'Product Line',
              included: true
            },
            {
              name: 'Symptoms',
              included: false
            },
            {
              name: 'Calorie Count',
              included: false
            },
            {
              name: 'Nutrition Value',
              included: false
            }
          ]
        },
        {
          value: 'Homeopathy',
          active: false,
          chargebackFields: [
            {
              name: 'Currency',
              included: true
            },
            {
              name: 'Email Opt Out',
              included: false
            },
            {
              name: 'Decision Timeframe',
              included: true
            },
            {
              name: 'Country',
              included: false
            },
            {
              name: 'Arrival Date',
              included: true
            },
            {
              name: 'Company',
              included: false
            },
            {
              name: 'Departure Date',
              included: true
            },
            {
              name: 'City',
              included: false
            },
            {
              name: 'Description',
              included: true
            },
            {
              name: 'Favourite Colour',
              included: false
            },
            {
              name: 'Fax Numer',
              included: false
            },
            {
              name: 'Product Line',
              included: true
            },
            {
              name: 'Symptoms',
              included: false
            },
            {
              name: 'Calorie Count',
              included: false
            },
            {
              name: 'Nutrition Value',
              included: false
            }
          ]
        },
        {
          value: 'Hair care',
          active: false,
          chargebackFields: [
            {
              name: 'Currency',
              included: true
            },
            {
              name: 'Email Opt Out',
              included: false
            },
            {
              name: 'Decision Timeframe',
              included: true
            },
            {
              name: 'Country',
              included: false
            },
            {
              name: 'Arrival Date',
              included: true
            },
            {
              name: 'Company',
              included: false
            },
            {
              name: 'Departure Date',
              included: true
            },
            {
              name: 'City',
              included: false
            },
            {
              name: 'Description',
              included: true
            },
            {
              name: 'Favourite Colour',
              included: false
            },
            {
              name: 'Fax Numer',
              included: false
            },
            {
              name: 'Product Line',
              included: true
            },
            {
              name: 'Symptoms',
              included: false
            },
            {
              name: 'Calorie Count',
              included: false
            },
            {
              name: 'Nutrition Value',
              included: false
            }
          ]
        },
        {
          value: 'Fitness',
          active: false,
          chargebackFields: [
            {
              name: 'Currency',
              included: true
            },
            {
              name: 'Email Opt Out',
              included: false
            },
            {
              name: 'Decision Timeframe',
              included: true
            },
            {
              name: 'Country',
              included: false
            },
            {
              name: 'Arrival Date',
              included: true
            },
            {
              name: 'Company',
              included: false
            },
            {
              name: 'Departure Date',
              included: true
            },
            {
              name: 'City',
              included: false
            },
            {
              name: 'Description',
              included: true
            },
            {
              name: 'Favourite Colour',
              included: false
            },
            {
              name: 'Fax Numer',
              included: false
            },
            {
              name: 'Product Line',
              included: true
            },
            {
              name: 'Symptoms',
              included: false
            },
            {
              name: 'Calorie Count',
              included: false
            },
            {
              name: 'Nutrition Value',
              included: false
            }
          ]
        },
        {
          value: 'Nutrition',
          active: false,
          chargebackFields: [
            {
              name: 'Currency',
              included: true
            },
            {
              name: 'Email Opt Out',
              included: false
            },
            {
              name: 'Decision Timeframe',
              included: true
            },
            {
              name: 'Country',
              included: false
            },
            {
              name: 'Arrival Date',
              included: true
            },
            {
              name: 'Company',
              included: false
            },
            {
              name: 'Departure Date',
              included: true
            },
            {
              name: 'City',
              included: false
            },
            {
              name: 'Description',
              included: true
            },
            {
              name: 'Favourite Colour',
              included: false
            },
            {
              name: 'Fax Numer',
              included: false
            },
            {
              name: 'Product Line',
              included: true
            },
            {
              name: 'Symptoms',
              included: false
            },
            {
              name: 'Calorie Count',
              included: false
            },
            {
              name: 'Nutrition Value',
              included: false
            }
          ]
        }
      ]
    },
    {
      value: 'Hospitality',
      active: false,
      subIndustry: [
        {
          value: 'Cosmetics',
          active: false,
          chargebackFields: [
            {
              name: 'Currency',
              included: true
            },
            {
              name: 'Email Opt Out',
              included: false
            },
            {
              name: 'Decision Timeframe',
              included: true
            },
            {
              name: 'Country',
              included: false
            },
            {
              name: 'Arrival Date',
              included: true
            },
            {
              name: 'Company',
              included: false
            },
            {
              name: 'Departure Date',
              included: true
            },
            {
              name: 'City',
              included: false
            },
            {
              name: 'Description',
              included: false
            },
            {
              name: 'Favourite Colour',
              included: true
            },
            {
              name: 'Fax Numer',
              included: false
            },
            {
              name: 'Product Line',
              included: true
            },
            {
              name: 'Symptoms',
              included: false
            },
            {
              name: 'Calorie Count',
              included: false
            },
            {
              name: 'Nutrition Value',
              included: false
            }
          ]
        },
        {
          value: 'Skincare',
          active: false,
          chargebackFields: [
            {
              name: 'Currency',
              included: true
            },
            {
              name: 'Email Opt Out',
              included: false
            },
            {
              name: 'Decision Timeframe',
              included: true
            },
            {
              name: 'Country',
              included: false
            },
            {
              name: 'Arrival Date',
              included: true
            },
            {
              name: 'Company',
              included: false
            },
            {
              name: 'Departure Date',
              included: true
            },
            {
              name: 'City',
              included: false
            },
            {
              name: 'Description',
              included: false
            },
            {
              name: 'Favourite Colour',
              included: true
            },
            {
              name: 'Fax Numer',
              included: false
            },
            {
              name: 'Product Line',
              included: true
            },
            {
              name: 'Symptoms',
              included: false
            },
            {
              name: 'Calorie Count',
              included: false
            },
            {
              name: 'Nutrition Value',
              included: false
            }
          ]
        },
        {
          value: 'Oral Care',
          active: false,
          chargebackFields: [
            {
              name: 'Currency',
              included: true
            },
            {
              name: 'Email Opt Out',
              included: false
            },
            {
              name: 'Decision Timeframe',
              included: true
            },
            {
              name: 'Country',
              included: false
            },
            {
              name: 'Arrival Date',
              included: true
            },
            {
              name: 'Company',
              included: false
            },
            {
              name: 'Departure Date',
              included: true
            },
            {
              name: 'City',
              included: false
            },
            {
              name: 'Description',
              included: false
            },
            {
              name: 'Favourite Colour',
              included: true
            },
            {
              name: 'Fax Numer',
              included: false
            },
            {
              name: 'Product Line',
              included: true
            },
            {
              name: 'Symptoms',
              included: false
            },
            {
              name: 'Calorie Count',
              included: false
            },
            {
              name: 'Nutrition Value',
              included: false
            }
          ]
        },
        {
          value: 'Homeopathy',
          active: false,
          chargebackFields: [
            {
              name: 'Currency',
              included: true
            },
            {
              name: 'Email Opt Out',
              included: false
            },
            {
              name: 'Decision Timeframe',
              included: true
            },
            {
              name: 'Country',
              included: false
            },
            {
              name: 'Arrival Date',
              included: true
            },
            {
              name: 'Company',
              included: false
            },
            {
              name: 'Departure Date',
              included: true
            },
            {
              name: 'City',
              included: false
            },
            {
              name: 'Description',
              included: false
            },
            {
              name: 'Favourite Colour',
              included: true
            },
            {
              name: 'Fax Numer',
              included: false
            },
            {
              name: 'Product Line',
              included: true
            },
            {
              name: 'Symptoms',
              included: false
            },
            {
              name: 'Calorie Count',
              included: false
            },
            {
              name: 'Nutrition Value',
              included: false
            }
          ]
        },
        {
          value: 'Hair care',
          active: false,
          chargebackFields: [
            {
              name: 'Currency',
              included: true
            },
            {
              name: 'Email Opt Out',
              included: false
            },
            {
              name: 'Decision Timeframe',
              included: true
            },
            {
              name: 'Country',
              included: false
            },
            {
              name: 'Arrival Date',
              included: true
            },
            {
              name: 'Company',
              included: false
            },
            {
              name: 'Departure Date',
              included: true
            },
            {
              name: 'City',
              included: false
            },
            {
              name: 'Description',
              included: false
            },
            {
              name: 'Favourite Colour',
              included: true
            },
            {
              name: 'Fax Numer',
              included: false
            },
            {
              name: 'Product Line',
              included: true
            },
            {
              name: 'Symptoms',
              included: false
            },
            {
              name: 'Calorie Count',
              included: false
            },
            {
              name: 'Nutrition Value',
              included: false
            }
          ]
        },
        {
          value: 'Fitness',
          active: false,
          chargebackFields: [
            {
              name: 'Currency',
              included: true
            },
            {
              name: 'Email Opt Out',
              included: false
            },
            {
              name: 'Decision Timeframe',
              included: true
            },
            {
              name: 'Country',
              included: false
            },
            {
              name: 'Arrival Date',
              included: true
            },
            {
              name: 'Company',
              included: false
            },
            {
              name: 'Departure Date',
              included: true
            },
            {
              name: 'City',
              included: false
            },
            {
              name: 'Description',
              included: false
            },
            {
              name: 'Favourite Colour',
              included: true
            },
            {
              name: 'Fax Numer',
              included: false
            },
            {
              name: 'Product Line',
              included: true
            },
            {
              name: 'Symptoms',
              included: false
            },
            {
              name: 'Calorie Count',
              included: false
            },
            {
              name: 'Nutrition Value',
              included: false
            }
          ]
        },
        {
          value: 'Nutrition',
          active: false,
          chargebackFields: [
            {
              name: 'Currency',
              included: true
            },
            {
              name: 'Email Opt Out',
              included: false
            },
            {
              name: 'Decision Timeframe',
              included: true
            },
            {
              name: 'Country',
              included: false
            },
            {
              name: 'Arrival Date',
              included: true
            },
            {
              name: 'Company',
              included: false
            },
            {
              name: 'Departure Date',
              included: true
            },
            {
              name: 'City',
              included: false
            },
            {
              name: 'Description',
              included: false
            },
            {
              name: 'Favourite Colour',
              included: true
            },
            {
              name: 'Fax Numer',
              included: false
            },
            {
              name: 'Product Line',
              included: true
            },
            {
              name: 'Symptoms',
              included: false
            },
            {
              name: 'Calorie Count',
              included: false
            },
            {
              name: 'Nutrition Value',
              included: false
            }
          ]
        }
      ]
    },
    {
      value: 'Music',
      active: false,
      subIndustry: [
        {
          value: 'Cosmetics',
          active: false,
          chargebackFields: [
            {
              name: 'Currency',
              included: true
            },
            {
              name: 'Email Opt Out',
              included: false
            },
            {
              name: 'Decision Timeframe',
              included: true
            },
            {
              name: 'Country',
              included: false
            },
            {
              name: 'Arrival Date',
              included: true
            },
            {
              name: 'Company',
              included: false
            },
            {
              name: 'Departure Date',
              included: false
            },
            {
              name: 'City',
              included: false
            },
            {
              name: 'Description',
              included: false
            },
            {
              name: 'Favourite Colour',
              included: false
            },
            {
              name: 'Fax Numer',
              included: true
            },
            {
              name: 'Product Line',
              included: false
            },
            {
              name: 'Symptoms',
              included: true
            },
            {
              name: 'Calorie Count',
              included: false
            },
            {
              name: 'Nutrition Value',
              included: false
            }
          ]
        },
        {
          value: 'Skincare',
          active: false,
          chargebackFields: [
            {
              name: 'Currency',
              included: true
            },
            {
              name: 'Email Opt Out',
              included: false
            },
            {
              name: 'Decision Timeframe',
              included: true
            },
            {
              name: 'Country',
              included: false
            },
            {
              name: 'Arrival Date',
              included: true
            },
            {
              name: 'Company',
              included: false
            },
            {
              name: 'Departure Date',
              included: false
            },
            {
              name: 'City',
              included: false
            },
            {
              name: 'Description',
              included: false
            },
            {
              name: 'Favourite Colour',
              included: false
            },
            {
              name: 'Fax Numer',
              included: true
            },
            {
              name: 'Product Line',
              included: false
            },
            {
              name: 'Symptoms',
              included: true
            },
            {
              name: 'Calorie Count',
              included: false
            },
            {
              name: 'Nutrition Value',
              included: false
            }
          ]
        },
        {
          value: 'Oral Care',
          active: false,
          chargebackFields: [
            {
              name: 'Currency',
              included: true
            },
            {
              name: 'Email Opt Out',
              included: false
            },
            {
              name: 'Decision Timeframe',
              included: true
            },
            {
              name: 'Country',
              included: false
            },
            {
              name: 'Arrival Date',
              included: true
            },
            {
              name: 'Company',
              included: false
            },
            {
              name: 'Departure Date',
              included: false
            },
            {
              name: 'City',
              included: false
            },
            {
              name: 'Description',
              included: false
            },
            {
              name: 'Favourite Colour',
              included: false
            },
            {
              name: 'Fax Numer',
              included: true
            },
            {
              name: 'Product Line',
              included: false
            },
            {
              name: 'Symptoms',
              included: true
            },
            {
              name: 'Calorie Count',
              included: false
            },
            {
              name: 'Nutrition Value',
              included: false
            }
          ]
        },
        {
          value: 'Hair care',
          active: false,
          chargebackFields: [
            {
              name: 'Currency',
              included: true
            },
            {
              name: 'Email Opt Out',
              included: false
            },
            {
              name: 'Decision Timeframe',
              included: true
            },
            {
              name: 'Country',
              included: false
            },
            {
              name: 'Arrival Date',
              included: true
            },
            {
              name: 'Company',
              included: false
            },
            {
              name: 'Departure Date',
              included: false
            },
            {
              name: 'City',
              included: false
            },
            {
              name: 'Description',
              included: false
            },
            {
              name: 'Favourite Colour',
              included: false
            },
            {
              name: 'Fax Numer',
              included: true
            },
            {
              name: 'Product Line',
              included: false
            },
            {
              name: 'Symptoms',
              included: true
            },
            {
              name: 'Calorie Count',
              included: false
            },
            {
              name: 'Nutrition Value',
              included: false
            }
          ]
        },
        {
          value: 'Fitness',
          active: false,
          chargebackFields: [
            {
              name: 'Currency',
              included: true
            },
            {
              name: 'Email Opt Out',
              included: false
            },
            {
              name: 'Decision Timeframe',
              included: true
            },
            {
              name: 'Country',
              included: false
            },
            {
              name: 'Arrival Date',
              included: true
            },
            {
              name: 'Company',
              included: false
            },
            {
              name: 'Departure Date',
              included: false
            },
            {
              name: 'City',
              included: false
            },
            {
              name: 'Description',
              included: false
            },
            {
              name: 'Favourite Colour',
              included: false
            },
            {
              name: 'Fax Numer',
              included: true
            },
            {
              name: 'Product Line',
              included: false
            },
            {
              name: 'Symptoms',
              included: true
            },
            {
              name: 'Calorie Count',
              included: false
            },
            {
              name: 'Nutrition Value',
              included: false
            }
          ]
        },
        {
          value: 'Nutrition',
          active: false,
          chargebackFields: [
            {
              name: 'Currency',
              included: true
            },
            {
              name: 'Email Opt Out',
              included: false
            },
            {
              name: 'Decision Timeframe',
              included: true
            },
            {
              name: 'Country',
              included: false
            },
            {
              name: 'Arrival Date',
              included: true
            },
            {
              name: 'Company',
              included: false
            },
            {
              name: 'Departure Date',
              included: false
            },
            {
              name: 'City',
              included: false
            },
            {
              name: 'Description',
              included: false
            },
            {
              name: 'Favourite Colour',
              included: false
            },
            {
              name: 'Fax Numer',
              included: true
            },
            {
              name: 'Product Line',
              included: false
            },
            {
              name: 'Symptoms',
              included: true
            },
            {
              name: 'Calorie Count',
              included: false
            },
            {
              name: 'Nutrition Value',
              included: false
            }
          ]
        }
      ]
    },
    {
      value: 'Fishing',
      active: false,
      subIndustry: [
        {
          value: 'Cosmetics',
          active: false,
          chargebackFields: [
            {
              name: 'Currency',
              included: true
            },
            {
              name: 'Email Opt Out',
              included: false
            },
            {
              name: 'Decision Timeframe',
              included: true
            },
            {
              name: 'Country',
              included: false
            },
            {
              name: 'Arrival Date',
              included: true
            },
            {
              name: 'Company',
              included: false
            },
            {
              name: 'Departure Date',
              included: false
            },
            {
              name: 'City',
              included: false
            },
            {
              name: 'Description',
              included: false
            },
            {
              name: 'Favourite Colour',
              included: false
            },
            {
              name: 'Fax Numer',
              included: true
            },
            {
              name: 'Product Line',
              included: false
            },
            {
              name: 'Symptoms',
              included: false
            },
            {
              name: 'Calorie Count',
              included: false
            },
            {
              name: 'Nutrition Value',
              included: true
            }
          ]
        },
        {
          value: 'Skincare',
          active: false,
          chargebackFields: [
            {
              name: 'Currency',
              included: true
            },
            {
              name: 'Email Opt Out',
              included: false
            },
            {
              name: 'Decision Timeframe',
              included: true
            },
            {
              name: 'Country',
              included: false
            },
            {
              name: 'Arrival Date',
              included: true
            },
            {
              name: 'Company',
              included: false
            },
            {
              name: 'Departure Date',
              included: false
            },
            {
              name: 'City',
              included: false
            },
            {
              name: 'Description',
              included: false
            },
            {
              name: 'Favourite Colour',
              included: false
            },
            {
              name: 'Fax Numer',
              included: true
            },
            {
              name: 'Product Line',
              included: false
            },
            {
              name: 'Symptoms',
              included: false
            },
            {
              name: 'Calorie Count',
              included: false
            },
            {
              name: 'Nutrition Value',
              included: true
            }
          ]
        },
        {
          value: 'Oral Care',
          active: false,
          chargebackFields: [
            {
              name: 'Currency',
              included: true
            },
            {
              name: 'Email Opt Out',
              included: false
            },
            {
              name: 'Decision Timeframe',
              included: true
            },
            {
              name: 'Country',
              included: false
            },
            {
              name: 'Arrival Date',
              included: true
            },
            {
              name: 'Company',
              included: false
            },
            {
              name: 'Departure Date',
              included: false
            },
            {
              name: 'City',
              included: false
            },
            {
              name: 'Description',
              included: false
            },
            {
              name: 'Favourite Colour',
              included: false
            },
            {
              name: 'Fax Numer',
              included: true
            },
            {
              name: 'Product Line',
              included: false
            },
            {
              name: 'Symptoms',
              included: false
            },
            {
              name: 'Calorie Count',
              included: false
            },
            {
              name: 'Nutrition Value',
              included: true
            }
          ]
        },
        {
          value: 'Homeopathy',
          active: false,
          chargebackFields: [
            {
              name: 'Currency',
              included: true
            },
            {
              name: 'Email Opt Out',
              included: false
            },
            {
              name: 'Decision Timeframe',
              included: true
            },
            {
              name: 'Country',
              included: false
            },
            {
              name: 'Arrival Date',
              included: true
            },
            {
              name: 'Company',
              included: false
            },
            {
              name: 'Departure Date',
              included: false
            },
            {
              name: 'City',
              included: false
            },
            {
              name: 'Description',
              included: false
            },
            {
              name: 'Favourite Colour',
              included: false
            },
            {
              name: 'Fax Numer',
              included: true
            },
            {
              name: 'Product Line',
              included: false
            },
            {
              name: 'Symptoms',
              included: false
            },
            {
              name: 'Calorie Count',
              included: false
            },
            {
              name: 'Nutrition Value',
              included: true
            }
          ]
        },
        {
          value: 'Hair care',
          active: false,
          chargebackFields: [
            {
              name: 'Currency',
              included: true
            },
            {
              name: 'Email Opt Out',
              included: false
            },
            {
              name: 'Decision Timeframe',
              included: true
            },
            {
              name: 'Country',
              included: false
            },
            {
              name: 'Arrival Date',
              included: true
            },
            {
              name: 'Company',
              included: false
            },
            {
              name: 'Departure Date',
              included: false
            },
            {
              name: 'City',
              included: false
            },
            {
              name: 'Description',
              included: false
            },
            {
              name: 'Favourite Colour',
              included: false
            },
            {
              name: 'Fax Numer',
              included: true
            },
            {
              name: 'Product Line',
              included: false
            },
            {
              name: 'Symptoms',
              included: false
            },
            {
              name: 'Calorie Count',
              included: false
            },
            {
              name: 'Nutrition Value',
              included: true
            }
          ]
        },
        {
          value: 'Fitness',
          active: false,
          chargebackFields: [
            {
              name: 'Currency',
              included: true
            },
            {
              name: 'Email Opt Out',
              included: false
            },
            {
              name: 'Decision Timeframe',
              included: true
            },
            {
              name: 'Country',
              included: false
            },
            {
              name: 'Arrival Date',
              included: true
            },
            {
              name: 'Company',
              included: false
            },
            {
              name: 'Departure Date',
              included: false
            },
            {
              name: 'City',
              included: false
            },
            {
              name: 'Description',
              included: false
            },
            {
              name: 'Favourite Colour',
              included: false
            },
            {
              name: 'Fax Numer',
              included: true
            },
            {
              name: 'Product Line',
              included: false
            },
            {
              name: 'Symptoms',
              included: false
            },
            {
              name: 'Calorie Count',
              included: false
            },
            {
              name: 'Nutrition Value',
              included: true
            }
          ]
        },
        {
          value: 'Nutrition',
          active: false,
          chargebackFields: [
            {
              name: 'Currency',
              included: true
            },
            {
              name: 'Email Opt Out',
              included: false
            },
            {
              name: 'Decision Timeframe',
              included: true
            },
            {
              name: 'Country',
              included: false
            },
            {
              name: 'Arrival Date',
              included: true
            },
            {
              name: 'Company',
              included: false
            },
            {
              name: 'Departure Date',
              included: false
            },
            {
              name: 'City',
              included: false
            },
            {
              name: 'Description',
              included: false
            },
            {
              name: 'Favourite Colour',
              included: false
            },
            {
              name: 'Fax Numer',
              included: true
            },
            {
              name: 'Product Line',
              included: false
            },
            {
              name: 'Symptoms',
              included: false
            },
            {
              name: 'Calorie Count',
              included: false
            },
            {
              name: 'Nutrition Value',
              included: true
            }
          ]
        }
      ]
    },
    {
      value: 'Sports',
      active: false,
      subIndustry: [
        {
          value: 'Cosmetics',
          active: false,
          chargebackFields: [
            {
              name: 'Currency',
              included: true
            },
            {
              name: 'Email Opt Out',
              included: false
            },
            {
              name: 'Decision Timeframe',
              included: true
            },
            {
              name: 'Country',
              included: false
            },
            {
              name: 'Arrival Date',
              included: true
            },
            {
              name: 'Company',
              included: false
            },
            {
              name: 'Departure Date',
              included: false
            },
            {
              name: 'City',
              included: true
            },
            {
              name: 'Description',
              included: false
            },
            {
              name: 'Favourite Colour',
              included: false
            },
            {
              name: 'Fax Numer',
              included: true
            },
            {
              name: 'Product Line',
              included: false
            },
            {
              name: 'Symptoms',
              included: false
            },
            {
              name: 'Calorie Count',
              included: false
            },
            {
              name: 'Nutrition Value',
              included: false
            }
          ]
        },
        {
          value: 'Skincare',
          active: false,
          chargebackFields: [
            {
              name: 'Currency',
              included: true
            },
            {
              name: 'Email Opt Out',
              included: false
            },
            {
              name: 'Decision Timeframe',
              included: true
            },
            {
              name: 'Country',
              included: false
            },
            {
              name: 'Arrival Date',
              included: true
            },
            {
              name: 'Company',
              included: false
            },
            {
              name: 'Departure Date',
              included: false
            },
            {
              name: 'City',
              included: true
            },
            {
              name: 'Description',
              included: false
            },
            {
              name: 'Favourite Colour',
              included: false
            },
            {
              name: 'Fax Numer',
              included: true
            },
            {
              name: 'Product Line',
              included: false
            },
            {
              name: 'Symptoms',
              included: false
            },
            {
              name: 'Calorie Count',
              included: false
            },
            {
              name: 'Nutrition Value',
              included: false
            }
          ]
        },
        {
          value: 'Oral Care',
          active: false,
          chargebackFields: [
            {
              name: 'Currency',
              included: true
            },
            {
              name: 'Email Opt Out',
              included: false
            },
            {
              name: 'Decision Timeframe',
              included: true
            },
            {
              name: 'Country',
              included: false
            },
            {
              name: 'Arrival Date',
              included: true
            },
            {
              name: 'Company',
              included: false
            },
            {
              name: 'Departure Date',
              included: false
            },
            {
              name: 'City',
              included: true
            },
            {
              name: 'Description',
              included: false
            },
            {
              name: 'Favourite Colour',
              included: false
            },
            {
              name: 'Fax Numer',
              included: true
            },
            {
              name: 'Product Line',
              included: false
            },
            {
              name: 'Symptoms',
              included: false
            },
            {
              name: 'Calorie Count',
              included: false
            },
            {
              name: 'Nutrition Value',
              included: false
            }
          ]
        },
        {
          value: 'Homeopathy',
          active: false,
          chargebackFields: [
            {
              name: 'Currency',
              included: true
            },
            {
              name: 'Email Opt Out',
              included: false
            },
            {
              name: 'Decision Timeframe',
              included: true
            },
            {
              name: 'Country',
              included: false
            },
            {
              name: 'Arrival Date',
              included: true
            },
            {
              name: 'Company',
              included: false
            },
            {
              name: 'Departure Date',
              included: false
            },
            {
              name: 'City',
              included: true
            },
            {
              name: 'Description',
              included: false
            },
            {
              name: 'Favourite Colour',
              included: false
            },
            {
              name: 'Fax Numer',
              included: true
            },
            {
              name: 'Product Line',
              included: false
            },
            {
              name: 'Symptoms',
              included: false
            },
            {
              name: 'Calorie Count',
              included: false
            },
            {
              name: 'Nutrition Value',
              included: false
            }
          ]
        },
        {
          value: 'Hair care',
          active: false,
          chargebackFields: [
            {
              name: 'Currency',
              included: true
            },
            {
              name: 'Email Opt Out',
              included: false
            },
            {
              name: 'Decision Timeframe',
              included: true
            },
            {
              name: 'Country',
              included: false
            },
            {
              name: 'Arrival Date',
              included: true
            },
            {
              name: 'Company',
              included: false
            },
            {
              name: 'Departure Date',
              included: false
            },
            {
              name: 'City',
              included: true
            },
            {
              name: 'Description',
              included: false
            },
            {
              name: 'Favourite Colour',
              included: false
            },
            {
              name: 'Fax Numer',
              included: true
            },
            {
              name: 'Product Line',
              included: false
            },
            {
              name: 'Symptoms',
              included: false
            },
            {
              name: 'Calorie Count',
              included: false
            },
            {
              name: 'Nutrition Value',
              included: false
            }
          ]
        },
        {
          value: 'Fitness',
          active: false,
          chargebackFields: [
            {
              name: 'Currency',
              included: true
            },
            {
              name: 'Email Opt Out',
              included: false
            },
            {
              name: 'Decision Timeframe',
              included: true
            },
            {
              name: 'Country',
              included: false
            },
            {
              name: 'Arrival Date',
              included: true
            },
            {
              name: 'Company',
              included: false
            },
            {
              name: 'Departure Date',
              included: false
            },
            {
              name: 'City',
              included: true
            },
            {
              name: 'Description',
              included: false
            },
            {
              name: 'Favourite Colour',
              included: false
            },
            {
              name: 'Fax Numer',
              included: true
            },
            {
              name: 'Product Line',
              included: false
            },
            {
              name: 'Symptoms',
              included: false
            },
            {
              name: 'Calorie Count',
              included: false
            },
            {
              name: 'Nutrition Value',
              included: false
            }
          ]
        },
        {
          value: 'Nutrition',
          active: false,
          chargebackFields: [
            {
              name: 'Currency',
              included: true
            },
            {
              name: 'Email Opt Out',
              included: false
            },
            {
              name: 'Decision Timeframe',
              included: true
            },
            {
              name: 'Country',
              included: false
            },
            {
              name: 'Arrival Date',
              included: true
            },
            {
              name: 'Company',
              included: false
            },
            {
              name: 'Departure Date',
              included: false
            },
            {
              name: 'City',
              included: true
            },
            {
              name: 'Description',
              included: false
            },
            {
              name: 'Favourite Colour',
              included: false
            },
            {
              name: 'Fax Numer',
              included: true
            },
            {
              name: 'Product Line',
              included: false
            },
            {
              name: 'Symptoms',
              included: false
            },
            {
              name: 'Calorie Count',
              included: false
            },
            {
              name: 'Nutrition Value',
              included: false
            }
          ]
        }
      ]
    }
  ];
  chargebackFieldsList = [
    {
      name: 'Currency',
      included: false
    },
    {
      name: 'Email Opt Out',
      included: false
    },
    {
      name: 'Decision Timeframe',
      included: false
    },
    {
      name: 'Country',
      included: false
    },
    {
      name: 'Arrival Date',
      included: false
    },
    {
      name: 'Company',
      included: false
    },
    {
      name: 'Departure Date',
      included: false
    },
    {
      name: 'City',
      included: false
    },
    {
      name: 'Description',
      included: false
    },
    {
      name: 'Favourite Colour',
      included: false
    },
    {
      name: 'Fax Numer',
      included: false
    },
    {
      name: 'Product Line',
      included: false
    },
    {
      name: 'Symptoms',
      included: false
    },
    {
      name: 'Calorie Count',
      included: false
    },
    {
      name: 'Nutrition Value',
      included: false
    }
  ];
  chargebackFields = [];
  subIndustry = [];
  charagebackParametersFlag = true;
  subIndustryFlag = true;
  subIndustryIndex=0;
  industriesIndex=0;
  constructor(public dialog: MatDialog) {}

  ngOnInit() {
    this.subIndustry = this.industries[0].subIndustry;
    this.chargebackFields = this.industries[0].subIndustry[0].chargebackFields;
  }

  addItemDialog = dialogName => {
    const dialogRef = this.dialog.open(TextFieldDialogComponent, {
      data: {
        dialogName: dialogName,
        label: 'Industry Name'
      }
    });
    dialogRef.afterClosed().subscribe(result => {
      if (result) {
        this.industries.push({
          value: result,
          active: false,
          subIndustry: []
        });
      }
    });
  };
  addValueDialog = dialogName => {
    const dialogRef = this.dialog.open(TextFieldDialogComponent, {
      data: {
        dialogName: dialogName,
        label: 'Sub Industry Name'
      }
    });
    dialogRef.afterClosed().subscribe(result => {
      if (result) {
        this.industries[this.industriesIndex].subIndustry.push({
          value: result,
          active: false,
          chargebackFields: this.chargebackFieldsList
        });
      }
    });
  };
  addChargebackFieldsDialog = dialogName => {
    let array = [];
    this.industries[this.industriesIndex].subIndustry[this.subIndustryIndex]
      .chargebackFields.length
      ? (array = this.industries[this.industriesIndex].subIndustry[
          this.subIndustryIndex
        ].chargebackFields)
      : (array = this.chargebackFieldsList);
    const dialogRef = this.dialog.open(CheckListItemsComponent, {
      data: {
        dataArray: array,
        dialogName: dialogName
      },
      autoFocus: false
    });
    dialogRef.afterClosed().subscribe(result => {
      if (result) {
        this.chargebackFields = result;
        this.industries[this.industriesIndex].subIndustry[
          this.subIndustryIndex
        ].chargebackFields = result;
      }
    });
  };

  removeIndustry = (item, val) => {
    const index = item.indexOf(val);
    item.splice(index, 1);
    this.chargebackFields = [];
    this.charagebackParametersFlag = false;
    this.subIndustry = [];
    this.subIndustryFlag = false;
  };
  removeSubIndustry = (item, val) => {
    const index = item.indexOf(val);
    item.splice(index, 1);
    this.chargebackFields = [];
    this.charagebackParametersFlag = false;
  };

  acviveFunction = item => {
    this.subIndustryFlag = true;
    this.charagebackParametersFlag = false;
    for (let i of this.subIndustry) {
      i.active = false;
    }
    for (let i of this.industries) {
      i.active = false;
    }
    item.active = true;
    this.subIndustry = item.subIndustry;
    const index = this.industries.indexOf(item);
    this.industriesIndex = index;
  };

  acviveSubIndustryFunction = item => {
    for (let i of this.subIndustry) {
      i.active = false;
    }
    item.active = true;
    this.chargebackFields = item.chargebackFields;
    this.charagebackParametersFlag = true;

    const index = this.subIndustry.indexOf(item);
    this.subIndustryIndex = index;
  };
}
