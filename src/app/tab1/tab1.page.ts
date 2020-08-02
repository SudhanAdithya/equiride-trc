import { Component } from '@angular/core';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page {

  navigate =
    [
      {
        title : 'App',
        url   : '/apps',
        icon  : 'apps'
      },
      {
        title : 'Book',
        url   : '/book',
        icon  : 'book'
      },
      {
        title : 'Paint',
        url   : '/paint',
        icon  : 'brush'
      },
      {
        title : 'Contacts',
        url   : '/contacts',
        icon  : 'contacts'
      },
      {
        title : 'Facebook',
        url   : '/facebook.com',
        icon  : 'logo-facebook'
      },
    ];
  constructor() {}

}
