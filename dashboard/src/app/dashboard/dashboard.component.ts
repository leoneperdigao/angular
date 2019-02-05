import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs/Observable';

import { DataService } from './data.service';

declare var google: any;

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  private data: any;

  constructor(private dataService: DataService) {}

  ngOnInit() {
  	this.dataService.fetchData().subscribe(
  		data => {
  			this.data = data;
  			this.init();
  		});
  }

  /**
   * Initialize the API with 1s delay to integrate with Angular's API
   * 
   * @return void
   */
  init(): void {
    if(typeof(google) !== 'undefined') {
      google.charts.load('current', {'packages':['corechart']});
      setTimeout(() => {
      	google.charts.setOnLoadCallback(this.displayCharts());
      }, 1000);
    }
  }

  /**
   * Method called as soon as the graphics API is initialized.
   * Responsible for invoking graphing methods.
   *
   * @return void
   */
  displayCharts(): void {
  	this.showPieChart();
  	this.display3dPieChart();
  	this.displayBarChart();
  	this.displayLineChart();
  	this.displayColumnChart();
  	this.displayDonutChart();
  }

  /**
   * Displays the Pie Chart graph.
   *
   * @return void
   */
  showPieChart(): void {
  	const el = document.getElementById('pie_chart');
    const chart = new google.visualization.PieChart(el);

    chart.draw(this.obterDataTable(), this.getOptions());
  }

  /**
   * Displays the Pie Chart in 3D.
   *
   * @return void
   */
  display3dPieChart(): void {
  	const el = document.getElementById('3d_pie_chart');
  	const chart = new google.visualization.PieChart(el);
	const opcoes = this.getOptions();

    opcoes['is3D'] = true;
    chart.draw(this.obterDataTable(), opcoes);
  }

  /**
   * Displays the Donut Chart.
   *
   * @return void
   */
  displayDonutChart(): void {
  	const el = document.getElementById('donut_chart');
  	const chart = new google.visualization.PieChart(el);
    const opcoes = this.getOptions();

    opcoes['pieHole'] = 0.4;
    chart.draw(this.obterDataTable(), opcoes);
  }

  /**
   * Displays the Bar Chart
   *
   * @return void
   */
  displayBarChart(): void {
  	const el = document.getElementById('bar_chart');
    const chart = new google.visualization.BarChart(el);

    chart.draw(this.obterDataTable(), this.getOptions());
  }

  /**
   * Displays the Line Chart.
   *
   * @return void
   */
  displayLineChart(): void {
  	const el = document.getElementById('line_chart');
    const chart = new google.visualization.LineChart(el);
    
    chart.draw(this.obterDataTable(), this.getOptions());
  }

  /**
   * Displays the Column Chart.
   *
   * @return void
   */
  displayColumnChart(): void {
  	const el = document.getElementById('column_chart');
    const chart = new google.visualization.ColumnChart(el);
    
    chart.draw(this.obterDataTable(), this.getOptions());
  }

  /**
   * Creates and returns the DataTable object of the Graphics API,
    * responsible for defining the data of the graph.
   *
   * @return any
   */
  obterDataTable(): any {
  	const data = new google.visualization.DataTable();

    data.addColumn('string', 'Month');
    data.addColumn('number', 'Quantity');
    data.addRows(this.data);

    return data;
  }

  /**
   * Returns the options of the graphic, which include the title
   * and size of the graphic.
   *
   * @return any
   */
  getOptions(): any {
  	return {
    	'title': 'Number of entries first semester',
        'width': 400,
        'height': 300
    };
  }

}
