import { Component , AfterViewInit} from '@angular/core';
import Chart from 'chart.js/auto';
@Component({
  selector: 'app-dashboard',
  standalone: true,
  imports: [],
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.scss'
})
export class DashboardComponent implements AfterViewInit {
ngAfterViewInit() {
    new Chart('myChart', {
      type: 'line',
      data: {
        labels: ['Jan', 'Feb', 'Mar', 'Apr'],
        datasets: [{
          label: 'Orders',
          data: [10, 20, 15, 30],
          borderColor: 'orange'
        }]
      }
    });
  }
}




