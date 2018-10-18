# Widget

`<app-widget [widgetTitle]="item.title" [widgetSettings]="item.settings" (select)="selectMenu($event)"> {{item.content}} </app-widget>`

## Options

*widgetTitle* (string)

*widgetSettings* (Array[option:string])

*content* (string)

*select* (EventEmitter) required back 'option: string'