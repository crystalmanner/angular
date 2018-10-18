# Dropdown Filter

`<app-dd-filter [filterOptions]="acticityFilter" (check)="filterVal($event)"></app-dd-filter>`

## Options

*light* (boolean) if true icon button will be white (false by default)

*filterOptions* (Array[option: string, flag:boolean])  if option='divider' will add divider line

*check* (EventEmitter) required back Array [option: string, flag: boolean]