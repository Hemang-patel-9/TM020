import { Component } from '@angular/core';

@Component({
  selector: 'app-dashboard-techtokens',
  templateUrl: './dashboard-techtokens.component.html',
  styleUrl: './dashboard-techtokens.component.css'
})
export class DashboardTechtokensComponent {
  numSequence(n: number): Array<number> {
    return Array(n);
  }
}