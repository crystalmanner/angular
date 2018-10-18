import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-cover-letters',
  templateUrl: './cover-letters.component.html',
  styleUrls: ['./cover-letters.component.scss']
})
export class CoverLettersComponent implements OnInit {
  coverLettersData = {
    rows: [
      {
        industry: 'Automotive',
        title: 'Partial Refund',
        reason: 'Fraudulent Transaction',
        lastModified: ' 20 Aug 2017',
        editedBy: 'Milton Underwood',
        pathTo: '/cover-letter',
        rowIncluded: true
      },
      {
        industry: 'Pharmaceutical',
        title: 'Partial Refund',
        reason: 'Services not provided + 3',
        lastModified: ' 14 Oct 2017',
        editedBy: 'Peter Zagreb',
        pathTo: '/cover-letter',
        rowIncluded: true
      },
      {
        industry: 'Fruit',
        title: 'Partial Refund',
        reason: 'Cardholder does not recognize',
        lastModified: ' 16 Apr 2017',
        editedBy: 'Isaiah Figueroa',
        pathTo: '/cover-letter',
        rowIncluded: true
      },
      {
        industry: 'Fishing',
        title: 'Partial Refund',
        reason: 'Credit not processed +4',
        lastModified: ' 24 Dec 2017',
        editedBy: 'Aiden Pratt',
        pathTo: '/cover-letter',
        rowIncluded: true
      },
      {
        industry: 'Software',
        title: 'Full Refund',
        reason: 'Duplicate processing',
        lastModified: ' 04 Oct 2017',
        editedBy: 'Elijah Rodriguez',
        pathTo: '/cover-letter',
        rowIncluded: true
      },
      {
        industry: 'Petroleum',
        title: 'Partial Refund',
        reason: 'Incorrect transaction amount',
        lastModified: ' 28 Sep 2017',
        editedBy: 'Sylvia Ramsey',
        pathTo: '/cover-letter',
        rowIncluded: true
      },
      {
        industry: 'Energy',
        title: 'No Refund',
        reason: 'Cancelled recurring transaction +4',
        lastModified: ' 27 Apr 2017',
        editedBy: 'Paul Maldonado',
        pathTo: '/cover-letter',
        rowIncluded: true
      },
      {
        industry: 'News media',
        title: 'Full Refund',
        reason: 'Transaction documentation request',
        lastModified: ' 14 Aug 2017',
        editedBy: 'Gavin Bowers',
        pathTo: '/cover-letter',
        rowIncluded: true
      },
      {
        industry: 'Shipbuilding',
        title: 'No Refund',
        reason: 'Cardholder disputes of quality of goods +6',
        lastModified: ' 30 Aug 2017',
        editedBy: 'Milton Underwood',
        pathTo: '/cover-letter',
        rowIncluded: true
      },
      {
        industry: 'Telecommunications',
        title: 'No Refund',
        reason: 'Potential chargeback',
        lastModified: ' 04 Dec 2017',
        editedBy: 'Vincent Manning',
        pathTo: '/cover-letter',
        rowIncluded: true
      },
      {
        industry: 'Agriculture',
        title: 'Full Refund',
        reason: 'Pre-Arbitration',
        lastModified: '25 Sep 2017',
        editedBy: 'Isaiah Figueroa',
        pathTo: '/cover-letter',
        rowIncluded: true
      },
      {
        industry: 'Arms',
        title: 'Partial Refund',
        reason: 'Declined authorization',
        lastModified: '30 Sep 2017',
        editedBy: 'Amanda Martin',
        pathTo: '/cover-letter',
        rowIncluded: true
      },
      {
        industry: 'Manufacturing',
        title: 'No Refund',
        reason: 'Sevice Cancelled +2',
        lastModified: '12 Oct 2017',
        editedBy: 'Elijah Rodriguez',
        pathTo: '/cover-letter',
        rowIncluded: true
      },
      {
        industry: 'Entertainment',
        title: 'Partial Refund',
        reason: 'Request for copy bearing signature',
        lastModified: '05 Jan 2017',
        editedBy: 'Paul Henry',
        pathTo: '/cover-letter',
        rowIncluded: true
      },
      {
        industry: 'Transport',
        title: 'No Refund',
        reason: 'Request credit for overcharge',
        lastModified: '25 Nov 2017',
        editedBy: 'Paul Maldonado',
        pathTo: '/cover-letter',
        rowIncluded: true
      }
    ],
    cols: [
      { name: 'Industry' },
      { name: 'Title' },
      { name: 'Reason' },
      { name: 'Last Modified' },
      { name: 'Edited by' }
    ],
    addidionalData: {
      colsData: [
        {
          name: 'Industry',
          included: true,
          rightAlign: false,
          width: 240,
          bold: true,
          leftFixed: true
        },
        {
          name: 'Title',
          included: true,
          rightAlign: false,
          width: 0,
          bold: false,
          leftFixed: false
        },
        {
          name: 'Reason',
          included: true,
          rightAlign: false,
          width: 0,
          bold: false,
          leftFixed: false
        },
        {
          name: 'Last Modified',
          included: true,
          rightAlign: false,
          width: 160,
          bold: false,
          leftFixed: false
        },
        {
          name: 'Edited by',
          included: true,
          rightAlign: false,
          width: 0,
          bold: false,
          leftFixed: false
        }
      ],
      rowSettings: ['Option 1', 'Option 2', 'divider', 'Option 3'],
      toolbarOptions: {
        options: ['Option 1', 'Option 2', 'Option 3'],
        function: val => console.log(val)
      },
      selects: [
        {
          selected: 'All Titles',
          options: ['All Titlles', 'Option 2', 'Option 3'],
          function: val => console.log(val)
        },
        {
          selected: 'All Reasons',
          options: ['All Reasons', 'Option 2', 'Option 3'],
          function: val => console.log(val)
        }
      ]
    }
  };
  constructor() {}

  ngOnInit() {}
}
