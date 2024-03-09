import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DataService {
  getUserName(): string {
    // Implement logic to fetch the user's name
    return 'John Ndegwa';
  }

  getNumberOfWarehouses(): number {
    // Implement logic to fetch the number of warehouses
    return 5;
  }

  // Implement methods to fetch other statistics data
}

