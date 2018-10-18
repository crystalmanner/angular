import { Component, OnInit, forwardRef, Input } from '@angular/core';
import { NG_VALUE_ACCESSOR, ControlValueAccessor } from '@angular/forms';

const noop = () => {};

export const CUSTOM_INPUT_CONTROL_VALUE_ACCESSOR: any = {
  provide: NG_VALUE_ACCESSOR,
  useExisting: forwardRef(() => UserTitleComponent),
  multi: true
};

@Component({
  selector: 'app-user-title',
  templateUrl: './user-title.component.html',
  styleUrls: ['./user-title.component.scss'],
  providers: [CUSTOM_INPUT_CONTROL_VALUE_ACCESSOR]
})
export class UserTitleComponent implements OnInit, ControlValueAccessor {
  @Input() guru = false;
  @Input() readonly = false;
  @Input()
  data = {
    avatar: '',
    initials: '',
    initialsColor: '',
    placeholder: 'User Name'
  };

  type: string;

  n = 0;

  //The internal data model
  private innerValue: any = '';

  //Placeholders for the callbacks which are later provided
  //by the Control Value Accessor
  private onTouchedCallback: () => void = noop;
  private onChangeCallback: (_: any) => void = noop;

  //get accessor
  get value(): any {
    return this.innerValue;
  }

  //set accessor including call the onchange callback
  set value(v: any) {
    if (v !== this.innerValue) {
      this.innerValue = v;
      this.onChangeCallback(v);
    }
  }

  //Set touched on blur
  onBlur() {
    this.onTouchedCallback();
  }

  //From ControlValueAccessor interface
  writeValue(value: any) {
    if (value !== this.innerValue) {
      this.innerValue = value;
    }
  }

  //From ControlValueAccessor interface
  registerOnChange(fn: any) {
    this.onChangeCallback = fn;
  }

  //From ControlValueAccessor interface
  registerOnTouched(fn: any) {
    this.onTouchedCallback = fn;
  }

  constructor() {}

  ngOnInit() {
    this.type = this.data.avatar
      ? 'image'
      : this.data.initials ? 'initial' : '';
  }
  bg: string;
  initialsFunction = name => {
    let contrast: string;
    if (!this.data.avatar) {
      this.type = 'initial';
      if (this.n === 0) {
        while (contrast != 'white') {
          this.bg =
            '#' +
            (
              '000000' + Math.floor(Math.random() * 16777216).toString(16)
            ).substr(-6);
          contrast = setContrast(hexToRgb(this.bg));
        }
      }
      //
      this.data.initialsColor = this.bg;
      this.data.initials =
        (name.split(' ')[0] ? name.split(' ')[0][0] : '') +
        (name.split(' ')[1] ? name.split(' ')[1][0] : '');
    }
    name.length === 0 ? (this.n = 0) : this.n++;
  };
}

// check colors
const hexToRgb = hex => {
  // turn hex val to RGB
  const result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex);
  return result
    ? {
        r: parseInt(result[1], 16),
        g: parseInt(result[2], 16),
        b: parseInt(result[3], 16)
      }
    : null;
};
// calc to work out if it will match on black or white better
const setContrast = rgb =>
  (rgb.r * 299 + rgb.g * 587 + rgb.b * 114) / 1000 > 125 ? 'black' : 'white';
