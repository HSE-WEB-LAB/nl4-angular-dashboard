import {Component, Input} from "@angular/core";
import {WidgetCardComponent} from "../../molecules/WidgetCard/widgetCard.component";


@Component({
  selector: 'sales-widget',
  standalone: true,
  imports: [
    WidgetCardComponent
  ],
  template: `
    <div class="salesWidget">
      <p class="chartTitle">
        Today’s Sales
      </p>
      <div class="widgetsContainer">
        @for(widget of data; track widget; let index = $index) {
          <widget-card
            [data]="widget"
          />
        }
      </div>
    </div>
  `
})

export class SalesWidgetComponent{
  @Input() data: any[] = []
}
