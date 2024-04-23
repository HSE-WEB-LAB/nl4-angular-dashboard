import {Component} from "@angular/core";
import {WidgetsComponent} from "../../templates/DashboardWidgets/widgets.component";


@Component({
  selector: 'dashboard-view',
  templateUrl: './dashboard.component.html',
  standalone: true,
  imports: [
    WidgetsComponent
  ]
})

export class DashboardComponent{}
