import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-post-type-video',
  templateUrl: './post-type-video.component.html',
  styleUrls: ['./post-type-video.component.scss'],
})
export class PostTypeVideoComponent implements OnInit {

  items = [
    {name: 'Hasan Sezen', avatar: 'https://placehold.it/316X160', groep: 'Groep 1'},
  ];
  constructor() { }

  ngOnInit() {}

}
