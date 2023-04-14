import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filter',
  pure: false,
})
export class FilterPipe implements PipeTransform {
  transform(value: any[], st: string): any[] {
    if (st.length == 0) {
      return value;
    } else {
      return value.filter((element) => element['statut'] == st);
      // let newTab = [];
      // for (const serv of value) {
      //   if (serv['statut'] == st) newTab.push(serv);
      // }
      // return newTab;
    }
  }
}
