# Data Widget

`<app-data-widget [data]="dataWidget" [dataSettings]="dataWidgetSettings" (select)="selectMenu($event)"></app-data-widget>`

## options

_className_ (string)

_data_ (array[value:string, label:string]) required

_dataSettings_ (array[option:string]) (if option='divider' will add divider line)

_select_ (EventEmitter) back 'option: string'
