import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-post-type-two-image',
  templateUrl: './post-type-two-image.component.html',
  styleUrls: ['./post-type-two-image.component.scss'],
})
export class PostTypeTwoImageComponent implements OnInit {

  items2 = [
    {name: 'Hasan Sezen', avatar: 'https://placehold.it/158X160', groep: 'Groep 1'},
    {name: 'Hasan Sezen', avatar: 'https://placehold.it/158X160', groep: 'Groep 1'},
  ];

  constructor() { }

  ngOnInit() {}

}
