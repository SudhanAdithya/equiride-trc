import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-post-type-three-image',
  templateUrl: './post-type-three-image.component.html',
  styleUrls: ['./post-type-three-image.component.scss'],
})
export class PostTypeThreeImageComponent implements OnInit {

  items3 = [
    {name: 'Hasan Sezen', avatar: 'https://placehold.it/105X160', groep: 'Groep 1'},
    {name: 'Hasan Sezen', avatar: 'https://placehold.it/105X160', groep: 'Groep 1'},
    {name: 'Hasan Sezen', avatar: 'https://placehold.it/105X160', groep: 'Groep 1'},
    {name: 'Hasan Sezen', avatar: 'https://placehold.it/105X160', groep: 'Groep 1'},
  ];

  constructor() { }

  ngOnInit() {}

}
