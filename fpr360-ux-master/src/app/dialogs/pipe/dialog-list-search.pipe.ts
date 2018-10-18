import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'dialogListSearch'
})
export class DialogListSearchPipe implements PipeTransform {
  transform(items: any[], search): any {
    return search
      ? items.filter(
          item => item.name.toLowerCase().indexOf(search.toLowerCase()) !== -1
        )
      : items;
  }
}
