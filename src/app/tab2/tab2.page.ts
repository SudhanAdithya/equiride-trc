import { Component } from '@angular/core';
import { Router } from '@angular/router';




@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss']
})
export class Tab2Page {

  constructor(private router: Router) {}

  navigate1() {
    this.router.navigate(['/home/tab2/slot'])
  }

  navigate2() {
    this.router.navigate(['/home/tab2/restaurant'])
  }

  navigate3() {
    this.router.navigate(['/home/tab2/event'])
  }
  
}
