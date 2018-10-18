# Editable Title

`<app-editable-title [icon]="'business'" [placeholder]="'Company Name'"
[value]="'test'" [light]="true"
(changeValue)="titleVal($event)"></app-editable-title>`

# Options

_icon_ (string) icon name from https://material.io/icons/

_placeholder_ (string) text for dynamic label

_value_ (string) current value

_light_ (boolean) if true will be white color (false by default)

_readonly_ (boolean) false by default
