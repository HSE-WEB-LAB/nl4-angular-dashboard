import {Component} from "@angular/core";
import {BarChart} from "../../organism/BarChart/barChart";
// @ts-ignore
import {dashboardData} from "../../data"
import {SalesWidgetComponent} from "../../organism/SalesWidget/salesWidget.component";

@Component({
  standalone: true,
  selector: 'dashboard-widgets',
  imports: [
    BarChart,
    SalesWidgetComponent
  ],
  template: `
    <div class="dashboardWidgets">
      <bar-chart
        [data]="dashboardData.barChart.data"
        [name]="dashboardData.barChart.name"
      />
      <sales-widget [data]="dashboardData.todaySalesWidget.data" />
    </div>
  `
})

export class WidgetsComponent{
  protected readonly dashboardData = dashboardData;
}
