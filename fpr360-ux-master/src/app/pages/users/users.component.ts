import { Component, OnInit } from '@angular/core';
@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.scss']
})
export class UsersComponent implements OnInit {
  usersMenu = [
    {
      path: 'gurus',
      name: 'Gurus'
    },
    {
      path: 'users-clients',
      name: 'Clients'
    },
    {
      path: 'users-partners',
      name: 'Partners'
    }
  ];

  constructor() {}

  ngOnInit() {}
}
