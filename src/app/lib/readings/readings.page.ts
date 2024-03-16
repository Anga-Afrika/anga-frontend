import { Component, OnInit } from '@angular/core';
import { Router } from "@angular/router";
@Component({
  selector: 'app-readings',
  templateUrl: './readings.page.html',
  styleUrls: ['./readings.page.scss'],
})
export class ReadingsPage implements OnInit {

  hideHeader = false;
  lastY = 0;

  constructor(private router: Router) { }

  onScroll(event) {
    const currentY = event.detail.scrollTop;
 
    if (currentY > this.lastY) {
      // Scrolling down
      this.hideHeader = true;
    } else {
      // Scrolling up
      this.hideHeader = false;
    }
 
    this.lastY = currentY;
  }

  back() {
    // Redirect the user to the login page
    this.router.navigate(['/dashboard']);
  }

  ngOnInit() {
  }

}
