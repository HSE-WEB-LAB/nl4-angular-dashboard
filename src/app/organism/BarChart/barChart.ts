import {AfterViewInit, Component, Input, OnInit} from "@angular/core";
import {BarChartBackgroundComponent} from "../../molecules/BarChartBackground/barChartBackground.component";
import {ChartBarsComponent} from "../../molecules/ChartBars/chartBars.component";


@Component({
  selector: 'bar-chart',
  standalone: true,
  imports: [
    BarChartBackgroundComponent,
    ChartBarsComponent
  ],
  template: `
    <div class="barChart">
      <p class="chartTitle">
        {{ name }}
      </p>
      <div class="graphContainer">
        <bar-chart-background [backgroundShards]="backgroundShards" />
        <chart-bars
            [data]="data"
            [maxValue]="maxValueBar"
        />
      </div>

    </div>
  `
})

export class BarChart implements OnInit{
  @Input() data: any[] = []
  @Input() name = ''
  backgroundShards: any[] = []
  maxValueBar = 1

  ngOnInit() {
    let maxValue = this.data[0].value;
    this.data.forEach(({value}) => {
      if(value > maxValue) maxValue = value;
    })
    if(maxValue < 10){ //опционально
      maxValue = 10;
    }
    else{
      while(maxValue % 10 !== 0){
        maxValue -= 1;
      }
    }
    this.maxValueBar = maxValue;
    this.shardsGenerator(maxValue)
  }

  shardsGenerator(maxValue: number) {
    let startValue = maxValue / 4;
    for (let i = 4; i>=0; i--)
      this.backgroundShards.push(startValue * i);
  };
}
