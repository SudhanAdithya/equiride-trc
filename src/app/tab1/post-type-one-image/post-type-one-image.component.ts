import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-post-type-one-image',
  templateUrl: './post-type-one-image.component.html',
  styleUrls: ['./post-type-one-image.component.scss'],
})
export class PostTypeOneImageComponent implements OnInit {

  items = [
    {name: 'Hasan Sezen', avatar: 'https://placehold.it/316X160', groep: 'Groep 1'},
  ];
  constructor() { }

  ngOnInit() {}

}
