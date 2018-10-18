# Dropdown Menu

`<app-dd-menu [options]="options" (select)="selectMenu($event)"></app-dd-menu>`

## Options

*light* (boolean) if true icon button will be white (false by default)

*options* (array[string]) if 'divider' will add divider line

*select* (EventEmitter) required back 'option: string'