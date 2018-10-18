# Date Time picker

`<app-datetime-picker [icons]="false" [labelPicker]="'Activation Date'" (change)="backDate($event)"></app-datetime-picker>`

## Options

*icons* (boolean) if true will be with icons  (true by default)

*labelPicker* (string) dynamic label

*typePicker* (string) date | time (date by default)

*formatPicker*(string) ('MMMM d, y' by default)

*change* (function) back change event