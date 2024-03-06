import { Component, OnInit } from '@angular/core';
<<<<<<< HEAD
import { DataService } from '../services/data/data.service'; // Import your data service
import { AuthService } from 'src/app/lib/services/auth/auth.service';
import { Router } from '@angular/router';
=======
>>>>>>> eaa00be030fd7d3eb0f42ada3b2d1ef5d7717b0f

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.page.html',
<<<<<<< HEAD
  styleUrls: ['./dashboard.page.scss']
})
export class DashboardPage implements OnInit {
  userName: string | undefined;
  numberOfWarehouses: number | undefined;
  // Declare other statistic variables

  constructor(private router: Router, private dataService: DataService, private authService: AuthService) { }

  logout() {
    // Call the logout method from the authentication service
    this.authService.logout();
    // Redirect the user to the login page
    this.router.navigate(['/home']);
  }
  ngOnInit(): void {
    // Fetch dynamic data from the data service
    this.userName = this.dataService.getUserName();
    this.numberOfWarehouses = this.dataService.getNumberOfWarehouses();
    // Fetch other statistics data
  }
=======
  styleUrls: ['./dashboard.page.scss'],
})
export class DashboardPage implements OnInit {

  constructor() { }

  ngOnInit() {
  }

>>>>>>> eaa00be030fd7d3eb0f42ada3b2d1ef5d7717b0f
}
