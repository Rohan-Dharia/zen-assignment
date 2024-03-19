import { Component } from '@angular/core';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent {
  chart: any;
	
  chartOptions = {
    title:{
      text: "Revenue By Job Location"
    },
    animationEnabled: true,
    axisY: {
      includeZero: true,
      suffix: "K"
    },
    data: [{
      type: "bar",
      indexLabel: "{y}",
      yValueFormatString: "#,###K",
      dataPoints: [
        { label: "Social Circle", y: 15 },
        { label: "Malibu", y: 20 },
        { label: "Snohomish", y: 24 },
        { label: "New York", y: 29 },
        { label: "Everett", y: 73 }
      ]
    }]
  }	
  chartOptions2 = {
    title:{
      text: "Revenue By Job Type"
    },
    animationEnabled: true,
    axisY: {
      includeZero: true,
      suffix: "K"
    },
    data: [{
      type: "bar",
      indexLabel: "{y}",
      yValueFormatString: "#,###K",
      dataPoints: [
        { label: "Alaram System", y: 3 },
        { label: "BackFlow Testing", y: 9 },
        { label: "Diagnosis", y: 10 },
        { label: "Fire Extinguisher", y: 16 },
        { label: "Pump", y: 28 }
      ]
    }]
  }	
}
