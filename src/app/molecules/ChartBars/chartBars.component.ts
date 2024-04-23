import {Component, Input} from "@angular/core";
import {SingleBarComponent} from "../../atoms/SingleBar/singleBar.component";


@Component({
  selector: 'chart-bars',
  standalone: true,
  imports: [
    SingleBarComponent
  ],
  template: `
    <div class="chartBars">
      @for (value of data; track value.value; let index = $index) {
        <single-bar
            [value]="value.value"
            [maxValue]="maxValue"
        />
      }
    </div>
  `
})

export class ChartBarsComponent{
  @Input() data: any[] = []
  @Input() maxValue = 1
}
