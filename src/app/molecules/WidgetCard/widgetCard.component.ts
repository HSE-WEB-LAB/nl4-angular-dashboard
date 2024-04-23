import {AfterViewInit, Component, Input} from "@angular/core";
import {SvgviewComponent} from "../../atoms/SvgView/svgview.component";


@Component({
  selector: 'widget-card',
  standalone: true,
  imports: [
    SvgviewComponent
  ],
  template: `
    <div
      [style]="{backgroundColor: '#' + data.color.toString(), opacity: widgetOpacity}"
      class="widgetCard"
    >
      <svg-view
        [className]="'widgetCardIcon'"
        [svgUrl]="data.icon"
      />
      <div class="textContainer">
        <p class="widgetCardValue">
          {{ data.value + data.metrics }}
        </p>
        <p class="valueName">
          {{ data.name }}
        </p>
        <p class="additionalInfo">
          {{ data.additionalInfo }}
        </p>
      </div>
    </div>
  `
})

export class WidgetCardComponent implements AfterViewInit{
  @Input() data: any = {}
  widgetOpacity = 0

  ngAfterViewInit() {
    const interval = setInterval(() => {
      this.widgetOpacity += 0.01
      if(this.widgetOpacity >= 1) clearInterval(interval)
    }, 5)
  }
}
