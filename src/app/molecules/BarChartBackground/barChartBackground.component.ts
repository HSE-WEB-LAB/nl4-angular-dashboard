import {Component, Input} from "@angular/core";


@Component({
  selector: 'bar-chart-background',
  standalone: true,
  template: `
    <div class="barchartBackground">
      @for (value of backgroundShards; track value){
        <div>
          {{ value }}
          <span></span>
        </div>
      }

    </div>
  `
})

export class BarChartBackgroundComponent{
  @Input() backgroundShards: number[] = []
}
