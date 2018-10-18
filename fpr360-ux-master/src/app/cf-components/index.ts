import { NoScrollerDirective } from './directives/no-scroller.directive';
import { NoTabAnimationDirective } from './directives/no-tab-animation.directive';
import { FocusDirective } from './directives/focus.directive';

import { DdMenuComponent } from './components/dd-menu/dd-menu.component';
import { SelectMenuComponent } from './components/select-menu/select-menu.component';
import { SimpleSearchComponent } from './components/simple-search/simple-search.component';
import { DatetimePickerComponent } from './components/datetime-picker/datetime-picker.component';
import { ImageComponent } from './components/image/image.component';
import { DdFilterComponent } from './components/dd-filter/dd-filter.component';
import { AdvancedSearchComponent } from './components/advanced-search/advanced-search.component';
import { CfDatepickerModule } from './components/cf-datepicker/index';
import { SubHeaderComponent } from './components/sub-header/sub-header.component';
import { WidgetComponent } from './components/widget/widget.component';
import { DataLineComponent } from './components/data-line/data-line.component';
import { DataWidgetComponent } from './components/data-widget/data-widget.component';
import { GridButtonComponent } from './components/grid-button/grid-button.component';
import { BadgeComponent } from './components/badge/badge.component';
import { LabelComponent } from './components/label/label.component';
import { UserListItemComponent } from './components/user-list-item/user-list-item.component';
import { EditableTitleComponent } from './components/editable-title/editable-title.component';
import { PasswordComponent } from './components/password/password.component';
import { ScreenshotComponent } from './components/screenshot/screenshot.component';

const CF_COMPONENTS: any[] = [
  DdMenuComponent,
  SelectMenuComponent,
  SimpleSearchComponent,
  DatetimePickerComponent,
  ImageComponent,
  DdFilterComponent,
  AdvancedSearchComponent,
  SubHeaderComponent,
  WidgetComponent,
  DataLineComponent,
  DataWidgetComponent,
  GridButtonComponent,
  BadgeComponent,
  LabelComponent,
  UserListItemComponent,
  EditableTitleComponent,
  PasswordComponent,
  ScreenshotComponent
];

const CF_DIRECTIVES: any[] = [
  NoTabAnimationDirective,
  NoScrollerDirective,
  FocusDirective
];

export { CF_COMPONENTS, CF_DIRECTIVES, CfDatepickerModule };
